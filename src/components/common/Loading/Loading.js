import React, { useState, useEffect } from 'react';
import styles from './Loading.module.css';
import loading from '../../../assets/images/common/loadingIcon.png'

function Loading() {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prevPercent) => {
                if (prevPercent >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevPercent + 10; // 10%씩 증가
            });
        }, 200); // 0.2초 간격으로 퍼센트 증가

        return () => clearInterval(interval); // 컴포넌트 unmount 시에 interval 해제
    }, []);

    return (
        <div className={styles.loadingContainer}>
             <div className={styles.images}>
                {percent >= 10 && <img src={loading} alt="loading 1" />}
                {percent >= 40 && <img src={loading} alt="loading 2" />}
                {percent >= 60 && <img src={loading} alt="loading 3" />}
                {percent >= 80 && <img src={loading} alt="loading 4" />}
                {percent >= 100 && <img src={loading} alt="loading 5" />}

            </div>
            <div className={styles.progressBar}>
                <div className={styles.filler} style={{ width: `${percent}%` }}></div>
            </div>
            <div className={styles.percentText}>{percent}%</div>
        </div>
    );
}

export default Loading;
