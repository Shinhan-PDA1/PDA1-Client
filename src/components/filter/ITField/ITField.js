import React from 'react';
import styles from './ITField.module.css';
import itimg from '../../../assets//images/filter/ITField.png'


function ITField() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldimg}>
        <img src={itimg} alt="IT 이미지" style={{ width: '100px', height: '100px' }} />
        <p>IT</p>
      </div>

      <div className={styles.fieldCheckBox}>
        <input type="checkbox" id="ITCheckbox" />
      </div>
    </div>
  );
}

export default ITField;