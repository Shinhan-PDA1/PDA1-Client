// NewsSector.js

import React from 'react';
import styles from './NewsSector.module.css'; 
import plusimg from '../../../assets/images/main/plus.png'


function NewsSector() {
  return (
    <div className={styles.newsinfo}>
      <div className={styles.container}>
        <h2>뉴스</h2>
        <div className={styles.icongroup}>
          <img src={plusimg} alt="더보기 플러스 아이콘" style={{ width: '15px', height: '15px' }} />
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.rectangle}>
        <img src="#"  alt="뉴스 데이터"  />
      </div>
    </div>
  );
}

export default NewsSector;