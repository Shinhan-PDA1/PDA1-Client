// MarketIssueItem.js

import React from 'react';
import styles from './MarketIssueItem.module.css';  // Assuming you have a CSS module for styling
import pdfimg from '../../../assets/images/main/pdficon.jpg';

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
      <div className={styles.stockItem} >
      <div className={styles.companyinfo}>신한투자증권</div>
      <a href={url} target="_blank" className={styles.issueTitle}>
        {extractTitle(content)}
      </a>      
      <img 
          onClick={handleClick}
          src={pdfimg} 
          alt="PDF Icon" 
          className={styles.pdfIcon}
          style={{ width: '1em', height: '1em' }}
          />
      <div className={styles.issueInfo}>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
    );
  };
  
  export default StockItem;
