// MarketIssueItem.js

import React from 'react';
import styles from './MarketIssueItem.module.css';  // Assuming you have a CSS module for styling

const StockItem = ({ stock }) => {

    const { date, content, url, name } = stock;

    const extractTitle = (content) => {
        const titleRegex = /『(.*?)』/;
        const match = content.match(titleRegex);
        return match ? match[1] : '';
      };

      const handleClick = () => {
        window.open(url, '_blank');
      };

    return (
      <div className={styles.stockItem} onClick={handleClick}>
      <div>신한투자증권</div>
      <div className={styles.issueTitle}>{extractTitle(content)}</div>
      <div className={styles.issueInfo}>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
    );
  };
  
  export default StockItem;
