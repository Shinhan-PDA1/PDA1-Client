import React from 'react';
import styles from './Question5.module.css';
import ITimg from '../../../assets/images/filter/IT.png';
import Financeimg from '../../../assets/images/filter/Finance.png';
import Flightimg from '../../../assets/images/filter/Flight.png';
import Drinkimg from '../../../assets/images/filter/Drink.png';
import Medicalimg from '../../../assets/images/filter/Medical.png';
import Energyimg from '../../../assets/images/filter/Energy.png';


const Question5 = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.questionTitle}>Q5.</h2>
      <h3 className={styles.questionText}>관심있는 주식 분야 3개를 골라주세요</h3>
      <div className={styles.group}>
      <div className={styles.ageOptionsContainer}>
        <div className={styles.ageOption}>
          <img src={Financeimg} alt="금융" />
          <p>금융</p>
        </div>
        <div className={styles.ageOption}>
          <img src={ITimg} alt="IT" />
          <p>IT</p>
        </div>
      </div>
      <div className={styles.ageOptionsContainer}>
        <div className={styles.ageOption}>
          <img src={Flightimg} alt="항공" />
          <p>항공</p>
        </div>
        <div className={styles.ageOption}>
          <img src={Drinkimg} alt="주류" />
          <p>주류</p>
        </div>
      </div>
      <div className={styles.ageOptionsContainer}>
        <div className={styles.ageOption}>
          <img src={Medicalimg} alt="의료" />
          <p>의료</p>
        </div>
        <div className={styles.ageOption}>
          <img src={Energyimg} alt="에너지" />
          <p>에너지</p>
        </div>
      </div>
      </div>
      <div className={styles.submitContainer}>
        <p className={styles.submitButton}>제출</p>
      </div>
    </div>
  );
};

export default Question5;
