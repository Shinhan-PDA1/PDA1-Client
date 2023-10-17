// NowStockSector.js

import React, { useState, useEffect, useRef } from 'react';
import styles from './NowStockSector.module.css';

function NowStockSector () {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [showStockInfo, setShowStockInfo] = useState({
    kospi: false,
    kosdaq: false,
    kospi200: false,
  });
  const kospiRef = useRef(null);
  const kosdaqRef = useRef(null);
  const kospi200Ref = useRef(null);


  useEffect(() => {
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
            <img src="#" alt="지수 + 차트" />
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
            <img src="#" alt="지수 + 차트" />
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
            <img src="#" alt="지수 + 차트" />
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