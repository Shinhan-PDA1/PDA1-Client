// InterestedSector2.js

import React from 'react';
import styles from './InterestedSector2.module.css'; 


function InterestedSector2 () {
  return (
    <div className={styles.interested}>
      <div className={styles.container}>
      <h2>주류 테마 종목</h2>
      <p className="disclaimer">AI 전문가의 해석을 보고 싶으면 종목이름을 클릭하세요</p>
      </div>
      <hr className={styles.line} />
      <div className={styles.rectanglegroup}>
      <span className={styles.scrollIcon}>&#9664;</span>
        <div className={styles.rectangle}>
          <h3>하이트진로</h3>
          <div className={styles.topcontainer}>
            <div className={styles.downnowpirce}>
            <h3>19,660</h3>
            <p>▼50</p>
            </div>
            <div className={styles.downpercentage}>
            <p>-0.25%</p>
            </div>
          </div>
        </div>
        <div className={styles.rectangle}>
        <h3>국순당</h3>
          <div className={styles.topcontainer}>
            <div className={styles.downnowpirce}>
            <h3>5,190</h3>
            <p>▼10</p>
            </div>
            <div className={styles.downpercentage}>
            <p>-0.19%</p>
            </div>
          </div>
        </div>
        <div className={styles.rectangle}>
        <h3>풍국주정</h3>
          <div className={styles.topcontainer}>
            <div className={styles.downnowpirce}>
            <h3>11,110</h3>
            <p>▼240</p>
            </div>
            <div className={styles.downpercentage}>
            <p>-2.11%</p>
            </div>
          </div>
        </div>
        <div className={styles.rectangle}>
        <h3>롯데칠성</h3>
          <div className={styles.topcontainer}>
            <div className={styles.upnowpirce}>
            <h3>134,100</h3>
            <p>▲1300</p>
            </div>
            <div className={styles.uppercentage}>
            <p>0.98%</p>
            </div>
          </div>
        </div>
        <span className={styles.scrollIcon}>&#9654;</span>
      </div>
    </div>
  );
}

export default InterestedSector2;
