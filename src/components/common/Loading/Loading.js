import React, { useEffect } from 'react';

import PropagateLoader from "react-spinners/PropagateLoader";
import styles from './Loading.module.css';
import loading from '../../../assets/images/common/chat01.png';

function Loading({ onLoadingComplete }) {


    useEffect(() => {
         
        // 실제 서버로부터 데이터를 받아오려면  API 호출 로직을 추가
        /*
        fetchData().then(data => {
            setIsLoading(false);
            if (onLoadingComplete) {
                onLoadingComplete();
            }
        });
        */

        // 이 타이머는 임시사용 ,  실제 서버 통신이 구현되면 제거
        const timer = setTimeout(() => {
            if (onLoadingComplete) {
                onLoadingComplete();
            }
        }, 5000); // 5초 후에 로딩 완료 (이 시간은 서버 응답 시간에 따라 조절 가능)

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <div className={styles.loadingContainer}>
            <div className={styles.images}>
                <img src={loading} alt="loading" />
                <img src={loading} alt="loading" />
                <img src={loading} alt="loading" />

            </div>
            <PropagateLoader color={"#123abc"} size={15} /> : 

        </div>
    );
}

export default Loading;
