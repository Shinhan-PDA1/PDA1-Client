// RecommendStockItem.js

import React from 'react';
import styles from './RecommendStockItem.module.css';  // Assuming you have a CSS module for styling

const StockItem = ({ stock }) => {
    const colorClass = stock.revenue_rate > 0 ? styles.blue : stock.revenue_rate < 0 ? styles.red : '';
    return (
      <div className={styles.stockItem}>
        <p>{stock.stock_code}</p>
        <p>{stock.stock_name}</p>
        <p>{stock.transfer_price}</p>
        <p className={colorClass}>{stock.revenue_rate}%</p>
        <p>{stock.transfer_date}</p>
      </div>
    );
  };
  
  export default StockItem;
