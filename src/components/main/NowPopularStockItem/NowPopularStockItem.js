// NowPopularStockItem.js

import React from 'react';
import styles from './NowPopularStockItem.module.css';  // Assuming you have a CSS module for styling

const StockItem = ({ stock }) => {
  const colorClass = stock.variable_ranking > 0 ? styles.blue : stock.variable_ranking < 0 ? styles.red : '';
    return (
      <div className={styles.stockItem}>
        <p>{stock.stock_code}</p>
        <p>{stock.stock_name}</p>
        <p className={colorClass}>{stock.variable_ranking}</p>
        <p>{stock.ranking}%</p>
        <p>{stock.category}</p>
      </div>
    );
  };
  
  export default StockItem;
