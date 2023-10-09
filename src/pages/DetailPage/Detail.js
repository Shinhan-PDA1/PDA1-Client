// pages/DetailPage.js
import React from 'react';
import Header from "../../components/detail/Header/Header"
import StockName from "../../components/detail/StockName/StockName"
import TopNav from "../../components/detail/TopNav/TopNav"
import Chart from '../../components/detail/Chart/Chart';
import MarketTrend from '../../components/detail/MarketTrend/MarketTrend';
import Finance from '../../components/detail/Finance/Finance';
import NewsAnnouncements from '../../components/detail/NewsAnnouncements/NewsAnnouncements';
import Reports from '../../components/detail/Reports/Reports';
import './Detail.module.css';


function DetailPage() {
    return (
        <div className="detail-page">
            <Header />
            <StockName />
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
