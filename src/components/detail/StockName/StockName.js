// StockInfo.js
import React from 'react';
import './StockName.module.css';

function StockInfo({ name, price, change }) {
    return (
        <div className="stock-info">
            <span className="stock-name">{name}</span>
            <span className="stock-price">{price}</span>
            <span className={change > 0 ? "price-rise" : "price-fall"}>
                {change > 0 ? `+${change}` : change}%
            </span>
        </div>
    );
}

export default StockInfo;
