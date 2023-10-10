import React, { useState, useEffect } from 'react';
import styles from './SideNav.module.css';

function SideNav({ scrollToComponent }) {
    const [topPosition, setTopPosition] = useState('30%');
    const [isBouncing, setIsBouncing] = useState(false); // isBouncing 변수 추가

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            if (scrollY + windowHeight >= docHeight - 50 && !isBouncing) {
                setIsBouncing(true);
                setTimeout(() => setIsBouncing(false), 300);
            } else {
                setTopPosition(`${30 + scrollY * 0.1}%`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isBouncing]);

    return (
        <div className={`container ${isBouncing ? 'bounce' : ''}`} style={{ top: topPosition }}>
            <nav className={styles['side-nav']}>
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

export default SideNav;
