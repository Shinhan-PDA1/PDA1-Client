// pages/DetailPage.js
import React from 'react';
import Header from "../../components/detail/Header/Header"
import StockInfo from "../../components/detail/StockInfo/StockInfo"
import TopNav from "../../components/detail/TopNav/TopNav"
import SideNav from "../../components/detail/SideNav/SideNav"
import Chart from '../../components/detail/Chart/Chart';
import MarketTrend from '../../components/detail/MarketTrend/MarketTrend';
import Finance from '../../components/detail/Finance/Finance';
import NewsAnnouncements from '../../components/detail/NewsAnnouncements/NewsAnnouncements';
import Reports from '../../components/detail/Reports/Reports';
import styles from './Detail.module.css'

function DetailPage() {
    return (
        <div className={styles['detail-page']}>
            <Header />
            <StockInfo />
            <TopNav />
            <Chart />
            <MarketTrend />
            <Finance />
            <NewsAnnouncements />
            <Reports />
        </div>
    );
}

export default DetailPage;
