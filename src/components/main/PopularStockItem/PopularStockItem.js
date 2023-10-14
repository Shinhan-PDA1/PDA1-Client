// PopularStockItem.js
import React from 'react';
import styles from './PopularStockItem.module.css';

const PopularStockItem = ({ stock }) => {
  
  return (
    <div className={styles.popularStockItem}>
      <p> {stock.stock_code}</p>
      <p> {stock.stock_name}</p>
      <p> {stock.category}</p>
    </div>
  );
};

export default PopularStockItem;



