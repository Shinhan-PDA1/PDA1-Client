// TopRiseStock.js

import React, { useState, useEffect } from 'react';
import styles from './TopRiseStock.module.css'; 
import axios from 'axios';
import StockItem from '../TopRiseStockItem/TopRiseStockItem';


const TopRiseStock = () => {

  const [stocks, setStocks] = useState([]); // Updated state name to better represent the data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/v1/shinhan/ranking/issue?query_type=2');
        setStocks(response.data.slice(0, 5));
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
        <h2>핫 이슈 종목</h2>
        <p>주가 상승률 상위 종목</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.rectangle}>
      <p>순위</p>
      <p>종목코드</p>
      <p>종목명</p>
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

export default TopRiseStock;
