// SideNav.js

import React from 'react';
import './SideNav.module.css'; // CSS 파일을 import

function SideNavItem ({ label }) {
  return (
    <div className="side-nav-item">
      {label}
    </div>
  );
}

function SideNav () {
  return (
    <div className="side-nav">
      <SideNavItem label="이 시각 증시" />
      <SideNavItem label="관심 분야 종목" />
      <SideNavItem label="순위별 종목" />
      <SideNavItem label="종목 분석 / 뉴스" />
    </div>
  );
}

export default SideNav;