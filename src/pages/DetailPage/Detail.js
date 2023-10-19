import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/common/Loading/Loading';
import StockInfo from "../../components/detail/StockInfo/StockInfo";
import TopNav from "../../components/detail/TopNav/TopNav";
import SideNav from "../../components/detail/SideNav/SideNav";
import Chart from '../../components/detail/Chart/Chart';
import MarketTrend from '../../components/detail/MarketTrend/MarketTrend';
import Finance from '../../components/detail/Finance/Finance';
import NewsAnnouncements from '../../components/detail/NewsAnnouncements/NewsAnnouncements';
import Reports from '../../components/detail/Reports/Reports';
import styles from './Detail.module.css';
import axios from 'axios';

function DetailPage() {
    const navigate = useNavigate();
    const infoRef = useRef(null); // useRef 사용
    const chartRef = useRef(null);
    const marketTrendRef = useRef(null);
    const financeRef = useRef(null);
    const newsAnnouncementsRef = useRef(null);
    const reportsRef = useRef(null);

    const [stockInfoResponse, setStockInfoResponse] = useState(null); // 초기값 null로 설정
    const [isLoading, setIsLoading] = useState(true);
    const [mainChartResponse, setMainChartResponse] = useState(null);
    const [chartCommentResponse, setChartCommentResponse] = useState(null);
    const [statementCommentResponse, setStatementCommentResponse] = useState(null);
    const [chartTableResponse, setChartTableResponse] = useState(null);

    const [financeCrawlingData, setFinanceCrawlingData] = useState(null);

    const { stock_number } = useParams();

    
// First useEffect for getting main data
useEffect(() => {
    console.log("GET API DATA...");
    console.log("stock number: ", stock_number);
    
    const apiUrl = 'http://localhost:8081/jootopia/v1/users/system/detail';
    axios.get(apiUrl + `?stockCode=${stock_number}`)
    .then((response) => {
        setMainChartResponse(response.data.mainChartResponse);
        setChartCommentResponse(response.data.chartCommentResponse);
        setStatementCommentResponse(response.data.statementCommentResponse);
        setChartTableResponse(response.data.chartTableResponse);
        setStockInfoResponse(response.data.stockInfoResponse);
    })
    .catch((error) => {
        console.error('Detail 데이터 불러오기 실패!', error);
    });
    
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
}, [stock_number]);

// Separate useEffect for financeCrawlingData
useEffect(() => {
    const apiUrl_crawl = 'http://localhost:4000/api/v1/crawling'; 
    axios.post(apiUrl_crawl + `?code=${stock_number}`)
    .then((response) => {
        console.log(response.data);
        setFinanceCrawlingData(response.data);
    })
    .catch((error) => {
        console.error('Detail 데이터 불러오기 실패!', error);
    });
}, []);

    
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
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div ref={infoRef} className={styles['animated-container']}><StockInfo infoData={stockInfoResponse} /></div>
                    <TopNav scrollToComponent={scrollToComponent} />
                    <SideNav scrollToComponent={scrollToComponent} /> 
                    <div ref={chartRef} className={styles['animated-container']}><Chart chartData={mainChartResponse} chartComment={chartCommentResponse} chartTable={chartTableResponse} /></div>
                    <div ref={marketTrendRef} className={styles['animated-container']}><MarketTrend /></div>
                    <div ref={financeRef} className={styles['animated-container']}><Finance statementComment={statementCommentResponse} financeCrawlingData={financeCrawlingData} /></div>
                    <div ref={newsAnnouncementsRef} className={styles['animated-container']}><NewsAnnouncements /></div>
                    <div ref={reportsRef} className={styles['animated-container']}><Reports /></div>
         
                </>
            )}
        </div>
    );
}

export default DetailPage;
