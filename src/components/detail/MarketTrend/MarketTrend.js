import React, { useState } from 'react';
import '../../../style/detail/detailGlobal.css'
import styles from './MarketTrend.module.css';
import mockTrendsData from '../../../data/detail/mockTrendsData';


function MarketTrend() {
    const [showCount, setShowCount] = useState(5);  // 표시할 행의 수를 설정합니다.

    const renderRow = (data, index) => (
        <tr key={index}>
            <td>{data.date}</td>
            <td className={data.foreignHolding.startsWith('+') ? styles.red : styles.blue}>{data.foreignHolding}</td>
            <td>{data.foreignRate}</td>
            <td className={data.institution.startsWith('+') ? styles.red : styles.blue}>{data.institution}</td>
            <td className={data.individual.startsWith('+') ? styles.red : styles.blue}>{data.individual}</td>
            <td>{data.closingPrice}</td>
            <td className={data.difference.includes('▲') ? styles.red : styles.blue}>{data.difference}</td>
            <td>{data.volume}</td>
        </tr>
    );

    return (
        <div className='container'>

        <div className={styles['market-trends']}>
          <div className="component-header">
                <h2>투자자 별 매매동향</h2>
                <p>다른 투자자들은 이 종목에 대해 어떻게 대응하고 있을까요?</p>
            </div>
            <table className={styles['trend-table']}>
                <thead>
                    <tr>
                        <th>날짜</th>
                        <th>외국인</th>
                        <th>보유율</th>
                        <th>기관</th>
                        <th>개인</th>
                        <th>종가</th>
                        <th>전일</th>
                        <th>거래량</th>
                    </tr>
                </thead>
                <tbody>
                    {mockTrendsData.slice(0, showCount).map(renderRow)}
                </tbody>
            </table>
            <button className={styles.button} onClick={() => setShowCount(prevCount => Math.min(prevCount + 5, mockTrendsData.length))}>
                매매동향 더보기
            </button>
        </div>
        </div>
    );
}

export default MarketTrend;

