import React, { useState } from 'react';
import sol from"../../../assets/images/detail/sol01.png"

import '../../../styles/detail/detailGlobal.css'
import styles from './Finance.module.css';
import { summaryData, annualData, quarterlyData, aiReport } from '../../../data/detail/mockFinance';  // 경로는 적절하게 변경

function Finance() {
    const [mainTab, setMainTab] = useState('summary');
    const [activeTab, setActiveTab] = useState('annual');

    return (
        <div className='container'>

        <div className={styles.finance}>
              <div className="component-header">
                <h2>재무</h2>
                <p>우리 기업은 어떻게 영업하고 있을까요?</p>
           </div>
            <div className={styles['tabs-container']}>
          
            <div className={styles.tabs}>
                <button
                    className={mainTab === 'summary' ? `${styles.tabButton} ${styles.active}` : styles.tabButton}
                    onClick={() => setMainTab('summary')}
                >
                    요약
                </button>
                <button
                    className={mainTab === 'financial' ? `${styles.tabButton} ${styles.active}` : styles.tabButton}
                    onClick={() => setMainTab('financial')}
                >
                    주요재무
                </button>
            </div>

                {mainTab === 'financial' && (
                    <div className={styles['sub-tabs']}>
                        <button className={activeTab === 'annual' ? styles.active : ''} onClick={() => setActiveTab('annual')}>연간실적</button>
                        <button className={activeTab === 'quarterly' ? styles.active : ''} onClick={() => setActiveTab('quarterly')}>분기실적</button>
                    </div>
                )}
            </div>

            {mainTab === 'summary' && (
                <div>
                    {/* 여기에 요약 데이터의 시각화 그래프를 추가하시면 됩니다. */}
                    {summaryData.map(data => (
                        <p key={data.year}>Year: {data.year}, PER: {data.per}</p>
                    ))}
                </div>
            )}

                {mainTab === 'financial' && (
                    <table>
                        <thead>
                            <tr>
                                <th>{activeTab === 'annual' ? 'Year' : 'Quarter'}</th>
                                {Object.keys(activeTab === 'annual' ? annualData : quarterlyData).map(period => (
                                    <th key={period}>{period}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {(activeTab === 'annual' ? annualData : quarterlyData) &&
                                Object.keys((activeTab === 'annual' ? annualData : quarterlyData)[Object.keys((activeTab === 'annual' ? annualData : quarterlyData))[0]]).map(key => (
                                    <tr key={key}>
                                        <td>{key}</td>
                                        {Object.keys(activeTab === 'annual' ? annualData : quarterlyData).map(period => (
                                            <td key={period}>{(activeTab === 'annual' ? annualData : quarterlyData)[period][key]}</td>
                                        ))}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}

            <div className="component-header">
                <h2>AI REPORT</h2>
                <p>차트 해석이 어렵다면 신한AI분석을 참고!해보세요.</p>
            </div>
            <div className={styles['ai-report']}>
                <hr /> 
                <div className={styles['textarea-container']}>
                    <img src={sol} alt="AI Icon" className={styles['ai-image']} />
                    <textarea value={aiReport} readOnly />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Finance;
