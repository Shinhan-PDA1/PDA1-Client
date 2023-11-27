import React from 'react';
import styles from './StockInfo.module.css';

function StockInfo(props) {
    if (!props.infoData) {
        // props.infoData가 null인 경우 처리
        return null; // 또는 다른 대체 UI를 반환할 수 있음
    }

    const { stockName, price, rate } = props.infoData; // props에서 데이터 추출

    return (
        <div className='container'>
            <div className={styles['stock-info']}>
                <span className={styles['stock-name']}>{stockName}</span>
                <div className={styles['price-container']}>
                    <span className={styles['stock-price']}>{parseInt(price).toLocaleString()}</span>
                    <span className={styles['currency']}>원  </span>
                </div>
                <span id={styles['rate']} className={rate.includes('+') ? styles['price-rise'] : styles['price-fall']}>
                     { rate}
                </span>
            </div>
        </div>
    );
}

export default StockInfo;