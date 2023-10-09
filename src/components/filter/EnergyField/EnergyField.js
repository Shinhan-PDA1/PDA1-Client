import React from 'react';
import styles from './EnergyField.module.css';

function EnergyField() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldimg}>
        <img src="에너지 이미지경로.jpg" alt="에너지 이미지" />
        <p>에너지</p>
      </div>

      <div className={styles.fieldCheckBox}>
        <input type="checkbox" id="energyCheckbox" />
        <label htmlFor="energyCheckbox">에너지 체크박스</label>
      </div>
    </div>
  );
}

export default EnergyField;