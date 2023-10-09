import React from 'react';
import styles from './ITField.module.css';

function ITField() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldimg}>
        <img src="IT이미지경로.jpg" alt="IT 이미지" />
        <p>IT</p>
      </div>

      <div className={styles.fieldCheckBox}>
        <input type="checkbox" id="ITCheckbox" />
        <label htmlFor="ITCheckbox">IT 체크박스</label>
      </div>
    </div>
  );
}

export default ITField;