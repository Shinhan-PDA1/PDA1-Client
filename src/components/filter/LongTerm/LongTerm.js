import React from 'react';
import styles from './LongTerm.module.css';

function LongTerm() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldimg}>
        <img src="장기 투자 이미지경로.jpg" alt="장기 투자 이미지" />
        <p>장기 투자 선호</p>
      </div>

      <div className={styles.fieldCheckBox}>
        <input type="checkbox" id="longCheckbox" />
        <label htmlFor="longCheckbox">장기 투자 체크박스</label>
      </div>
    </div>
  );
}

export default LongTerm;



