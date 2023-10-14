import React, { useState } from 'react';
import '../../../styles/detail/detailGlobal.css'
import styles from './NewsAnnouncements.module.css';
import mockAnnouncementsData from '../../../data/detail/mockAnnouncementsData';
import mockNewsData from '../../../data/detail/mockNewsData';


function NewsAnnouncements() {
    const [activeTab, setActiveTab] = useState('news');  // 기본 탭은 'news'

    return (
        <div className='container'>
            <div className={styles['news-announcements']}>
                <div className="component-header">
                    <h2>뉴스 º 공시</h2>
                    <p>소식을 알아보고 미리 대응하세요.</p>
                </div>
                <div className={styles.tabs}>
                    <button 
                        onClick={() => setActiveTab('news')}
                        className={activeTab === 'news' ? `${styles.tabButton} ${styles.active}` : styles.tabButton}
                    >
                        뉴스
                    </button>
                    <button 
                        onClick={() => setActiveTab('announcements')}
                        className={activeTab === 'announcements' ? `${styles.tabButton} ${styles.active}` : styles.tabButton}
                    >
                        공시
                    </button>
                </div>
                {activeTab === 'news' ? (
                    <div className={styles.news}>
                        {mockNewsData.map((news, index) => (
                            <div key={index} className={styles.item}>
                                <h3 className={styles.title}>{news.title}</h3>
                                <p className={styles.content}>{news.content}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.announcements}>
                        {mockAnnouncementsData.map((announcement, index) => (
                            <div key={index} className={styles.item}>
                                <h3 className={styles.title}>{announcement.title}</h3>
                                <p className={styles.content}>{announcement.content}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default NewsAnnouncements;