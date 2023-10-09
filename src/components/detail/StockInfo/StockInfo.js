import React from 'react';
import styles from './StockInfo.module.css';

function StockInfo({ name, price   }) { //,change}
    let change = 2.5;  // 임의로 -2.5로 설정

    return (
        <div className={styles['stock-info']}>
            <span className={styles['stock-name']}>{name}신성델타테크</span>
            <div className={styles['price-container']}>
                <span className={styles['stock-price']}>{price}55,900</span>
                <span className={styles['currency']}>원</span>
            </div>
            <span className={change > 0 ? styles['price-rise'] : styles['price-fall']}>
                {change > 0 ? `+${change}` : change}%
            </span>
        </div>
    );
}

export default StockInfo;
