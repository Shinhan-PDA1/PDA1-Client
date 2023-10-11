import React from 'react';
import '../../../style/detail/detailGlobal.css'
import styles from './Chart.module.css';
import mockChartData from '../../../data/detail/mockChartData';
import ReactApexChart from 'react-apexcharts'

function Chart() {
    const {
      tableData, aiReport, candleChartData, 
      barChartData, line5ChartData, line20ChartData,
      line60ChartData, line120ChartData } = mockChartData;

    const candlestickSeries = [
        {
            name: "일봉", // 범례에 표시될 이름
            type: "candlestick", // 캔들스틱 그래프로 설정
            data: candleChartData,
        },
    ];

    // 막대 그래프 데이터 시리즈 설정
    const barSeries = [
        {
            name: "거래량", // 범례에 표시될 이름
            type: "bar", // 막대 그래프로 설정
            data: barChartData,
        },
    ];

  // 꺾은선 그래프 데이터 시리즈 설정
    const lineSeries = [
        {
            name: "5일 이동평균선", // 범례에 표시될 이름
            type: "line", // 꺾은선 그래프로 설정
            data: line5ChartData,
        },
        {
            name: "20일 이동평균선", // 범례에 표시될 이름
            type: "line", // 꺾은선 그래프로 설정
            data: line20ChartData,
        },
        {
            name: "60일 이동평균선", // 범례에 표시될 이름
            type: "line", // 꺾은선 그래프로 설정
            data: line60ChartData,
        },
        {
            name: "120일 이동평균선", // 범례에 표시될 이름
            type: "line", // 꺾은선 그래프로 설정
            data: line120ChartData,
        },
    ];

    // 차트 옵션 설정
    const mainChartOptions = {
        chart: {
            height: 350,
            type: "candlestick", // 초기 그래프 유형 설정 (캔들스틱)
        },
        title: {
            text: "일봉, 5일, 20일, 60일, 120일 이동평균선",
            align: "left",
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        xaxis: {
            type: "datetime",
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
          type: "datetime",
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
          <div className="TestChart">
            <ReactApexChart
              options={mainChartOptions}
              series={candlestickSeries.concat(lineSeries)}
              type="line"
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
              src="path-to-image.jpg"
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