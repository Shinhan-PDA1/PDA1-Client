// Question3.js

import React from 'react';
import styles from './Question3.module.css';
import longtermImage from '../../../assets/images/filter/LongTerm.png'; // 대문자 'L'과 'T'를 사용
import shorttermImage from '../../../assets/images/filter/ShortTerm.png'; // 대문자 'S'와 'T'를 사용

const Question3 = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.questionTitle}>Q3.</h2>
      <h3 className={styles.questionText}>자금의 투자 가능 기간을 골라주세요</h3>
      <div className={styles.answerContainer}>
        <div className={styles.answerOption}>
          <img src={longtermImage} alt="장기" />
          <p>장기(1년 초과)</p>
        </div>
        <div className={styles.answerOption}>
          <img src={shorttermImage} alt="단기" />
          <p>단기(1년 이하)</p>
        </div>
      </div>
    </div>
  );
};

export default Question3;