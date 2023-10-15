// InterestedSector3.js

import React from 'react';
import styles from './InterestedSector3.module.css'; 


function InterestedSector3 () {
  return (
    <div className={styles.interested}>
      <div className={styles.container}>
      <h2>금융 테마 종목</h2>
      <p className="disclaimer">AI 전문가의 해석을 보고 싶으면 종목이름을 클릭하세요</p>
      </div>
      <hr className={styles.line} />
      <div className={styles.rectanglegroup}>
      <span className={styles.scrollIcon}>&#9664;</span>
        <div className={styles.rectangle}>
          <h3>신한지주</h3>
          <div className={styles.topcontainer}>
            <div className={styles.downnowpirce}>
            <h3>35,500</h3>
            <p>▼50</p>
            </div>
            <div className={styles.downpercentage}>
            <p>-0.14%</p>
            </div>
          </div>
        </div>
        <div className={styles.rectangle}>
        <h3>기업은행</h3>
          <div className={styles.topcontainer}>
            <div className={styles.upnowpirce}>
            <h3>11,750</h3>
            <p>▲170</p>
            </div>
            <div className={styles.uppercentage}>
            <p>+1.47%</p>
            </div>
          </div>
        </div>
        <div className={styles.rectangle}>
        <h3>카카오뱅크</h3>
          <div className={styles.topcontainer}>
            <div className={styles.downnowpirce}>
            <h3>23,250</h3>
            <p>▼900</p>
            </div>
            <div className={styles.downpercentage}>
            <p>-2.11%</p>
            </div>
          </div>
        </div>
        <div className={styles.rectangle}>
        <h3>KB금융</h3>
          <div className={styles.topcontainer}>
            <div className={styles.upnowpirce}>
            <h3>56,600</h3>
            <p>▲100</p>
            </div>
            <div className={styles.uppercentage}>
            <p>0.18%</p>
            </div>
          </div>
        </div>
        <span className={styles.scrollIcon}>&#9654;</span>
      </div>
    </div>
  );
}

export default InterestedSector3;
