import React from 'react';
import styles from './FlightField.module.css';
import flightimg from '../../../assets//images/filter/FlightField.png'


function FlightField() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldimg}>
        <img src={flightimg}alt="항공 이미지" style={{ width: '100px', height: '100px' }} />
        <p>항공</p>
      </div>

      <div className={styles.fieldCheckBox}>
        <input type="checkbox" id="FlightCheckbox" />
      </div>
    </div>
  );
}

export default FlightField;