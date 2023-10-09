import React from 'react';
import styles from './FinanceField.module.css';

function FinanceField() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldimg}>
        <img src="금융이미지경로.jpg" alt="금융 이미지" />
        <p>금융</p>
      </div>

      <div className={styles.fieldCheckBox}>
        <input type="checkbox" id="financeCheckbox" />
        <label htmlFor="financeCheckbox">금융 체크박스</label>
      </div>
    </div>
  );
}

export default FinanceField;



