// NowStockSector.js

import React from 'react';
import styles from './NowStockSector.module.css';
import infoimg from '../../../assets/images/main/info.png';

function NowStockSector () {
  return (
    <div className={styles.nowstocksector}>
      <div className={styles.container}>
      <h2>이 시각 증시</h2>
        <p>현재 시간(추후)</p>
        {/* 여기에 현재 시간을 표시하는 코드를 추가 */}
      </div>
      <hr className={styles.line} />
      <div className={styles.rectanglegroup}>
        <div className={styles.rectangle}>
          <div className={styles.topcontainer}>
            <h3>코스피</h3>
            <img src={infoimg} alt="아이콘" style={{ width: '15px', height: '15px' }}/>
          </div>
          <div className={styles.chartgroup}>
            <img src="#" alt="지수 + 차트" />
          </div>
        </div>
        <div className={styles.rectangle}>
        <div className={styles.topcontainer}>
            <h3>코스닥</h3>
            <img src={infoimg} alt="아이콘" style={{ width: '15px', height: '15px' }}/>
          </div>
          <div className={styles.chartgroup}>
            <img src="#" alt="지수 + 차트" />
          </div>
        </div>
        <div className={styles.rectangle}>
        <div className={styles.topcontainer}>
            <h3>코스피 200</h3>
            <img src={infoimg} alt="아이콘" style={{ width: '15px', height: '15px' }}/>
          </div>
          <div className={styles.chartgroup}>
            <img src="#" alt="지수 + 차트" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NowStockSector;