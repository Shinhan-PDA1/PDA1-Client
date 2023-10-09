import React, { useState } from 'react';
import styles from './MarketTrend.module.css';

function MarketTrend({ trendsData }) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className={styles['market-trends']}>
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
