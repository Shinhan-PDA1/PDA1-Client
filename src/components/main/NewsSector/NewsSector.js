// NewsSector.js

import React from 'react';
import './NewsSector.module.css'; // CSS 파일을 import

function NewsSector() {
  return (
    <div className="news-info">
      <h2>뉴스</h2>
      <div className="icon-group">
        <img src="#" alt="더보기 플러스 아이콘" className="plus-icon" />
      </div>
      <hr className="line" />
      <div className="rectangle">
        <img src="#"  alt="뉴스 데이터" className="news-image" />
      </div>
    </div>
  );
}

export default NewsSector;