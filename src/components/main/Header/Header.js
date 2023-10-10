import React from 'react';
import styles from './Header.module.css';
import logoimg from '../../../assets//images/main/logo.png'

function Header () {
    return (
        <header>
        <div className={styles.container}>
            <img src={logoimg} alt="신한 투자 증권" style={{ width: '300px', height: '80px' }} />
            <p>갑을병님이 접속중입니다</p>
        </div>
        <h1>신한 베타 B+</h1>
        </header>
  );
}
  
  export default Header;