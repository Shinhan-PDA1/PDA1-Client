import React, { useEffect, useState } from 'react';
import '../../../styles/detail/detailGlobal.css'
import styles from './Chart.module.css';
import sol from '../../../assets/images/detail/sol01.png'
import mockChartData from '../../../data/detail/mockChartData';
import ReactApexChart from 'react-apexcharts'
import axios from 'axios';

function Chart() {
  const { tableData, aiReport } = mockChartData;
  
  const [candleData, setCandleData] = useState();
  const [volumeData, setVolumeData] = useState();
  const [lineData5, setLineData5] = useState();
  const [lineData20, setLineData20] = useState();
  const [lineData60, setLineData60] = useState();

  useEffect(()=>{
    console.log("GET API DATA...");
    const apiUrl = 'http://localhost:8080/api/v1/stock/information/test?code=005930';
    axios.get(apiUrl)
    .then((response) =>{

      const inputData = response.data.output2.reverse();

      const dailyCandleData = [];
      const volumeData = [];
      const movingAverageData5 = [];
      const movingAverageData20 = [];
      const movingAverageData60 = [];

      let sum5 = 0;
      let sum20 = 0;
      let sum60 = 0;

      for(let i = 0; i < inputData.length; i++) {
        sum5 += Number(inputData[i].stck_clpr);
        sum20 += Number(inputData[i].stck_clpr);
        sum60 += Number(inputData[i].stck_clpr);

        const date = inputData[i].stck_bsop_date;
        const year = date.substring(0,4);
        const month = date.substring(4,6);
        const day = date.substring(6,8);

        dailyCandleData.push({
          x: `${year}-${month}-${day}`,
          y: [
            inputData[i].stck_oprc,
            inputData[i].stck_hgpr,
            inputData[i].stck_lwpr,
            inputData[i].stck_clpr
          ],
        });

        volumeData.push({
          x: `${year}-${month}-${day}`,
          y: inputData[i].acml_vol,
        });

        if(i >= 59) {
          movingAverageData60.push({
            x: `${year}-${month}-${day}`,
            y: `${Math.floor(sum60/60)}`,
          });
          movingAverageData20.push({
            x: `${year}-${month}-${day}`,
            y: `${sum20/20}`,
          });
          movingAverageData5.push({
            x: `${year}-${month}-${day}`,
            y: `${sum5/5}`,
          });
          sum60 -= Number(inputData[i-59].stck_clpr);
          sum20 -= Number(inputData[i-19].stck_clpr);
          sum5 -= Number(inputData[i-4].stck_clpr);
        } else if(i >= 19) {
          movingAverageData60.push({
            x: `${year}-${month}-${day}`,
            y: `${Math.floor(sum60/i)}`,
          });
          movingAverageData20.push({
            x: `${year}-${month}-${day}`,
            y: `${sum20/20}`,
          });
          movingAverageData5.push({
            x: `${year}-${month}-${day}`,
            y: `${sum5/5}`,
          });
          sum20 -= Number(inputData[i-19].stck_clpr);
          sum5 -= Number(inputData[i-4].stck_clpr);
        } else if(i >= 4) {
          movingAverageData60.push({
            x: `${year}-${month}-${day}`,
            y: `${Math.floor(sum60/i)}`,
          });
          movingAverageData20.push({
            x: `${year}-${month}-${day}`,
            y: `${Math.floor(sum20/i)}`,
          });
          movingAverageData5.push({
            x: `${year}-${month}-${day}`,
            y: `${sum5/5}`,
          });
          sum5 -= Number(inputData[i-4].stck_clpr);
        } else {
          movingAverageData60.push({
            x: `${year}-${month}-${day}`,
            y: `${Math.floor(sum60/(i+1))}`,
          });
          movingAverageData20.push({
            x: `${year}-${month}-${day}`,
            y: `${Math.floor(sum20/(i+1))}`,
          });
          movingAverageData5.push({
            x: `${year}-${month}-${day}`,
            y: `${Math.floor(sum5/(i+1))}`,
          });
        }
      }
      console.log("5이평선", movingAverageData5);
      console.log("20이평선", movingAverageData20);
      console.log("60이평선", movingAverageData60);
      setLineData5(movingAverageData5);
      setLineData20(movingAverageData20);
      setLineData60(movingAverageData60);
      setVolumeData(volumeData); 
      setCandleData(dailyCandleData);
    })
    .catch((error) => {
      console.error('데이터 불러오기 실패!', error);
    });
  }, []);
   
  const candlestickSeries = [
      {
          name: "일봉", // 범례에 표시될 이름
          type: "candlestick", // 캔들스틱 그래프로 설정
          data: candleData,
      },
  ];

  // 막대 그래프 데이터 시리즈 설정
  const barSeries = [
      {
          name: "거래량", // 범례에 표시될 이름
          type: "bar", // 막대 그래프로 설정
          data: volumeData,
      },
  ];

// 꺾은선 그래프 데이터 시리즈 설정
  const lineSeries = [
      {
          name: "5일 이동평균선", // 범례에 표시될 이름
          type: "line", // 꺾은선 그래프로 설정
          data: lineData5,
          color: '#00FF00',
      },
      {
          name: "20일 이동평균선", // 범례에 표시될 이름
          type: "line", // 꺾은선 그래프로 설정
          data: lineData20,
          color: '#FFCC00',
      },
      {
          name: "60일 이동평균선", // 범례에 표시될 이름
          type: "line", // 꺾은선 그래프로 설정
          data: lineData60,
          color: '#FF0000',
      },
      // {
      //     name: "120일 이동평균선", // 범례에 표시될 이름
      //     type: "line", // 꺾은선 그래프로 설정
      //     data: line120ChartData,
      // },
  ];

  // 차트 옵션 설정
  const mainChartOptions = {
      chart: {
        type: "candlestick", // 초기 그래프 유형 설정 (캔들스틱)
      },
      title: {
          text: "일봉, 5일, 20일, 60일 이동평균선",
          align: "left",
      },
      stroke: {
          curve: 'smooth',
          width: 2,
      },
      xaxis: {
          type: "category",
          labels: {
            formatter: function (value) {
              return value;
              // const date = new Date(value);
              // console.log(value);  
              // console.log(date);
              // const day = date.getDate();
              // const month = date.toLocaleString('default', { month: 'short' });
              // if(day == 1) return `${day} ${month}`;
              // return `${day}`
            }
          },
          min: 40,
      },
      yaxis: {
          show: true,
      },
      plotOptions: {
          candlestick: {
              colors: {
                  upward: '#FF0000',
                  downward: '#0000FF',
              },
          },
      },
  };

  const volumeChartOptions = {
    chart: {
        height: 200,
        type: "bar",
    },
    title: {
        text: "거래량",
        align: "left",
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    xaxis: {
        type: "category",
    },
    yaxis: {
        show: true,
    },
};

return (
  <div className="container">
    <div className={styles["price-chart"]}>
      <div className="component-header">
        <h2>CHART</h2>
        <p>차트를 통해 시세를 살펴볼까요?</p>
      </div>
      <div className={styles["content-container"]}>
        <div className="showChart">
          <ReactApexChart
            options={mainChartOptions}
            series={candlestickSeries.concat(lineSeries)}
            type="candlestick"
            width={800}
            height={500}
          />
          <ReactApexChart
            options={volumeChartOptions}
            series={barSeries}
            type="line"
            width={800}
            height={200}
          />
        </div>
        <table className={styles["chart-table"]}>
          <tbody>
            {Object.entries(tableData).map(([key, value], index) => (
              <tr key={index}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="component-header">
        <h2>AI REPORT</h2>
        <p>차트 해석이 어렵다면 신한AI분석을 참고!해보세요.</p>
      </div>
      <div className={styles["ai-report"]}>
        <hr />
        <div className={styles["textarea-container"]}>
          <img
            src="sol01.jpg"
            alt="AI Icon"
            className={styles["ai-image"]}
          />
          <textarea value={aiReport} readOnly />
        </div>
      </div>
    </div>
  </div>
);
}

export default Chart;