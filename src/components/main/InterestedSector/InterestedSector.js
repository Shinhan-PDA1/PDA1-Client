// Interested.js

import React from 'react';
import styles from './InterestedSector.module.css'; 

function InterestedSector () {
  return (
    <div className={styles.interested}>
      <div className={styles.container}>
      <h2>항공사 테마 종목</h2>
      <p className="disclaimer">AI 전문가의 해석을 보고 싶으면 종목이름을 클릭하세요</p>
      </div>
      <hr className={styles.line} />
      <div className={styles.rectanglegroup}>
      <span className={styles.scrollIcon}>&#9664;</span>
        <div className={styles.rectangle}>
          <h3>대한항공우</h3>
          <div className={styles.topcontainer}>
            <div className={styles.upnowpirce}>
            <h3>23,400</h3>
            <p>▲50</p>
            </div>
            <div className={styles.uppercentage}>
            <p>0.21%</p>
            </div>
          </div>
        </div>
        <div className={styles.rectangle}>
        <h3>아시아나항공</h3>
          <div className={styles.topcontainer}>
            <div className={styles.downnowpirce}>
            <h3>10,030</h3>
            <p>▼90</p>
            </div>
            <div className={styles.downpercentage}>
            <p>-0.89%</p>
            </div>
          </div>
        </div>
        <div className={styles.rectangle}>
        <h3>대한항공</h3>
          <div className={styles.topcontainer}>
            <div className={styles.downnowpirce}>
            <h3>20,150</h3>
            <p>▼450</p>
            </div>
            <div className={styles.downpercentage}>
            <p>-2.18%</p>
            </div>
          </div>
        </div>
        <div className={styles.rectangle}>
        <h3>제주항공</h3>
          <div className={styles.topcontainer}>
            <div className={styles.downnowpirce}>
            <h3>10,340</h3>
            <p>▼280</p>
            </div>
            <div className={styles.downpercentage}>
            <p>-2.64%</p>
            </div>
          </div>
        </div>
        <span className={styles.scrollIcon} >&#9654;</span>
      </div>
    </div>
  );
}

export default InterestedSector;
