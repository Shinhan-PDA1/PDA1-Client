import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import StockInfo from "../../components/detail/StockInfo/StockInfo";
import TopNav from "../../components/detail/TopNav/TopNav";
import SideNav from "../../components/detail/SideNav/SideNav";
import Chart from '../../components/detail/Chart/Chart';
import MarketTrend from '../../components/detail/MarketTrend/MarketTrend';
import Finance from '../../components/detail/Finance/Finance';
import NewsAnnouncements from '../../components/detail/NewsAnnouncements/NewsAnnouncements';
import Reports from '../../components/detail/Reports/Reports';
import styles from './Detail.module.css';

function DetailPage() {
    const navigate = useNavigate();

    const chartRef = useRef(null);
    const marketTrendRef = useRef(null);
    const financeRef = useRef(null);
    const newsAnnouncementsRef = useRef(null);
    const reportsRef = useRef(null);

    const scrollToComponent = (componentName) => {
        let ref;
        switch (componentName) {
            case '시세차트':
                ref = chartRef;
                break;
            case '매매동향':
                ref = marketTrendRef;
                break;
            case '재무':
                ref = financeRef;
                break;
            case '뉴스 및 공시':
                ref = newsAnnouncementsRef;
                break;
            case '증권 레포트':
                ref = reportsRef;
                break;
            default:
                break;
        }
    
        if (ref && ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const components = [chartRef, marketTrendRef, financeRef, newsAnnouncementsRef, reportsRef];
            
            components.forEach(compRef => {
                const rect = compRef.current.getBoundingClientRect();
                
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    compRef.current.classList.add(styles['slide-up-on-scroll']);
                } else {
                    compRef.current.classList.remove(styles['slide-up-on-scroll']);
                }
            });
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <div className={styles['detail-page']}>
            <>
                <StockInfo />
                <TopNav scrollToComponent={scrollToComponent} />
                <SideNav scrollToComponent={scrollToComponent} /> 
                <div ref={chartRef} className={styles['animated-container']}><Chart /></div>
                <div ref={marketTrendRef} className={styles['animated-container']}><MarketTrend /></div>
                <div ref={financeRef} className={styles['animated-container']}><Finance /></div>
                <div ref={newsAnnouncementsRef} className={styles['animated-container']}><NewsAnnouncements /></div>
                <div ref={reportsRef} className={styles['animated-container']}><Reports /></div>
                <button className={styles['sell-button']} onClick={() => navigate('/feedback')}>
                    ▶ 매매하러 가기
                </button>
            </>
        </div>
    );
}

export default DetailPage;
