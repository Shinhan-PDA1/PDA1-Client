import React from 'react';
import styles from './FinanceField.module.css';
import financeimg from '../../../assets//images/filter/FinanceField.png'


function FinanceField() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldimg}>
        <img src={financeimg} alt="금융 이미지" style={{ width: '100px', height: '100px' }} />
        <p>금융</p>
      </div>

      <div className={styles.fieldCheckBox}>
        <input type="checkbox" id="financeCheckbox" />
      </div>
    </div>
  );
}

export default FinanceField;



