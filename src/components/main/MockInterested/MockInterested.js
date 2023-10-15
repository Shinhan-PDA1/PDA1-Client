import React, { useState } from 'react';
import styles from './MockInterested.module.css';

const themes = {
  aviation: ["항공종목1", "항공종목2", "항공종목3", "항공종목4"],
  finance: ["금융종목1", "금융종목2", "금융종목3", "금융종목4"],
  mainstream: ["주류종목1", "주류종목2", "주류종목3", "주류종목4"]
};

function MockInterested() {
  const themeNames = Object.keys(themes);
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
          {themes[themeNames[currentThemeIndex]].map((item, index) => (
            <div key={index} className={styles.item}>{item}</div>
          ))}
        </div>
        <span className={styles.arrow} onClick={() => switchTheme(1)}>&#9654;</span>
      </div>
    </div>
  );
}

export default MockInterested;
