import React, { useState } from 'react';
import styles from './Question.module.css';
import yesimg from '../../../assets/images/filter/yes.png';
import noimg from '../../../assets/images/filter/no.png';

const Question = ({ onNextQuestion, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedOption(answer);

    // 애니메이션 시작
    setTimeout(() => {
        setAnimationCompleted(true);
        onNextQuestion(answer);
        onAnswer('experience', answer); 
    }, 300);  // 1초 후 다음 질문 표시 (애니메이션 시간에 따라 조정)
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.questionTitle}>Q1.</h2>
      <h3 className={styles.questionText}>투자 경험이 있나요?</h3>
      <div className={styles.answerContainer}>
        <div
            className={`${styles.answerOption} ${selectedOption === 'yes' ? styles.selected : ''} ${animationCompleted ? styles.animate : ''}`}
            onClick={() => handleAnswer('yes')}
        >
          <img src={yesimg} alt="Yes" />
          <p>있어요</p>
        </div>
        <div
            id={styles.Option2}
            className={`${styles.answerOption} ${selectedOption === 'no' ? styles.selected : ''} ${animationCompleted ? styles.animate : ''}`}
            onClick={() => handleAnswer('no')}
        >
          <img src={noimg} alt="No" />
          <p>없어요</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
