// LoadingIndicator.js
import React from 'react';
import './Loading.module.css'; // 스타일을 적용하기 위한 CSS 파일
import playground from '../../../assets/images/common/play01.png'
function Loading() {
    return (
        <div className="loading-indicator">
            <img src={playground} alt="Loading" /> {/* 이미지를 추가 */}
            로딩 중...
        </div>
    );
}

export default Loading;
