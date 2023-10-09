// Finance.js
import React, { useState } from 'react';
import styles from './Finance.module.css';

function Finance({ financeData, aiReport }) {
    const [activeTab, setActiveTab] = useState('annual'); // default tab

    return (
        <div className={styles.finance}>
             <div className={styles['component-header']}>
                    <h2>재무</h2>
                    <p>우리 기업은 어떻게 영업하고 있을까요?</p>
                </div>
            <div className={styles.tabs}>
                <button 
                    className={activeTab === 'annual' ? styles.active : ''} 
                    onClick={() => setActiveTab('annual')}
                >
                    연간실적
                </button>
                <button 
                    className={activeTab === 'quarterly' ? styles.active : ''} 
                    onClick={() => setActiveTab('quarterly')}
                >
                    분기실적
                </button>
            </div>
            <table>
                {activeTab === 'annual' ? (
                    <tbody>
                        {/* Render your annual data rows here */}
                        연간실적 데이터가 들어올 자리
                    </tbody>
                ) : (
                    <tbody>
                        {/* Render your quarterly data rows here */}
                        분기 실적 데이터가 들어올 자리
                    </tbody>
                )}
            </table>
            <div className={styles['component-header']}>
                    <h2>AI REPORT</h2>
                    <p>재무재표 해석이 어렵다면 신한AI분석을 참고!해보세요.</p>
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

export default Finance;
