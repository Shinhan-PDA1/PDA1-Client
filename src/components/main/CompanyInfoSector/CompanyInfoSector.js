// CompanyInfoSector.js

import React from 'react';
import styles from './CompanyInfoSector.module.css';
import plusimg from '../../../assets/images/main/plus.png'; 

function CompanyInfoSector() {
  return (
    <div className={styles.companyinfo}>
      <div className={styles.container}>
        <h2>종목 분석 / 기업 정보</h2>
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

export default CompanyInfoSector;