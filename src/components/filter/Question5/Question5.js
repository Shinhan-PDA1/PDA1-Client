import React, { useState } from 'react';
import styles from './Question5.module.css';
import age1img from '../../../assets/images/filter/age1.png';
import age2img from '../../../assets/images/filter/age2.png';
import age3img from '../../../assets/images/filter/age3.png';
import age4img from '../../../assets/images/filter/age4.png';
import { Link } from 'react-router-dom';

const Question5 = ({ onNextQuestion, onAnswer }) => {
  const [selectedAge, setSelectedAge] = useState(null); // 선택한 연령 값을 상태로 관리

  const handleAgeSelection = (selectedAgeOption) => {
    setSelectedAge(selectedAgeOption); // 선택한 연령 값을 설정
    onAnswer('age', selectedAgeOption); // 선택한 연령 값을 상위 컴포넌트로 전달
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.questionTitle}>Q5.</h2>
      <h3 className={styles.questionText}>당신의 연령을 골라주세요</h3>
      <div className={styles.group}>
        <div className={styles.ageOptionsContainer}>
          <div
            className={`${styles.ageOption} ${
              selectedAge === '20세 미만' ? styles.selected : ''
            }`}
            onClick={() => handleAgeSelection('20세 미만')}
          >
            <img src={age1img} alt="20세 미만" />
            <p>만 20세 미만</p>
          </div>
          <div id={styles.option2}
            className={`${styles.ageOption} ${
              selectedAge === '40세 미만' ? styles.selected : ''
            }`}
            onClick={() => handleAgeSelection('40세 미만')}
          >
            <img src={age2img} alt="40세 미만" />
            <p>만 20세 ~ 39세</p>
          </div>
        </div>
        <div className={styles.ageOptionsContainer}>
          <div  id={styles.option3}
            className={`${styles.ageOption} ${
              selectedAge === '60세 미만' ? styles.selected : ''
            }`}
            onClick={() => handleAgeSelection('60세 미만')}
          >
            <img src={age3img} alt="60세 미만" />
            <p>만 40 ~ 59세</p>
          </div>
          <div  id={styles.option4}
            className={`${styles.ageOption} ${
              selectedAge === '60세 이상' ? styles.selected : ''
            }`}
            onClick={() => handleAgeSelection('60세 이상')}
          >
            <img src={age4img} alt="60세 이상" />
            <p>만 60세 이상</p>
          </div>
        </div>
      </div>
      <div className={styles.submitContainer}>
        <Link to="/main" className={styles.submitButton} onClick={() => onNextQuestion('age')}>
          제출
        </Link>
      </div>
    </div>
  );
};

export default Question5;
