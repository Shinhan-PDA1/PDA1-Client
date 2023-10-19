import React from 'react';
import styles from './Question3.module.css';
import longimg from '../../../assets/images/filter/LongTerm.png';
import shortimg from '../../../assets/images/filter/ShortTerm.png';

const Question3 = ({ onNextQuestion, onAnswer }) => {
  const handleOptionSelection = (selectedOption) => {
    setTimeout(() => {
      onNextQuestion(selectedOption);
      onAnswer('term', selectedOption); // 사용자의 응답을 상위 컴포넌트로 전달
    }, 300);  // 3초 후에 다음 질문으로 이동합니다.
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.questionTitle}>Q3.</h2>
      <h3 className={styles.questionText}>투자 선호 기간을 선택해주세요.</h3>
      <div className={styles.answerContainer}>
        <div className={styles.answerOption} onClick={() => handleOptionSelection('long')}>
          <img src={longimg} alt="장기" />
          <p>장기(1년 초과)</p>
        </div>
        <div id={styles.option2} className={styles.answerOption} onClick={() => handleOptionSelection('short')}>
          <img src={shortimg} alt="단기" />
          <p>단기(1년 이하)</p>
        </div>
      </div>
    </div>
  );
};

export default Question3;
