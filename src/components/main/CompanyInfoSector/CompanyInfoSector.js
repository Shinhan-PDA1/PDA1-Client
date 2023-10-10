// CompanyInfoSector.js

import React from 'react';
import './CompanyInfoSector.module.css'; // CSS 파일을 import

function CompanyInfoSector() {
  return (
    <div className="company-info">
      <h2>종목 분석/기업 정보</h2>
      <div className="icon-group">
        <img src="#" alt="더보기 플러스 아이콘" className="plus-icon" />
      </div>
      <hr className="line" />
      <div className="rectangle">
        <img src="#"  alt="회사 정보 데이터" className="info-image" />
      </div>
    </div>
  );
}

export default CompanyInfoSector;