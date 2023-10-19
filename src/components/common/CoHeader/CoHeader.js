import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import TextLogo from "../../../assets/images/common/TextLogo01.png";
import ZutopiaLogo from "../../../assets/images/common/zutopiaLogo.png";
import searchIcon from '../../../assets/images/common/searchIcon.png';
import styles from './CoHeader.module.css';
import axios from 'axios';

function Header({ onLogin, isLoggedIn, onLogout }) {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [fanID, setFanID] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.trim() === "") return;

        console.log("GET API DATA...");
        const apiUrl = 'http://jootopia-mainserver-service.team-1.svc.cluster.local/jootopia/v1/users/system/search';
        axios.get(apiUrl + `?query=${searchTerm.trim()}`)
        .then((response) =>{
            navigate(`/detail/${response.data}`);
        })
        .catch((error) => {
          console.error('Detail 데이터 불러오기 실패!', error);
          alert("올바른 종목명 또는 종목코드를 넣어주세요!")
        });
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    const handleLoginClick = () => {
        navigate('/login');
        // setIsLoggedIn(true);
    }

    const handleSigninClick = () => {
        // You can add your specific behavior for the "Signin" button here
        // For now, let's just prevent any action
    }

    const handleLogoutClick = () => {
        onLogout();
        setFanID("");
    }

    return (
        <header className={styles.header}>
            <div className={styles.topSection}>
                <img src={TextLogo} alt="Text Logo" id={styles.TextLogo} />
                <img src={ZutopiaLogo} alt="Zootopia Logo" id={styles.ZutopiaLogo} />
                <div className={styles.welcomeMessage}>
                    {isLoggedIn ? (
                        <>
                            환영합니다, 고객님
                            <button className={styles.logBtn}  onClick={handleLogoutClick}>Logout</button>
                        </>
                    ) : (
                        <>
                            <button className={styles.logBtn} onClick={handleLoginClick}>Login</button>
                            <button className={styles.logBtn} onClick={handleSigninClick}>Signin</button>
                        </>
                    )}
                </div>
            </div>
            <div className={styles.navContainer}>
                <nav className={styles.mainNav}>
                    <NavLink to="/main" activeClassName={styles.active}>Home</NavLink>
                    <NavLink to="/guide" activeClassName={styles.active}>Jourin's Guide</NavLink>
                    <NavLink to="https://www.shinhansec.com/" activeClassName={styles.active}>Shinhan Report</NavLink>
                    <NavLink to="/filter" activeClassName={styles.active}>My Page</NavLink>
                </nav>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="종목명 또는 종목코드를 입력하세요"
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
