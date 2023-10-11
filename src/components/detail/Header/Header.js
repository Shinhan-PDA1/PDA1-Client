// Header.js
import React from 'react';
import "../../../styles/detail/detailGlobal.css"
import styles from './Header.module.css';

function Header() {
    return (
        <div className='container'>
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>신한 베타+</h1>
            </header>
        </div>
    );
}

export default Header;
