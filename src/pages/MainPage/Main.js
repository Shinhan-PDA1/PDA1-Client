// MainPage.js

import React, { useRef } from 'react';
import TopNav from '../../components/main/TopNav/TopNav';
import NowStockSector from '../../components/main/NowStockSector/NowStockSector';
import InterestedSector from '../../components/main/InterestedSector/InterestedSector';
import PopularStock from '../../components/main/PopularStock/PopularStock';
import HotStock from '../../components/main/HotStock/HotStock';
import SideNav from '../../components/main/SideNav/SideNav';
import MarketIssue from '../../components/main/MarketIssue/MarketIssue';
import StockStrategy from '../../components/main/StockStrategy/StockStrategy';
import styles from './Main.module.css';

function MainPage() {

  const nowStockRef = useRef(null);
  const interestedSectorRef = useRef(null);
  const popularStockRef = useRef(null);
  const hotStockRef = useRef(null);
  const marketIssueRef = useRef(null);
  const stockStrategyRef = useRef(null);

  const scrollToComponent = (componentName) => {
    // Use the appropriate ref based on the componentName
    let targetRef;
    switch (componentName) {
      case '이 시각 증시':
        targetRef = nowStockRef;
        break;
      case '관심 분야 종목':
        targetRef = interestedSectorRef;
        break;
      case '인기 종목':
        targetRef = popularStockRef;
        break;
      case '핫 이슈 종목':
        targetRef = hotStockRef;
        break;
      case '시장 이슈':
        targetRef = marketIssueRef;
        break;
      case '투자 전략':
        targetRef = stockStrategyRef;
        break;
      default:
        // If no match, do nothing
        return;
    }

    // Scroll to the component
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <TopNav scrollToComponent={scrollToComponent} />
      <SideNav scrollToComponent={scrollToComponent} />
      {/* Sections you want to scroll to */}
      <div ref={nowStockRef}><NowStockSector /></div>
      <div ref={interestedSectorRef}><InterestedSector /></div>
      <div ref={popularStockRef}><PopularStock /></div>
      <div ref={hotStockRef}><HotStock /></div>
      <div ref={marketIssueRef}><MarketIssue /></div>
      <div ref={stockStrategyRef}><StockStrategy /></div>
    </div>
  );
}

export default MainPage;
