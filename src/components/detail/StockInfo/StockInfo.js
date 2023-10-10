import React from 'react';
import styles from './StockInfo.module.css';
import stockData from '../../../data/detail/mockStockInfo';  // 데이터 파일 임포트

function StockInfo() {
    const { name, price, change } = stockData;  // 데이터 구조 분해 할당

    return (
        <div className='container'>
            <div className={styles['stock-info']}>
                <span className={styles['stock-name']}>{name}</span>
                <div className={styles['price-container']}>
                    <span className={styles['stock-price']}>{price.toLocaleString()}</span>  
                    <span className={styles['currency']}>원</span>
                </div>
                <span className={change > 0 ? styles['price-rise'] : styles['price-fall']}>
                    {change > 0 ? `+${change}` : change}%
                </span>
            </div>
        </div>
    );
}

export default StockInfo;
