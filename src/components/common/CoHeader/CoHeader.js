import React from 'react';
import { NavLink } from 'react-router-dom';
import TextLogo from "../../../assets/images/common/TextLogo01.png"
import styles from './CoHeader.module.css';

function Header() {
    const fanID = "Fan ID"; // Replace with the actual ID or name from your state or props

    return (
        <header className={styles.header}>
            <div className={styles.topSection}>
                <img src={TextLogo} alt="Zootopia Logo" className={styles.logo} />
                <div className={styles.welcomeMessage}>
                    Welcome, {fanID} <span className={styles.editIcon}>✎</span>
                </div>
            </div>
            <nav className={styles.mainNav}>
                <NavLink to="/main" activeClassName={styles.active}>Home</NavLink>
                <NavLink to="/detail" activeClassName={styles.active}>Jourin's Guide</NavLink>
                <NavLink to="/main" activeClassName={styles.active}>Shinhan Report</NavLink>
                <NavLink to="/filter" activeClassName={styles.active}>My Page</NavLink>
            </nav>
        </header>
    );
}

export default Header;
