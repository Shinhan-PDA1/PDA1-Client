// CompanyInfoSector.js

import React from 'react';
import styles from './MarketIssue.module.css';
import plusimg from '../../../assets/images/main/plus.png'; 

function MarketIssue() {
  return (
    <div className={styles.marketissue}>
      <div className={styles.container}>
        <h2>시장 이슈</h2>
        <div className={styles.icongroup}>
          <img src={plusimg} alt="더보기 플러스 아이콘" style={{ width: '15px', height: '15px' }} />
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.rectangle}>
        <img src="#"  alt="회사 정보 데이터" />
      </div>
    </div>
  );
}

export default MarketIssue;