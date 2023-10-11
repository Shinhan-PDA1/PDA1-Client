// DecreaseSector.js

import React from 'react';
import styles from './DecreaseSector.module.css';

function DecreaseSector () {
  return (
    <div className={styles.decreasesector}>
      <h2>하락률 상위</h2>
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

export default DecreaseSector;