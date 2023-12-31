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
        <p>고객님의 현재 관심 종목입니다.</p>
      </div>
      <hr className={styles.line} />
      <div className={styles.themeContainer}>
        <span className={styles.arrow} onClick={() => switchTheme(-1)}>&#9664;</span>
        <div className={styles.themeItems}>
          {mockInterestedData[themeNames[currentThemeIndex]].items.map((item, index) => (
            <Link
              key={index}
              to={`/detail/${item.stock_code}`}
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
                    <h3>{item.curr_pric} 원</h3>
                    <p className={item.change_number.includes('▲') ? styles.positive : item.change_number.includes('▼') ? styles.negative : ''}>
                      {item.change_number}
                    </p>
                  </div>
                  <div
                    className={styles.changeRateContainer}
                    style={{ backgroundColor: item.change_rate.includes('-') ? 'blue' : 'red' }}
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