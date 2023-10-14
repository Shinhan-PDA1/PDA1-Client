// StockItem.js

import React from 'react';
import styles from './PopularStockItem.module.css';  // Assuming you have a CSS module for styling

const StockItem = ({ stock }) => {
  const color = stock.revenue_rate > 0 ? styles.blue : stock.revenue_rate < 0 ? styles.red : '';
  return (
    <div className={`${styles.stockContainer} ${color}`}>
      <h3>{stock.stock_name}</h3>
      <div className={styles.bottomgroup}>
      <h3>{stock.transfer_price}</h3>
      <div className={styles.rate}>
      <p>{stock.revenue_rate}%</p>
      </div>
      </div>
    </div>
  );
};

export default StockItem;
