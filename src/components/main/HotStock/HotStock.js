// DecreaseSector.js

import React from 'react';
import styles from './HotStock.module.css';

function HotStock () {
  return (
    <div className={styles.hotsector}>
      <div className={styles.topgroup}>
        <h2>핫 이슈 종목</h2>
        <p>거래량/주가상승률/외국인매수/기관매수 기준에 따른 시장 상위종목</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.rectangle}>
        <img src="#" alt="1-5위 차트" />
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

export default HotStock;