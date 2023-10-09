import React from 'react';
import styles from './ShortTerm.module.css';

function ShortTerm() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldimg}>
        <img src="단기 투자 이미지경로.jpg" alt="단기 투자 이미지" />
        <p>단기 투자 선호</p>
      </div>

      <div className={styles.fieldCheckBox}>
        <input type="checkbox" id="shortCheckbox" />
        <label htmlFor="shortCheckbox">단기 투자 체크박스</label>
      </div>
    </div>
  );
}

export default ShortTerm;



