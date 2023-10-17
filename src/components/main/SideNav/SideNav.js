import React, { useState } from 'react';
import styles from './SideNav.module.css';

function SideNav({ scrollToComponent }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={styles.container}>
            <nav className={`${styles['side-nav']} ${isOpen ? '' : styles['side-navClosed']}`}>
                <ul>
                    {['이 시각 증시', '관심 테마 종목', '추천 종목', '핫 이슈 종목', '마켓 이슈', '투자 전략'].map((item, index) => (
                        <li 
                            key={index} 
                            onClick={() => scrollToComponent(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
            <button className={styles['sideNav_button']} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'SideNav▲' : 'SideNav▼'}
            </button>
        </div>
    );
}

export default SideNav;