// RecommendStock.js

import React, { useState, useEffect } from 'react';
import styles from './RecommendStock.module.css'; 
import axios from 'axios';
import StockItem from '../RecommendStockItem/RecommendStockItem';


const RecommendStock = () => {

  const [stocks, setStocks] = useState([]); // Updated state name to better represent the data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jootopia-infoconnector.shinhansec-pda.net/api/v1/shinhan/recommend/portfolio');
        setStocks(response.data.slice(0, 4));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts


  
  return (
    <div className={styles.popularsector}>
      <div className={styles.topgroup}>
        <h2>국내 추천 종목</h2>
        <p> 신한 리서치 센터 - 추천 국내 종목 포트폴리오</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.topthinline}></div>
      <div className={styles.rectangle}>
      <p>종목코드</p>
      <p>종목명</p>
      <p>현재가</p>
      <p>수익률</p>
      <p>편입일</p>
      </div>
      <div className={styles.bottomthinline}></div>
      <div className={styles.popularStockList}>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {stocks.map((stock) => (
          <StockItem key={stock.stock_code} stock={stock} />
          ))}
      </div>
    </div>
  );
}

export default RecommendStock;
