// Question3.js

import React from 'react';
import styles from './Question3.module.css';
import longimg from '../../../assets/images/filter/longterm.png';
import shortimg from '../../../assets/images/filter/shortterm.png';

const Question3 = ({ onNextQuestion, onAnswer }) => { // onAnswer prop 추가
  const handleOptionSelection = (selectedOption) => {
    onNextQuestion(selectedOption);
    onAnswer('term', selectedOption); // 사용자의 응답을 상위 컴포넌트로 전달
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.questionTitle}>Q3.</h2>
      <h3 className={styles.questionText}>자금의 투자 가능 기간을 골라주세요</h3>
      <div className={styles.answerContainer}>
        <div className={styles.answerOption} onClick={() => handleOptionSelection('장기(1년 초과)')}>
          <img src={longimg} alt="장기" />
          <p>장기(1년 초과)</p>
        </div>
        <div id={styles.option2} className={styles.answerOption} onClick={() => handleOptionSelection('단기(1년 이하)')}>
          <img src={shortimg} alt="단기" />
          <p>단기(1년 이하)</p>
        </div>
      </div>
    </div>
  );
};

export default Question3;
