import React, { useEffect, useRef, useState } from 'react';
import GuideHeader from '../../components/guide/GuideHeader/GuideHeader';
import Term from '../../components/guide/Term/Term';
import Concept from '../../components/guide/Concept/Concept';
import styles from './Guide.module.css';

function GuidePage() {
    const headerRef = useRef(null);
    const termRef = useRef(null);
    const conceptRef = useRef(null);

    const [activeTab, setActiveTab] = useState('');
    const [reviewData, setReviewData] = useState([]);
    const [myConceptData, setMyConceptData] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const components = [headerRef, termRef, conceptRef];
            
            components.forEach(compRef => {
                const rect = compRef.current.getBoundingClientRect();
                
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    compRef.current.classList.add(styles['slide-up-on-scroll']);
                } else {
                    compRef.current.classList.remove(styles['slide-up-on-scroll']);
                }
            });
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 용어나 개념 데이터를 클릭할 때 호출되는 함수
    const handleCheckboxChange = (id, isChecked) => {
        // 현재 활성 탭에 따라 데이터를 선택합니다.
        const dataToUpdate = activeTab === 'review' ? [...reviewData] : [...myConceptData];

        // id를 기반으로 업데이트할 아이템을 찾습니다.
        const itemToUpdate = dataToUpdate.find(item => item.id === id);

        if (itemToUpdate) {
            // 데이터 배열을 복제하고 체크 상태를 업데이트합니다.
            itemToUpdate.checked = isChecked;

            // 활성 탭에 따라 데이터를 업데이트합니다.
            if (activeTab === 'review') {
                setReviewData(dataToUpdate);
            } else {
                setMyConceptData(dataToUpdate);
            }
        }
    };

    return (
        <div className={styles['guide-page']}>
            <div ref={headerRef} className={styles['animated-container']}><GuideHeader setActiveTab={setActiveTab} activeTab={activeTab} /></div>
            <div ref={termRef} className={styles['animated-container']}>
                <Term
                    data={activeTab === 'review' ? reviewData.filter(item => !item.checked) : myConceptData.filter(item => item.checked)}
                    onCheckboxChange={handleCheckboxChange}
                />
            </div>
            <div ref={conceptRef} className={styles['animated-container']}>

                <Concept
                    data={activeTab === 'review' ? reviewData.filter(item => item.checked) : myConceptData.filter(item => !item.checked)}
                    onCheckboxChange={handleCheckboxChange}
                />
            </div>
        </div>
    );
}

export default GuidePage;
