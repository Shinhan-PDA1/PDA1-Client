import React from 'react';
import styles from './Chart.module.css';

function Chart({ chartImage, tableData, aiReport }) {
    return (
        <div className={styles['price-chart']}>
            <div className={styles['compoent-header']}>
                    <h2>CHART</h2>
                    <p>차트를 통해 시세를 살펴볼까요?</p>
                </div>
            <div className={styles['content-container']}>
            
                <img src={chartImage} alt="Stock Chart" className={styles['chart-image']} />
                <table className={styles['chart-table']}>
                    {/* Render tableData here */}
                </table>
            </div>
            <div className={styles['compoent-header']}>
                    <h2>AI REPORT</h2>
                    <p>차트 해석이 어렵다면 신한AI분석을 참고!해보세요.</p>
                </div>
            <div className={styles['ai-report']}>
                
                <hr /> 
                <div className={styles['textarea-container']}>
                    <img src="path-to-image.jpg" alt="AI Icon" className={styles['ai-image']} />
                    <textarea value={aiReport} readOnly />
                </div>
            </div>
        </div>
    );
}

export default Chart;
