import React from 'react';
import styles from './ShortTerm.module.css';
import shortermimg from '../../../assets/images/filter/ShortTerm.png';


function ShortTerm() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldimg}>
        <img src={shortermimg} alt="단기 투자 이미지" style={{ width: '100px', height: '100px' }} />
        <p>단기 투자 선호</p>
      </div>

      <div className={styles.fieldCheckBox}>
        <input type="checkbox" id="shortCheckbox" />
      </div>
    </div>
  );
}

export default ShortTerm;



