import React from 'react';
import styles from './LongTerm.module.css';
import longtermimg from '../../../assets/images/filter/LongTerm.png';

function LongTerm() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldimg}>
        <img src={longtermimg} alt="장기 투자 이미지" style={{ width: '100px', height: '100px' }} />
        <p>장기 투자 선호</p>
      </div>

      <div className={styles.fieldCheckBox}>
        <input type="checkbox" id="longCheckbox" />
      </div>
    </div>
  );
}

export default LongTerm;



