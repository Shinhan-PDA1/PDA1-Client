// Header.js
import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>신한 베타+</h1>
        </header>
    );
}

export default Header;
