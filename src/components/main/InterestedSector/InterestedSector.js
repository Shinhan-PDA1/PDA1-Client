// Interested.js

import React from 'react';
import './InterestedSector.module.css'; // CSS 파일을 import


function InterestedSector () {
  return (
    <div className="interested">
      <h2>관심 분야 종목</h2>
      <div className="line"></div>
      <div className="rectangle-group">
        <div className="rectangle">
          <h3>종목이름1</h3>
          <div className="info-group">
            <img src="#" alt="종목 1" />
          </div>
        </div>
        <div className="rectangle">
          <h3>종목이름2</h3>
          <div className="info-group">
            <img src="#" alt="종목 2" />
          </div>
        </div>
        <div className="rectangle">
          <h3>종목이름3</h3>
          <div className="info-group">
            <img src="#" alt="종목 3" />
          </div>
        </div>
        <div className="rectangle">
          <h3>종목이름4</h3>
          <div className="info-group">
            <img src="#" alt="종목 4" />
          </div>
        </div>
      </div>
      <p className="disclaimer">AI 전문가의 해석을 보고 싶으면 종목이름을 클릭하세요</p>
    </div>
  );
}

export default InterestedSector;
