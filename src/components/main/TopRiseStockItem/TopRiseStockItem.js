// RecommendStockItem.js

import React from 'react';
import styles from './TopRiseStockItem.module.css';  // Assuming you have a CSS module for styling

const StockItem = ({ stock }) => {
    return (
      <div className={styles.stockItem}>
        <p>{stock.rank}</p>
        <p>{stock.stock_code}</p>
        <p>{stock.stock_name}</p>
      </div>
    );
  };
  
  export default StockItem;
