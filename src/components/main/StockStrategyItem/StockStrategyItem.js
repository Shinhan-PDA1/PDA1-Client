// StockStrategyItem.js

import React from 'react';
import styles from './StockStrategyItem.module.css';  // Assuming you have a CSS module for styling
import pdfimg from '../../../assets/images/main/pdficon.jpg';


const StockItem = ({ stock }) => {

    const { date, title, name, url } = stock;

      const handleClick = () => {
        window.open(url, '_blank');
      };

    return (
      <div className={styles.stockItem} onClick={handleClick}>
      <div className={styles.companyinfo}>신한투자증권</div>
      <a href={url} target="_blank" className={styles.issueTitle}>
        {title}
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
