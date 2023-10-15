import React, { useState } from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';
import TextLogo from "../../../assets/images/common/TextLogo01.png";
import ZutopiaLogo from "../../../assets/images/common/zutopiaLogo.png";
import searchIcon from '../../../assets/images/common/searchIcon.png';
import styles from './CoHeader.module.css';

function Header() {
    const fanID = "정희빈"; 
    const [searchTerm, setSearchTerm] = useState("");
    const navigate  = useNavigate ();

    const handleSearch = () => {
        if (searchTerm.trim() === "") return;  
        navigate('/detail');  
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.topSection}>
                <img src={TextLogo} alt="Text Logo" id={styles.TextLogo} />
                <img src={ZutopiaLogo} alt="Zootopia Logo" id={styles.ZutopiaLogo} />
                <div className={styles.welcomeMessage}>
                    Welcome, {fanID} 님 <span className={styles.editIcon}>✎</span>
                </div>
            </div>
            <div className={styles.navContainer}>
                <nav className={styles.mainNav}>
                    <NavLink to="/main" activeClassName={styles.active}>Home</NavLink>
                    <NavLink to="/guide" activeClassName={styles.active}>Jourin's Guide</NavLink>
                    <NavLink to="/detail" activeClassName={styles.active}>Shinhan Report</NavLink>
                    <NavLink to="/filter" activeClassName={styles.active}>My Page</NavLink>
                </nav>
                <div className={styles.searchContainer}>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className={styles.searchInput} 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button className={styles.searchButton} onClick={handleSearch}>
                        <img src={searchIcon} alt="Search" className={styles.searchIcon} />
                    </button>

                
                </div>
            </div>
        </header>
    );
}

export default Header;
