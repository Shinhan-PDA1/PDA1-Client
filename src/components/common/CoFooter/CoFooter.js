import React from 'react';
import styles from './CoFooter.module.css';

function CoFooter() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerSection}>
                <h3>고객지원센터</h3>
                <p id={styles.num}>1588-0365</p>
                <p>말로하는 AI 상담서비스</p>
                <p>24시간 챗봇 상담(신한알파)</p>
            </div>
            <div className={styles.footerSection}>        
                 <h3>문의하기</h3>
                <p>해외주식팀 02-3772-2525</p>
                <p>해외파생팀 02-3772-4365</p>
                <p>해외사용자 ARS 82-2-6255-4510 (유료)</p>
                <p>퇴직연금 고객센터 1588-1122</p>
                <p>디지털PB센터 02-3772-1010</p>
                <p>이벤트 전용센터 02-3772-2220</p>
                <p>원격제어 FAQ 1:1상담 업무안내</p>
            </div>
            <div className={styles.footerSection}>
                <h3>회사소개</h3>
                <p>EN</p>
                <p>Family Site</p>
                <p>페이스북</p>
                <p>네이버포스트</p>
                <p>카카오플러스친구</p>
                <p>유튜브</p>
                <p>인스타그램</p>
            </div>
            <div className={styles.footerSection2}>
                <p>인증센터 트레이딩 다운로드 보안센터 지점망안내 전자민원신청 휴면계좌조회 금융상품통합비교공시 내부고발제도</p>
                <p>개인정보처리방침 신용정보활용체제 약관 및 유의사항 보호금융상품등록부 상품공시실 투자권유대행인 사이트맵</p>
                <p>서울특별시 영등포구 여의대로 70 (신한투자증권 타워)| 대표이사 김상태 | 사업자등록번호 116-81-36684</p>
                <p>COPYRIGHT©2016 SHINHAN SECURITIES CO.,LTD. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default CoFooter;
