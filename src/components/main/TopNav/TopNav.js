// TopNav.js

import React from 'react';
import styles from './TopNav.module.css';

function TopNav({ scrollToComponent }) {
  return (
    <div className={styles.container}>
      <nav className={styles.navitem}>
        <ul>
          {['이 시각 증시', '관심 분야 종목', '인기 종목', '핫 이슈 종목', '시장 이슈', '투자 전략'].map((item, index) => (
            <li
              key={index}
              onClick={() => scrollToComponent(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default TopNav;
