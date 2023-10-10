import React from 'react';
import styles from './DrinkField.module.css';
import drinkimg from '../../../assets//images/filter/DrinkField.png'

function DrinkField() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldimg}>
        <img src={drinkimg} alt="주류 이미지" style={{ width: '100px', height: '100px' }} />
        <p>주류</p>
      </div>

      <div className={styles.fieldCheckBox}>
        <input type="checkbox" id="drinkCheckbox" />
      </div>
    </div>
  );
}

export default DrinkField;



