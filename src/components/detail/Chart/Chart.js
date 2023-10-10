import React from 'react';
import '../../../style/detail/detailGlobal.css'
import styles from './Chart.module.css';
import mockChartData from '../../../data/detail/mockChartData';
function Chart() {
    const { chartImage, tableData, aiReport } = mockChartData;

    return (
        <div className='container'>
        <div className={styles['price-chart']}>
          <div className="component-header">
                <h2>CHART</h2>
                <p>차트를 통해 시세를 살펴볼까요?</p>
           </div>

            <div className={styles['content-container']}>
                <img src={chartImage} alt="Stock Chart" className={styles['chart-image']} />
                
                <table className={styles['chart-table']}>
                    <tbody>
                        {Object.entries(tableData).map(([key, value], index) => (
                            <tr key={index}>
                                <td>{key}</td>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="component-header">
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
        </div>
    );
}

export default Chart;
