// TopNav.js
import React from 'react';
import './TopNav.module.css';

function TopNav() {
    return (
        <nav className="top-nav">
            <ul>
                <li>시세차트</li>
                <li>매매동향</li>
                <li>재무</li>
                <li>뉴스 및 공시</li>
                <li>증권 레포트</li>
            </ul>
        </nav>
    );
}

export default TopNav;
