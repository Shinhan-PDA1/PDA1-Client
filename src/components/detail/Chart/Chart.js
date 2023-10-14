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
  const [lineData120, setLineData120] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    console.log("GET API DATA...");
    const apiUrl = 'http://localhost:8080/api/v1/stock/information/test?code=005930';
    axios.get(apiUrl)
    .then((response) =>{

      const inputData = response.data.chartData.reverse();

      const dailyCandleData = [];
      const volumeData = [];
      const movingAverageData5 = [];
      const movingAverageData20 = [];
      const movingAverageData60 = [];
      const movingAverageData120 = [];

      let sum5 = 0;
      let sum20 = 0;
      let sum60 = 0;
      let sum120 = 0;

      for(let i = 0; i < inputData.length; i++) {
        sum120 += Number(inputData[i].close_price);

        if (i >= 60) {
          sum60 += Number(inputData[i].close_price);
        }

        if (i >= 100) {
          sum20 += Number(inputData[i].close_price);
        }

        if (i >= 115) {
          sum5 += Number(inputData[i].close_price);
        }

        if (i >= 119) {
          const date = inputData[i].date;
          const year = date.substring(0,4);
          const month = date.substring(4,6);
          const day = date.substring(6,8);

          dailyCandleData.push({
            x: `${year}-${month}-${day}`,
            y: [
              inputData[i].open_price,
              inputData[i].high_price,
              inputData[i].low_price,
              inputData[i].close_price
            ],
          });
  
          volumeData.push({
            x: `${year}-${month}-${day}`,
            y: inputData[i].trading_volume,
          });

          movingAverageData120.push({
            x: `${year}-${month}-${day}`,
            y: `${Math.floor(sum120/120)}`,
          });
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
          sum120 -= Number(inputData[i-119].close_price);
          sum60 -= Number(inputData[i-59].close_price);
          sum20 -= Number(inputData[i-19].close_price);
          sum5 -= Number(inputData[i-4].close_price);
        }
      }
      setLineData5(movingAverageData5);
      setLineData20(movingAverageData20);
      setLineData60(movingAverageData60);
      setLineData120(movingAverageData120);
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
      {
          name: "120일 이동평균선", // 범례에 표시될 이름
          type: "line", // 꺾은선 그래프로 설정
          data: lineData120,
          color: '#663399',
      },
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
              return //value;
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
          <div className={styles["showChart"]}>
            <ReactApexChart
              options={mainChartOptions}
              series={candlestickSeries.concat(lineSeries)}
              type="candlestick"
              width={600}
              height={400}
            />
            <ReactApexChart
              options={volumeChartOptions}
              series={barSeries}
              type="line"
              width={600}
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
            src={sol}
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