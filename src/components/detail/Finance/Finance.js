import React, { useState, useEffect } from 'react';
import sol from '../../../assets/images/detail/sol04.png'

import '../../../styles/detail/detailGlobal.css'
import styles from './Finance.module.css';
import { summaryData, annualData, quarterlyData, aiReport } from '../../../data/detail/mockFinance';  // 경로는 적절하게 변경

function Finance(props) {
    const [activeTab, setActiveTab] = useState('annual');
    const [annualFinanceData, setAnnualFinanceData] = useState(null);
    const [quarterlyFinanceData, setQuarterlyFinanceData] = useState(null);
    const [statementComment, setStatementComment] = useState(null);

    useEffect(() => {
        // 데이터 로딩 처리
        if (props.financeCrawlingData && props.statementComment) {
            setAnnualFinanceData(props.financeCrawlingData["최근 연간 실적"]);
            setQuarterlyFinanceData(props.financeCrawlingData["최근 분기 실적"]);
            setStatementComment(props.statementComment);
        }
    }, [props.financeCrawlingData, props.statementComment]); // 데이터가 변경될 때만 useEffect가 실행

    return (
        <div className='container'>
            <div className={styles.finance}>
                <div className="component-header">
                    <h2>재무</h2>
                    <p>우리 기업은 어떻게 영업하고 있을까요?</p>
                </div>
                <div className={styles['tabs-container']}>
                    <div className={styles.tabs}></div>
                    <div className={styles['sub-tabs']}>
                        <button className={activeTab === 'annual' ? styles.active : ''} onClick={() => setActiveTab('annual')}>연간실적</button>
                        <button className={activeTab === 'quarterly' ? styles.active : ''} onClick={() => setActiveTab('quarterly')}>분기실적</button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>{activeTab === 'annual' ? 'Year' : 'Quarter'}</th>
                            {annualFinanceData && Object.keys(activeTab === 'annual' ? annualFinanceData : quarterlyFinanceData).map(period => (
                                <th key={period}>{period}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {annualFinanceData && (activeTab === 'annual' ? annualFinanceData : quarterlyFinanceData) &&
                            Object.keys((activeTab === 'annual' ? annualFinanceData : quarterlyFinanceData)[Object.keys((activeTab === 'annual' ? annualFinanceData : quarterlyFinanceData))[0]]).map(key => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    {Object.keys(activeTab === 'annual' ? annualFinanceData : quarterlyFinanceData).map(period => (
                                        <td key={period}>{(activeTab === 'annual' ? annualFinanceData : quarterlyFinanceData)[period][key].toLocaleString()}</td>
                                    ))}
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div className="component-header">
                    <h2>AI REPORT</h2>
                    <p>고객님의 투자성향(단기/장기)맞춤 재무재표 AI REPORT</p>
                </div>
                <div className={styles['ai-report']}>
                    <hr />
                    <div className={styles['textarea-container']}>
                        <img src={sol} alt="AI Icon" className={styles['ai-image']} />
                        <textarea value={statementComment ? statementComment.statement_short_comment : ''} readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Finance;
