// SideNav.js

import React from 'react';
import styles from './SideNav.module.css'; 


function SideNav () {
  return (
    <div className={styles.sidenav}>
 <    div className={styles.navitem}>이 시각 증시</div>
      <div className={styles.navitem}>관심 분야 종목</div>
      <div className={styles.navitem}>순위별 종목</div>
      <div className={styles.navitem}>종목 분석 / 뉴스</div>
    </div>
  );
}

export default SideNav;