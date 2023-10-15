// StockStrategyItem.js

import React from 'react';
import styles from './StockStrategyItem.module.css';  // Assuming you have a CSS module for styling

const StockItem = ({ stock }) => {

    const { date, title, name, url } = stock;

      const handleClick = () => {
        window.open(url, '_blank');
      };

    return (
      <div className={styles.stockItem} onClick={handleClick}>
      <div className={styles.companyinfo}>신한투자증권</div>
      <div className={styles.issueTitle}>{title}</div>
      <div className={styles.issueInfo}>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
    );
  };
  
  export default StockItem;
