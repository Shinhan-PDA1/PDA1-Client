import React, { useState, useEffect, useRef } from 'react';
import Loading from '../../components/common/Loading/Loading';
import GuideHeader from '../../components/guide/GuideHeader/GuideHeader';
import Term from '../../components/guide/Term/Term'
import styles from './Guide.module.css';
import Concept from '../../components/guide/Concept/Concept';

function DetailPage() {
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태를 관리하는 state

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // 3초 후 로딩 상태를 false로 변경
        }, 1); // 1000 밀리초 (1초) 후 실행

        return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리
    }, []); // 빈 의존성 배열을 사용하여 컴포넌트가 마운트될 때만 실행



   
    return (
        <div className={styles['guide-page']}>
        {isLoading ? (
            <Loading /> // 로딩 중일 때 Loading 컴포넌트를 렌더링
        ) : (
            <>
                <GuideHeader />
                <Term />
                <Concept />
            
            </>
        )}
    </div>
);
}

export default DetailPage;
