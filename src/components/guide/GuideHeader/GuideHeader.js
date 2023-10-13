import React from 'react';
import styles from './GuideHeader.module.css';
import doremi from '../../../assets/images/common/doremi01.png'

function GuideHeader() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <img src={doremi}></img>
                <p>희빈님의 개인 위키 </p>
            </div>
            <div className={styles.nav}>
                <button className={styles.review}>복습하기</button>
                <button className={styles.myConcept}>내 개념</button>
            </div>
 
        </div>
    );
}

export default GuideHeader;
