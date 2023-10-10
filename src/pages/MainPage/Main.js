import React from 'react';
import Header from '../../components/main/Header/Header';
import TopNav from '../../components/main/TopNav/TopNav';
import NowStockSector from '../../components/main/NowStockSector/NowStockSector';
import InterestedSector from '../../components/main/InterestedSector/InterestedSector';
import IncreaseSector from '../../components/main/IncreaseSector/IncreaseSector';
import DecreaseSector from '../../components/main/DecreaseSector/DecreaseSector';
import SideNav from '../../components/main/SideNav/SideNav';
import CompanyInfoSector from '../../components/main/CompanyInfoSector/CompanyInfoSector';
import NewsSector from '../../components/main/NewsSector/NewsSector';
import styles from './Main.module.css';

function MainPage() {
    return(
        <div className={styles.mainpage}>
        <Header />
        <TopNav />
        <NowStockSector />
        <InterestedSector />
        <div className={styles.horizontalContainer}>
            <IncreaseSector />
            <DecreaseSector />
        </div>
        <div className={styles.horizontalContainer}>
            <CompanyInfoSector />
            <NewsSector />
        </div>
        <SideNav />
        </div>
    );
}

export default MainPage;