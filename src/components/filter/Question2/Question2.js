import React, { useState } from 'react';
import styles from './Question2.module.css';
import Financeimg from '../../../assets/images/filter/Finance.png';
import Chemicalimg from '../../../assets/images/filter/Chemical.png';
import Electricimg from '../../../assets/images/filter/Electric.png';
import Menufectureimg from '../../../assets/images/filter/Menufecture.png';
import Serviceimg from '../../../assets/images/filter/Service.png';
import Distributionimg from '../../../assets/images/filter/Distribution.png';

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
            <img src={Serviceimg} alt="service" />
            <p>서비스</p>
          </div>
          <div id={styles.option3}
            className={`${styles.ageOption} ${
              selectedOptions.includes('manufacture') && styles.selected
            }`}
            onClick={() => handleOptionClick('manufacture')}
          >
            <img src={Menufectureimg} alt="제조" />
            <p>제조</p>
          </div>
        </div> 
        <div className={styles.ageOptionsContainer}>
          <div id={styles.option4}
            className={`${styles.ageOption} ${
              selectedOptions.includes('chemistry') && styles.selected
            }`}
            onClick={() => handleOptionClick('chemistry')}
          >
            <img src={Chemicalimg} alt="화학" />
            <p>화학</p>
          </div>
          <div id={styles.option5}
            className={`${styles.ageOption} ${
              selectedOptions.includes('electronic') && styles.selected
            }`}
            onClick={() => handleOptionClick('electronic')}
          >
            <img src={Electricimg} alt="전기＊전자" />
            <p>전기 전자</p>
          </div>
          <div id={styles.option6}
            className={`${styles.ageOption} ${
              selectedOptions.includes('distribution') && styles.selected
            }`}
            onClick={() => handleOptionClick('distribution')}
          >
            <img src={Distributionimg} alt="유통" />
            <p>유통</p>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Question2;
