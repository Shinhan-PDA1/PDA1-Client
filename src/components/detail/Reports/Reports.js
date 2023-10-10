import React from 'react';
import '../../../style/detail/detailGlobal.css'
import styles from './Report.module.css';
import mockReportsData from '../../../data/detail/mockReportsData';

function Reports({ reportsData = mockReportsData }) {  // 기본값으로 mockReportsData 설정
    return (
        <div className='container'>

        <div className={styles['securities-reports']}>
               <div className="component-header">
                <h2>증권 레포트</h2>
                <p> 전문가들의 의견을 어떻까요?</p>
            </div>
            {reportsData.map((report, index) => (
                <div key={index} className={styles.report}>
                    <h3 className={styles.title}>{report.title}</h3>
                    <p className={styles.company}>{report.company}</p>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Reports;
