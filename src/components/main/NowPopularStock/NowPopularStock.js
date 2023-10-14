// RecommendStock.js

import React, { useState, useEffect } from 'react';
import styles from './NowPopularStock.module.css'; 
import axios from 'axios';
import StockItem from '../NowPopularStockItem/NowPopularStockItem';

const NowPopularStock = () => {

  const [stocks, setStocks] = useState([]); // Updated state name to better represent the data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/v1/shinhan/ranking/rising');
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
        <h2>실시간 인기 주식</h2>
        <p>실시간 현재가 조회수가 높은 종목</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.rectangle}>
      <p>종목코드</p>
      <p>종목명</p>
      <p>전일 대비 순위</p>
      <p>현재 순위</p>
      <p>카테고리</p>
      </div>
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

export default NowPopularStock;
