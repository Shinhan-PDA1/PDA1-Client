import React, { useState } from 'react';
import styles from './TopNav.module.css';

function TopNav() {
    const [selected, setSelected] = useState(null);

    return (
        <div className='container'>

        <nav className={styles['top-nav']}>
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
        </nav>
        </div>
    );
}

export default TopNav;
