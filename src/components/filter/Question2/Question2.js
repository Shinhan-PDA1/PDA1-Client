// Question2.js

import React from 'react';
import styles from './Question2.module.css';
import age1img from '../../../assets/images/filter/age1.png';
import age2img from '../../../assets/images/filter/age2.png';
import age3img from '../../../assets/images/filter/age3.png';
import age4img from '../../../assets/images/filter/age4.png';

const Question2 = ({ onNextQuestion }) => {
  const handleAgeSelection = (selectedAge) => {
    onNextQuestion(selectedAge);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.questionTitle}>Q2.</h2>
      <h3 className={styles.questionText}>당신의 연령을 골라주세요</h3>
      <div className={styles.group}>
        <div className={styles.ageOptionsContainer}>
          <div className={styles.ageOption} onClick={() => handleAgeSelection('20세 미만')}>
            <img src={age1img} alt="20세 미만" />
            <p>20세 미만</p>
          </div>
          <div className={styles.ageOption} onClick={() => handleAgeSelection('40세 미만')}>
            <img src={age2img} alt="40세 미만" />
            <p>40세 미만</p>
          </div>
        </div>
        <div className={styles.ageOptionsContainer}>
          <div className={styles.ageOption} onClick={() => handleAgeSelection('60세 미만')}>
            <img src={age3img} alt="60세 미만" />
            <p>60세 미만</p>
          </div>
          <div className={styles.ageOption} onClick={() => handleAgeSelection('60세 이상')}>
            <img src={age4img} alt="60세 이상" />
            <p>60세 이상</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question2;
