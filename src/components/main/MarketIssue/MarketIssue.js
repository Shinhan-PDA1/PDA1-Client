// MarketIssue.js

import React, { useState, useEffect } from 'react';
import styles from './MarketIssue.module.css'; 
import axios from 'axios';
import StockItem from '../MarketIssueItem/MarketIssueItem';


const MarketIssue = () => {

  const [stocks, setStocks] = useState([]); // Updated state name to better represent the data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/v1/shinhan/strategy/market-issue');
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
        <h2>마켓 이슈</h2>
      </div>
      <div className={styles.line}></div>
      <div className={styles.rectangle}>
      <p>증권사</p>
      <p>제목</p>
      <p>작성일</p>
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

export default MarketIssue;

