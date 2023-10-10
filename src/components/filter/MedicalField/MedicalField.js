import React from 'react';
import  styles from './MedicalField.module.css';
import medicalimg from '../../../assets//images/filter/MedicalField.png'


function MedicalField() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldimg}>
        <img src={medicalimg} alt="의료 이미지" style={{ width: '100px', height: '100px' }} />
        <p>의료</p>
      </div>

      <div className={styles.fieldCheckBox}>
        <input type="checkbox" id="medicalCheckbox" />
      </div>
    </div>
  );
}

export default MedicalField;



