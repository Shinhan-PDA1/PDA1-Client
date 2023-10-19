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

    const chartRef = useRef(null);
    const marketTrendRef = useRef(null);
    const financeRef = useRef(null);
    const newsAnnouncementsRef = useRef(null);
    const reportsRef = useRef(null);


    const [isLoading, setIsLoading] = useState(true); // 로딩 상태를 관리하는 상태 변수
    const [mainChartResponse, setMainChartResponse] = useState();
    const [chartCommentResponse, setChartCommentResponse] = useState();
    const [statementCommentResponse, setStatementCommentResponse] = useState();
    const [chartTableResponse, setChartTableResponse] = useState();
    const [financeCrawlingData, setFinanceCrawlingData] = useState();

    const { stock_number } = useParams();

    useEffect(() => {

        console.log("GET API DATA...");
        console.log("stock number: ", stock_number);
        const apiUrl = 'http://jootopia-mainserver-service.team-1.svc.cluster.local/jootopia/v1/users/system/detail';
        axios.get(apiUrl + `?stockCode=${stock_number}`)
        //axios.get(apiUrl + `?stockCode=005930`) //삭제
        .then((response) =>{
            // console.log("Detail, response: ", response);
            // console.log("Detail: ", response.data.mainChartResponse);
            // console.log("Detail: ", response.data.chartCommentResponse);
            // console.log("Detail: ", response.data.statementCommentResponse);
            // console.log("Detail: ", response.data.chartTableResponse);

            setMainChartResponse(response.data.mainChartResponse);
            setChartCommentResponse(response.data.chartCommentResponse);
            setStatementCommentResponse(response.data.statementCommentResponse);
            setChartTableResponse(response.data.chartTableResponse);
        })
        .catch((error) => {
          console.error('Detail 데이터 불러오기 실패!', error);
        });

        const apiUrl_crawl = 'http://localhost:4000//api/v1/crawling';
        axios.post(apiUrl_crawl + `?code=${stock_number}`)
        //axios.post(apiUrl_crawl + `?code=005930`) //삭제
        .then((response) =>{
            console.log(response.data);
            setFinanceCrawlingData(response.data);
        })
        .catch((error) => {
          console.error('Detail 데이터 불러오기 실패!', error);
        });

        // 로딩 컴포넌트가 2초 동안 나타나도록 설정
        const timer = setTimeout(() => {
            setIsLoading(false); // 2초 후 로딩 상태를 false로 변경
        }, 2000);

        return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머를 제거
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
<       div className={styles['detail-page']}>
            {isLoading ? ( // 로딩 상태에 따라 Loading 컴포넌트 또는 본문 컴포넌트를 보여줍니다.
                <Loading /> // 로딩 중일 때 Loading 컴포넌트를 렌더링
            ) : (
                <>
                    <StockInfo />
                    <TopNav scrollToComponent={scrollToComponent} />
                    <SideNav scrollToComponent={scrollToComponent} /> 
                    <div ref={chartRef} className={styles['animated-container']}><Chart chartData={mainChartResponse} chartComment={chartCommentResponse} chartTable={chartTableResponse}/></div>
                    <div ref={marketTrendRef} className={styles['animated-container']}><MarketTrend /></div>
                    <div ref={financeRef} className={styles['animated-container']}><Finance statementComment={statementCommentResponse} financeCrawlingData={financeCrawlingData}/></div>
                    <div ref={newsAnnouncementsRef} className={styles['animated-container']}><NewsAnnouncements /></div>
                    <div ref={reportsRef} className={styles['animated-container']}><Reports /></div>
                    <button className={styles['sell-button']} onClick={() => navigate('/feedback')}>
                        ▶ 매매하러 가기
                    </button>
                </>
            )}
        </div>
    );
}

export default DetailPage;
