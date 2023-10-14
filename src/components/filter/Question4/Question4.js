// Question4.js

import React from 'react';
import styles from './Question4.module.css';
import increaseimg from '../../../assets/images/filter/increase.png';
import decreaseimg from '../../../assets/images/filter/decrease.png';

const Question4 = ({ onNextQuestion, onAnswer }) => { // onAnswer prop 추가
  const handleOptionSelection = (selectedOption) => {
    onNextQuestion(selectedOption);
    onAnswer('Q4', selectedOption); // 사용자의 응답을 상위 컴포넌트로 전달
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.questionTitle}>Q4.</h2>
      <h3 className={styles.questionText}>수입원의 추이가 어떻게 되나요</h3>
      <div className={styles.answerContainer}>
        <div className={styles.answerOption} onClick={() => handleOptionSelection('향후 증가')}>
          <img src={increaseimg} alt="향후 증가" />
          <p>향후 증가</p>
        </div>
        <div id={styles.option2} className={styles.answerOption} onClick={() => handleOptionSelection('향후 감소')}>
          <img src={decreaseimg} alt="향후 감소" />
          <p>향후 감소</p>
        </div>
      </div>
    </div>
  );
};

export default Question4;
