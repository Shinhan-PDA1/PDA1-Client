// Question3.js

import React from 'react';
import styles from './Question3.module.css';
import longimg from '../../../assets/images/filter/longterm.png';
import shortimg from '../../../assets/images/filter/shortterm.png';

const Question3 = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.questionTitle}>Q3.</h2>
      <h3 className={styles.questionText}>자금의 투자 가능 기간을 골라주세요</h3>
      <div className={styles.answerContainer}>
        <div className={styles.answerOption}>
          <img src={longimg} alt="장기" />
          <p>장기(1년 초과)</p>
        </div>
        <div className={styles.answerOption}>
          <img src={shortimg} alt="단기" />
          <p>단기(1년 이하)</p>
        </div>
      </div>
    </div>
  );
};

export default Question3;