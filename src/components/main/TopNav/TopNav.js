// TopNav.js

import React from 'react';
import styles from './TopNav.module.css'

function TopNav () {
  return (
    <div className={styles.topnav}>
      <div className={styles.navitem}>증권홈</div>
      <div className={styles.navitem}>국내 증시</div>
      <div className={styles.navitem}>해외 증시</div>
      <div className={styles.navitem}>주린이 가이드</div>
      <div className={styles.navitem}>레포트</div>
      <div className={styles.navitem}>뉴스</div>
    </div>
  );
}

export default TopNav;