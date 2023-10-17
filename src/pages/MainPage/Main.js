// MainPage.js

import React, { useRef } from 'react';
import NowStockSector from '../../components/main/NowStockSector/NowStockSector';
import RecommendStock from '../../components/main/RecommendStock/RecommendStock';
import NowPopularStock from '../../components/main/NowPopularStock/NowPopularStock';
import MockInterested from '../../components/main/MockInterested/MockInterested';
import TopTransactionStock from '../../components/main/TopTransactionStock/TopTransactionStock';
import TopRiseStock from '../../components/main/TopRiseStock/TopRiseStock';
import SideNav from '../../components/main/SideNav/SideNav';
import MarketIssue from '../../components/main/MarketIssue/MarketIssue';
import StockStrategy from '../../components/main/StockStrategy/StockStrategy';
import styles from './Main.module.css';

function MainPage() {

  const nowStockRef = useRef(null);
  const mockInterested = useRef(null);
  const recommendStockRef = useRef(null);
  const nowPopularStockRef = useRef(null);
  const topTrnasactionStockRef = useRef(null);
  const topRiseStockRef = useRef(null);
  const marketIssueRef = useRef(null);
  const stockStrategyRef = useRef(null);

  const scrollToComponent = (componentName) => {
    // Use the appropriate ref based on the componentName
    let targetRef;
    switch (componentName) {
      case '이 시각 증시':
        targetRef = nowStockRef;
        break;
      case '관심 테마 종목':
        targetRef = mockInterested;
        break;
      case '추천 종목':
        targetRef = recommendStockRef;
        break;
      case '핫 이슈 종목':
        targetRef = topTrnasactionStockRef;
        break;
      case '마켓 이슈':
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
      <SideNav scrollToComponent={scrollToComponent} />
      {/* Sections you want to scroll to */}
      <div ref={nowStockRef}><NowStockSector /></div>
      <div ref={mockInterested}><MockInterested /></div>
      <div style={{ display: 'flex'}}>
        <div ref={recommendStockRef} style={{ flex: 1, marginRight: '-4em'}}>
          <RecommendStock />
        </div>
        <div ref={nowPopularStockRef} style={{ flex: 1}}>
          <NowPopularStock />
        </div>
      </div>
      <div style={{ display: 'flex'}}>
      <div ref={topTrnasactionStockRef} style={{ flex: 1, marginRight: '-4em'}}><TopTransactionStock /></div>
      <div ref={topRiseStockRef} style={{ flex: 1}}><TopRiseStock /></div>
      </div>
      <div ref={marketIssueRef}><MarketIssue /></div>
      <div ref={stockStrategyRef}><StockStrategy /></div>
    </div>
  );
}

export default MainPage;
