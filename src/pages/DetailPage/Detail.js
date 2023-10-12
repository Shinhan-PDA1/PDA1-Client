import React, { useState, useEffect, useRef } from 'react';
import Header from "../../components/detail/Header/Header";
import Loading from '../../components/common/Loading/Loading';
import StockInfo from "../../components/detail/StockInfo/StockInfo";
import TopNav from "../../components/detail/TopNav/TopNav";
import SideNav from "../../components/detail/SideNav/SideNav"; // 1. SideNav를 import
import Chart from '../../components/detail/Chart/Chart';
import MarketTrend from '../../components/detail/MarketTrend/MarketTrend';
import Finance from '../../components/detail/Finance/Finance';
import NewsAnnouncements from '../../components/detail/NewsAnnouncements/NewsAnnouncements';
import Reports from '../../components/detail/Reports/Reports';
import styles from './Detail.module.css';

function DetailPage() {
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태를 관리하는 state

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // 3초 후 로딩 상태를 false로 변경
        }, 1000); // 1000 밀리초 (1초) 후 실행

        return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리
    }, []); // 빈 의존성 배열을 사용하여 컴포넌트가 마운트될 때만 실행



    const chartRef = useRef(null);
    const marketTrendRef = useRef(null);
    const financeRef = useRef(null);
    const newsAnnouncementsRef = useRef(null);
    const reportsRef = useRef(null);

    const scrollToComponent = (componentName) => {
        switch (componentName) {
            case '시세차트':
                chartRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case '매매동향':
                marketTrendRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case '재무':
                financeRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case '뉴스 및 공시':
                newsAnnouncementsRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case '증권 레포트':
                reportsRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    };

    return (
        <div className={styles['detail-page']}>
        {isLoading ? (
            <Loading /> // 로딩 중일 때 Loading 컴포넌트를 렌더링
        ) : (
            <>
                <StockInfo />
                <TopNav scrollToComponent={scrollToComponent} />
                <SideNav scrollToComponent={scrollToComponent} /> 
                <div ref={chartRef}><Chart /></div>
                <div ref={marketTrendRef}><MarketTrend /></div>
                <div ref={financeRef}><Finance /></div>
                <div ref={newsAnnouncementsRef}><NewsAnnouncements /></div>
                <div ref={reportsRef}><Reports /></div>
            </>
        )}
    </div>
);
}

export default DetailPage;
