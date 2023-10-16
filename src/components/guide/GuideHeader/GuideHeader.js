import React, { useState } from 'react';
import styles from './GuideHeader.module.css';
import rino1 from '../../../assets/images/guide/rino01.png'
import rino from '../../../assets/images/common/chat01.png'


function GuideHeader() {
    const [activeButton, setActiveButton] = useState('review'); // "review"를 기본값으로 설정

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <img src={rino} alt="Rino" />
                <p> 개인 위키 </p>
            </div>
            <div className={styles.nav}>
                <button 
                    className={`${styles.button} ${activeButton === 'review' ? styles.active : ''}`} 
                    onClick={() => setActiveButton('review')}
                >
                    복습하기
                </button>
                <button 
                    className={`${styles.button} ${activeButton === 'myConcept' ? styles.active : ''}`} 
                    onClick={() => setActiveButton('myConcept')}
                >
                    내 개념
                </button>
            </div>
        </div>
    );
}

export default GuideHeader;
