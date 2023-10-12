// Interested.js

import React from 'react';
import styles from './InterestedSector.module.css'; 


function InterestedSector () {
  return (
    <div className={styles.interested}>
      <div className={styles.container}>
      <h2>관심 분야 종목</h2>
      <p className="disclaimer">AI 전문가의 해석을 보고 싶으면 종목이름을 클릭하세요</p>
      </div>
      <hr className={styles.line} />
      <div className={styles.rectanglegroup}>
        <div className={styles.rectangle}>
          <div className={styles.topcontainer}>
            <img src="#" alt="로고" />
            <h3>종목</h3>
          </div>
        </div>
        <div className={styles.rectangle}>
          <div className={styles.topcontainer}>
            <img src="#" alt="로고" />
            <h3>종목</h3>
          </div>
        </div>
        <div className={styles.rectangle}>
          <div className={styles.topcontainer}>
            <img src="#" alt="로고" />
            <h3>종목</h3>
          </div>
        </div>
        <div className={styles.rectangle}>
          <div className={styles.topcontainer}>
            <img src="#" alt="로고" />
            <h3>종목</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterestedSector;
