import React from 'react';
import styles from './TopNav.module.css';

function TopNav({ scrollToComponent }) {
    return (
        <div className='container'>
            <nav className={styles['top-nav']}>
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
        </div>
    );
}

export default TopNav;
