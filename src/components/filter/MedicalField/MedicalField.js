import React from 'react';
import  styles from './MedicalField.module.css';

function MedicalField() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldimg}>
        <img src="의료 이미지경로.jpg" alt="의료 이미지" />
        <p>의료</p>
      </div>

      <div className={styles.fieldCheckBox}>
        <input type="checkbox" id="medicalCheckbox" />
        <label htmlFor="medicalCheckbox">의료 체크박스</label>
      </div>
    </div>
  );
}

export default MedicalField;



