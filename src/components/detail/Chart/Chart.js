import React, { useEffect, useState } from 'react';
import '../../../styles/detail/detailGlobal.css'
import styles from './Chart.module.css';
import sol from '../../../assets/images/detail/sol04.png'
import ReactApexChart from 'react-apexcharts'
import axios from 'axios';

function Chart(props) {
  
  const [candleData, setCandleData] = useState();
  const [volumeData, setVolumeData] = useState();
  const [lineData5, setLineData5] = useState();
  const [lineData20, setLineData20] = useState();
  const [lineData60, setLineData60] = useState();
  const [lineData120, setLineData120] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [mainchartData, setMainChartData] = useState();
  const [chartTable, setChartTable] = useState();
  const [chartComment, setChartComment] = useState();

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
        
    console.log("GET PROP DATA...");
    console.log("chartData: ", props.chartData.chartData);
    console.log("chartTable: ", props.chartTable);
    console.log("chartComment: ", props.chartComment);

    setMainChartData(props.chartData.chartData);
    setChartTable(props.chartTable);
    setChartComment(props.chartComment);

    const inputData = props.chartData.chartData.reverse();

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
  }, []);

  const newChartTableData = {
    "시장구분":props.chartTable.stock_market,
    "연중최고(원)":props.chartTable.annual_high,
    "연중최저(원)":props.chartTable.annual_low,
    "자본금(원)":props.chartTable.capital,
    "상장주식수":props.chartTable.listed_stock_number,
    "시가총액(원)":props.chartTable.market_capital,
  }
   
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
          text: "일봉, 5일, 20일, 60일 120일 이동평균선",
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


// 데이터의 숫자 값들에 ,를 찍어서 포맷팅
const formattedChartTable = {};

for (const key in chartTable) {
  const value = chartTable[key];
  // 숫자로 변환하고, 숫자가 아닌 경우는 그대로 두기
  formattedChartTable[key] = isNaN(value) ? value : parseInt(value).toLocaleString();
}
console.log(formattedChartTable);

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
              width={700}
              height={400}
            />
            <ReactApexChart
              options={volumeChartOptions}
              series={barSeries}
              type="line"
              width={700}
              height={200}
            />
          </div>
 
          <table className={styles["chart-table"]}>
          <tbody>
            {Object.entries(newChartTableData).map(([key, value], index) => (
              <tr key={index}>
                <td>{key}</td>
                <td>{isNaN(value) ? value : parseInt(value).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>

</table>

      </div>
      <div className="component-header">
        <h2>AI REPORT</h2>
        <p>고객님의 투자성향(단기/장기)맞춤 차트 AI REPORT</p>
      </div>
      <div className={styles["ai-report"]}>
        <hr />
        <div className={styles["textarea-container"]}>
          <img
            src={sol}
            alt="AI Icon"
            className={styles["ai-image"]}
          />
          <textarea value={props.chartComment.chart_short_comment} readOnly />
        </div>
      </div>
    </div>
  </div>
);
}

export default Chart;