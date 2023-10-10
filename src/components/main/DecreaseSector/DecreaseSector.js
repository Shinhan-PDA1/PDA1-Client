// DecreaseSector.js

import React from 'react';
import './DecreaseSector.module.css'; // CSS 파일을 import

const DecreaseSector = () => {
  return (
    <div className="decrease-sector">
      <h2>하락률 상위</h2>
      <div className="rectangle">
        <img src="#" alt="1-5위 차트" />
        <div className="time-group">
            <p>실시간 보여주기(추후)</p>
          {/* 여기에 실시간 시간을 표시하는 코드를 추가 */}
        </div>
        <div className="more-info">
          <p>더보기</p>
        </div>
      </div>
    </div>
  );
}

export default DecreaseSector;