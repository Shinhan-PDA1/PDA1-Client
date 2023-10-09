import React from 'react';
import styles from './DrinkField.module.css';

function DrinkField() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldimg}>
        <img src="주류 이미지경로.jpg" alt="주류 이미지" />
        <p>주류</p>
      </div>

      <div className={styles.fieldCheckBox}>
        <input type="checkbox" id="drinkCheckbox" />
        <label htmlFor="drinkCheckbox">주류 체크박스</label>
      </div>
    </div>
  );
}

export default DrinkField;



