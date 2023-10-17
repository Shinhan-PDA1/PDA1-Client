import React, { useState } from 'react';
import styles from './SideNav.module.css';

function SideNav({ scrollToComponent }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            <nav className={`${styles['side-nav']} ${isOpen ? '' : styles['side-navClosed']}`}>
                <ul>
                    {['시세차트', '매매동향', '재무', '뉴스 및 공시', '증권 레포트'].map((item, index) => (
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

