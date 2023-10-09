import React from 'react';
import styles from './FlightField.module.css';

function FlightField() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldimg}>
        <img src="항공 이미지경로.jpg" alt="항공 이미지" />
        <p>항공</p>
      </div>

      <div className={styles.fieldCheckBox}>
        <input type="checkbox" id="FlightCheckbox" />
        <label htmlFor="FlightCheckbox">항공 체크박스</label>
      </div>
    </div>
  );
}

export default FlightField;