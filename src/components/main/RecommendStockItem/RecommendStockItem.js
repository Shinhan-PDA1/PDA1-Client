// RecommendStockItem.js

import React from 'react';
import styles from './RecommendStockItem.module.css';  // Assuming you have a CSS module for styling

const StockItem = ({ stock }) => {
    const colorClass = stock.revenue_rate > 0 ? styles.blue : stock.revenue_rate < 0 ? styles.red : '';
  return (
    <div className={`${styles.stockContainer} ${colorClass}`}>
      <h3>{stock.stock_name}</h3>
      <div className={styles.bottomgroup}>
      <h3>{stock.transfer_price}</h3>
      <div className={`${styles.rate} ${colorClass}`}>
      <p>{stock.revenue_rate}%</p>
      </div>
      </div>
    </div>
  );
};

export default StockItem;
