import React, { useState, useEffect } from 'react';
import styles from './SideNav.module.css';

function SideNav() {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['시세차트', '매매동향', '재무', '뉴스 및 공시', '증권 레포트'];
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop) {
                    setSelected(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles['side-nav']}>
            <ul>
                {['시세차트', '매매동향', '재무', '뉴스 및 공시', '증권 레포트'].map((item, index) => (
                    <li 
                        key={index} 
                        className={selected === item ? styles['active'] : ''}
                        onClick={() => setSelected(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideNav;
