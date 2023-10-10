import React from 'react';
import styles from './EnergyField.module.css';
import energyimg from '../../../assets//images/filter/EnergyField.png'


function EnergyField() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldimg}>
        <img src={energyimg} alt="에너지 이미지" style={{ width: '100px', height: '100px' }} />
        <p>에너지</p>
      </div>

      <div className={styles.fieldCheckBox}>
        <input type="checkbox" id="energyCheckbox" />
      </div>
    </div>
  );
}

export default EnergyField;