// PopularStock.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './PopularStock.module.css'; 

const PopularStock = () => {

  const [users, setUsers] = useState(null);   // 결과값
  const [loading, setLoading] = useState(false); // 로딩되는지 여부
  const [error, setError] = useState(null); // 에러
  
  return (
    <div className={styles.popularsector}>
      <div className={styles.topgroup}>
        <h2>인기 종목</h2>
        <p>실시간 현재가 조회수가 높은 종목</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.rectangle}>
        <div className={styles.bottomgroup}>
          <div className={styles.timegroup}>
              <p>현재 시간(추후)</p>
            {/* 여기에 실시간 시간을 표시하는 코드를 추가 */}
          </div>
          <div className={styles.moreinfo}>
            <p>더보기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularStock;
