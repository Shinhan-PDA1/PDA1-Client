import React, { useState } from 'react';
import styles from './MarketTrend.module.css';

function MarketTrend({ trendsData }) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className={styles['market-trends']}>
            <div className={styles['component-header']}>
                    <h2>투자자 별 매매동향</h2>
                    <p>다른 투자자들은 이 종목에 대해 어떻게 대응하고 있을까요?</p>
                </div>
            {/* 테이블 위치 표시 */}
            <div className={styles['placeholder-table']}>테이블 위치</div>

            {showMore && (
                <div className={styles['more-trends']}>
                    {/* Additional trends content here */}
                </div>
            )}
            <button onClick={() => setShowMore(!showMore)}>
                {showMore ? '매매동향 숨기기' : '매매동향 더보기'}
            </button>
        </div>
    );
}

export default MarketTrend;
