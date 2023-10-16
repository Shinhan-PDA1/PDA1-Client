import React, { useState } from 'react';
import styles from './Question2.module.css';
import ITimg from '../../../assets/images/filter/IT.png';
import Financeimg from '../../../assets/images/filter/Finance.png';
import Flightimg from '../../../assets/images/filter/Flight.png';
import Drinkimg from '../../../assets/images/filter/Drink.png';
import Medicalimg from '../../../assets/images/filter/Medical.png';
import Energyimg from '../../../assets/images/filter/Energy.png';

const Question2 = ({ onAnswer, onNextQuestion }) => {
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

    if (newSelectedOptions.length === 3) {
      setTimeout(() => {
        onNextQuestion();
        onAnswer('theme', newSelectedOptions);
      }, 300);  // 3초 후에 다음 질문으로 이동합니다.
    }
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.questionTitle}>Q2.</h2>
      <h3 className={styles.questionText}>관심있는 주식 분야 3개를 선택해주세요.</h3>
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
              selectedOptions.includes('service') && styles.selected
            }`}
            onClick={() => handleOptionClick('service')}
          >
            <img src={ITimg} alt="service" />
            <p>서비스</p>
          </div>
          <div id={styles.option3}
            className={`${styles.ageOption} ${
              selectedOptions.includes('manufacture') && styles.selected
            }`}
            onClick={() => handleOptionClick('manufacture')}
          >
            <img src={Flightimg} alt="제조업" />
            <p>제조업</p>
          </div>
        </div> 
        <div className={styles.ageOptionsContainer}>
          <div id={styles.option4}
            className={`${styles.ageOption} ${
              selectedOptions.includes('chemistry') && styles.selected
            }`}
            onClick={() => handleOptionClick('chemistry')}
          >
            <img src={Drinkimg} alt="화학" />
            <p>화학</p>
          </div>
          <div id={styles.option5}
            className={`${styles.ageOption} ${
              selectedOptions.includes('electronic') && styles.selected
            }`}
            onClick={() => handleOptionClick('electronic')}
          >
            <img src={Medicalimg} alt="전기＊전자" />
            <p>전기 전자</p>
          </div>
          <div id={styles.option6}
            className={`${styles.ageOption} ${
              selectedOptions.includes('distribution') && styles.selected
            }`}
            onClick={() => handleOptionClick('distribution')}
          >
            <img src={Energyimg} alt="유통업" />
            <p>유통업</p>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Question2;
