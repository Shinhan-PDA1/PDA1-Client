import React, { useState } from 'react';
import styles from './MockInterested.module.css';
import { Link } from 'react-router-dom';
import mockInterestedData from '../../../data/main/mockInterestedData';


function MockInterested() {
  const themeNames = Object.keys(mockInterestedData);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const switchTheme = (direction) => {
    let nextIndex = currentThemeIndex + direction;
    if (nextIndex < 0) {
      nextIndex = themeNames.length - 1;
    } else if (nextIndex >= themeNames.length) {
      nextIndex = 0;
    }

    setCurrentThemeIndex(nextIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2>관심 테마 종목</h2>
        <p>AI 전문가의 해석을 보고 싶으면 종목 이름을 클릭하세요</p>
      </div>
      <hr />
      <div className={styles.themeContainer}>
        <span className={styles.arrow} onClick={() => switchTheme(-1)}>&#9664;</span>
        <div className={styles.themeItems}>
          {mockInterestedData[themeNames[currentThemeIndex]].items.map((item, index) => (
            <Link
            key={index}
            to={`/detail`}
            className={styles.itemLink}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div className={styles.item}>
              <div className={styles.nameCodeContainer}>
                <h3>{item.item_name}</h3>
                <p>({item.stock_code})</p>
              </div>
              <div className={styles.priceChangeRateContainer}>
                <div className={styles.priceContainer}>
                  <h3>{item.curr_pric}</h3>
                  <p className={item.change_number >= 0 ? styles.positive : styles.negative}>
                    {item.change_number}
                  </p>
                </div>
                <div
                  className={styles.changeRateContainer}
                  style={{ backgroundColor: item.change_rate.includes('-') ? 'red' : 'blue' }}
                >
                  <p>{item.change_rate}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
        </div>
        <span className={styles.arrow} onClick={() => switchTheme(1)}>&#9654;</span>
      </div>
    </div>
  );
}

export default MockInterested;