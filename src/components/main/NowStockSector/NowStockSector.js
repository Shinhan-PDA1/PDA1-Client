// NowStockSector.js

import React, { useState, useEffect, useRef } from 'react';
import styles from './NowStockSector.module.css';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts'

function NowStockSector () {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [showStockInfo, setShowStockInfo] = useState({
    kospi: false,
    kosdaq: false,
    kospi200: false,
  });
  const [kospi, setKospi] = useState();
  const [kosdaq, setKosdaq] = useState();
  const [kospi200, setKospi200] = useState();
  const kospiRef = useRef(null);
  const kosdaqRef = useRef(null);
  const kospi200Ref = useRef(null);

  useEffect(() => {
    console.log("GET API DATA...");
    const apiUrl = 'http://localhost:4000/api/v1/getmajorstock';
    axios.post(apiUrl)
    .then((response) =>{
      const inputData = response.data;

      const kospiData = [];
      const kosdaqData = [];
      const kospi200Data = [];

      for(let i = 0; i < inputData.length; i++){

        kospiData.push({
          x: inputData[i].date,
          y: inputData[i].kospi,
        });

        kosdaqData.push({
          x: inputData[i].date,
          y: inputData[i].kosdaq,
        });

        kospi200Data.push({
          x: inputData[i].date,
          y: inputData[i].kospi200,
        });
      }
      setKospi(kospiData);
      setKosdaq(kosdaqData);
      setKospi200(kospi200Data);
    })
    .catch((error) => {
      console.error('데이터 불러오기 실패!', error);
    });

    // 함수를 정의하고, 1초마다 현재 시각을 갱신합니다.
    const updateCurrentTime = () => setCurrentTime(new Date());
    const intervalId = setInterval(updateCurrentTime, 1000);

    // 컴포넌트가 언마운트되면 clearInterval을 통해 갱신을 멈춥니다.
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // 두 번째 인자로 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 useEffect가 실행되도록 합니다.


  const KospiSeries = [
    {
      name: "Kospi", // 범례에 표시될 이름
      type: "line", // 꺾은선 그래프로 설정
      data: kospi,
      //color: '#00FF00',
    },
  ]

  const KosdaqSeries = [
    {
      name: "Kosdaq", // 범례에 표시될 이름
      type: "line", // 꺾은선 그래프로 설정
      data: kosdaq,
      //color: '#00FF00',
    },
  ]

  const Kospi200Series = [
    {
      name: "Kospi200", // 범례에 표시될 이름
      type: "line", // 꺾은선 그래프로 설정
      data: kospi200,
      //color: '#00FF00',
    },
  ]

  const mainChartOptions = {
    chart: {
      type: "line", // 초기 그래프 유형 설정
      toolbar: {
        show: false,
      },
    },
    // title: {
    //     text: "일봉, 5일, 20일, 60일 이동평균선",
    //     align: "left",
    // },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    xaxis: {
        type: "category",
        labels: {
          formatter: function (value) {
            return "";
          }
        },
    },
    yaxis: {
        show: true,
    },
  };

  const handleClickOutside = (event) => {
    if (
      kospiRef.current &&
      !kospiRef.current.contains(event.target) &&
      kosdaqRef.current &&
      !kosdaqRef.current.contains(event.target) &&
      kospi200Ref.current &&
      !kospi200Ref.current.contains(event.target)
    ) {
      setShowStockInfo({
        kospi: false,
        kosdaq: false,
        kospi200: false,
      });
    }
  };

  const toggleStockInfo = (stockType) => {
    setShowStockInfo((prev) => ({
      ...prev,
      [stockType]: !prev[stockType],
    }));
  };

  return (
    <div className={styles.nowstocksector}>
      <div className={styles.container}>
      <h2>이 시각 증시</h2>
        <p>{currentTime.toLocaleTimeString()}</p>
      </div>
      <hr className={styles.line} />
      <div className={styles.rectanglegroup}>
        <div className={styles.rectangle}>
        <div className={`${styles.topcontainer} ${showStockInfo.kospi ? styles.hide : ''}`}>
          <h3>코스피</h3>
          <button onClick={() => toggleStockInfo('kospi')}>?</button>
        </div>
        <div
            ref={kospiRef}
            className={`${styles.chartgroup} ${showStockInfo.kospi ? styles.hide : ''}`}
        >
          <ReactApexChart
              options={mainChartOptions}
              series={KospiSeries}
              type="line"
              width={280}
              height={150}
            />
        </div>
          {showStockInfo.kospi && (
            <div className={styles.stockInfo}>
              <p>증권거래소에 상장된 종목들의 주식 가격을 종합적으로 표시한 수치</p>
            </div>
          )}
        </div>
        <div className={styles.rectangle}>
        <div className={`${styles.topcontainer} ${showStockInfo.kosdaq ? styles.hide : ''}`}>
          <h3>코스닥</h3>
          <button onClick={() => toggleStockInfo('kosdaq')}>?</button>
        </div>
        <div
            ref={kosdaqRef}
            className={`${styles.chartgroup} ${showStockInfo.kosdaq ? styles.hide : ''}`}
          >
            <ReactApexChart
              options={mainChartOptions}
              series={KosdaqSeries}
              type="line"
              width={280}
              height={150}
            />
          </div>
          {showStockInfo.kosdaq && (
            <div className={styles.stockInfo}>
              <p>증권거래소와 같은 특정한 거래장소가 없고 컴퓨터와 통신망을 이용해 주식을 매매하는 전자거래 시장</p>
            </div>
          )}
        </div>
        <div className={styles.rectangle}>
        <div className={`${styles.topcontainer} ${showStockInfo.kospi200 ? styles.hide : ''}`}>
          <h3>코스피 200</h3>
          <button onClick={() => toggleStockInfo('kospi200')}>?</button>
        </div>
        <div
            ref={kospi200Ref}
            className={`${styles.chartgroup} ${showStockInfo.kospi200 ? styles.hide : ''}`}
          >
          <ReactApexChart
              options={mainChartOptions}
              series={Kospi200Series}
              type="line"
              width={280}
              height={150}
            />
          </div>
          {showStockInfo.kospi200 && (
            <div className={styles.stockInfo}>
              <p>시장 대표성, 유동성, 업종 대표성을 고려하여 선정된 한국을 대표하는 200개 주식의 시가총액을 지수화한 것</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NowStockSector;