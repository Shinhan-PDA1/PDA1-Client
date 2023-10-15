// RecommendStockItem.js

import React from 'react';
import styles from './TopTransactionStockItem.module.css';  // Assuming you have a CSS module for styling

const StockItem = ({ stock }) => {
    const colorClass = stock.revenue_rate > 0 ? styles.blue : stock.revenue_rate < 0 ? styles.red : '';
    return (
      <div className={styles.stockItem}>
        <p>{stock.rank}</p>
        <p>{stock.stock_code}</p>
        <p>{stock.stock_name}</p>
      </div>
    );
  };
  
  export default StockItem;
