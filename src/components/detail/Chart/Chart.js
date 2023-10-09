// PriceChart.js
import React from 'react';
import './Chart.module.css';

function Chart({ chartImage, tableData, aiReport }) {
    return (
        <div className="price-chart">
            <img src={chartImage} alt="Stock Chart" />
            <table>
                {/* Render tableData here */}
            </table>
            <div className="ai-report">
                <textarea value={aiReport} readOnly />
            </div>
        </div>
    );
}

export default Chart;
