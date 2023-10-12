// Question.js

import React from 'react';
import styles from './Question.module.css';
import yesimg from '../../../assets/images/filter/yes.png';
import noimg from '../../../assets/images/filter/no.png';

const Question = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.questionTitle}>Q1.</h2>
      <h3 className={styles.questionText}>투자 경험이 있나요</h3>
      <div className={styles.answerContainer}>
        <div className={styles.answerOption}>
          <img src={yesimg} alt="Yes" />
          <p>네</p>
        </div>
        <div className={styles.answerOption}>
          <img src={noimg} alt="No" />
          <p>아니요</p>
        </div>
      </div>
    </div>
  );
};

export default Question;