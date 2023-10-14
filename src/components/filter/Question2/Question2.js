import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Question2.module.css';
import ITimg from '../../../assets/images/filter/IT.png';
import Financeimg from '../../../assets/images/filter/Finance.png';
import Flightimg from '../../../assets/images/filter/Flight.png';
import Drinkimg from '../../../assets/images/filter/Drink.png';
import Medicalimg from '../../../assets/images/filter/Medical.png';
import Energyimg from '../../../assets/images/filter/Energy.png';

const Question2 = ({ onAnswer, onNextQuestion }) => { // onAnswer와 onNextQuestion prop 추가
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
  const isSelected = selectedOptions.includes(option);
  let newSelectedOptions;

  if (isSelected) {
    newSelectedOptions = selectedOptions.filter((selected) => selected !== option);
  } else {
    newSelectedOptions = [...selectedOptions, option];
  }

  setSelectedOptions(newSelectedOptions);

  if (newSelectedOptions.length === 3) { // 3개의 옵션이 선택되면
    onNextQuestion(); // 다음 질문으로 넘어갑니다.
    onAnswer('Q2', newSelectedOptions); // 선택된 옵션을 상위 컴포넌트로 전달합니다.
  }
};

  return (
    <div className={styles.container}>
      <h2 className={styles.questionTitle}>Q2.</h2>
      <h3 className={styles.questionText}>관심있는 주식 분야 3개를 골라주세요</h3>
      <div className={styles.group}>
        <div className={styles.ageOptionsContainer}>
          <div 
            className={`${styles.ageOption} ${
              selectedOptions.includes('Finance') && styles.selected
            }`}
            onClick={() => handleOptionClick('Finance')}
          >
            <img src={Financeimg} alt="금융" />
            <p>금융</p>
          </div>
          <div id={styles.option2}
            className={`${styles.ageOption} ${
              selectedOptions.includes('IT') && styles.selected
            }`}
            onClick={() => handleOptionClick('IT')}
          >
            <img src={ITimg} alt="IT" />
            <p>IT</p>
          </div>
          <div id={styles.option3}
            className={`${styles.ageOption} ${
              selectedOptions.includes('Flight') && styles.selected
            }`}
            onClick={() => handleOptionClick('Flight')}
          >
            <img src={Flightimg} alt="항공" />
            <p>항공</p>
          </div>
        </div> 
        <div className={styles.ageOptionsContainer}>
          <div id={styles.option4}
            className={`${styles.ageOption} ${
              selectedOptions.includes('Drink') && styles.selected
            }`}
            onClick={() => handleOptionClick('Drink')}
          >
            <img src={Drinkimg} alt="주류" />
            <p>주류</p>
          </div>
          <div id={styles.option5}
            className={`${styles.ageOption} ${
              selectedOptions.includes('Medical') && styles.selected
            }`}
            onClick={() => handleOptionClick('Medical')}
          >
            <img src={Medicalimg} alt="의료" />
            <p>의료</p>
          </div>
          <div id={styles.option6}
            className={`${styles.ageOption} ${
              selectedOptions.includes('Energy') && styles.selected
            }`}
            onClick={() => handleOptionClick('Energy')}
          >
            <img src={Energyimg} alt="에너지" />
            <p>에너지</p>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Question2;
