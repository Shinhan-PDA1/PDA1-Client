import React, { useEffect, useRef, useState } from 'react'; 
import GuideHeader from '../../components/guide/GuideHeader/GuideHeader';
import Term from '../../components/guide/Term/Term';
import Concept from '../../components/guide/Concept/Concept';
import styles from './Guide.module.css';
import axios from 'axios';

function GuidePage() {
    const headerRef = useRef(null);
    const termRef = useRef(null);
    const conceptRef = useRef(null);
    const [data, setData] = useState([]); 
    const [testData, setTestData] = useState([]); // testData state를 추가


    // 중복 제거 함수
    const removeDuplicates = (data) => {
    const seen = new Set();
    return data.filter(item => {
      const duplicate = seen.has(item.question);
      seen.add(item.question);
      return !duplicate;
    });
  };

  useEffect(() => {
      axios.get('https://jootopia-mainserver.shinhansec-pda.net/jootopia/v1/users/system/guide')
      .then((response) =>{
          console.log("Guide Response: ", response);
          const test = response.data.response;
          console.log('test', test);
          setTestData(test); // testData state 업데이트
          const uniqueData = removeDuplicates(response.data.response);
          setData(uniqueData); 
      })
      .catch((error) => {
          console.error('Guide 결과 반환 실패!', error);
      });
  }, []);

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

    const wordData = testData.filter(item => item.type === 'word'); // testData 사용
    const questionData = testData.filter(item => item.type === 'question'); // testData 사용
    console.log( "filter", wordData);


    return (
        <div className={styles['guide-page']}>
            <div ref={headerRef} className={styles['animated-container']}><GuideHeader /></div>
            <div ref={termRef} className={styles['animated-container']}><Term data={wordData} /></div> {/* 필터링된 데이터 전달 */}
            <div ref={conceptRef} className={styles['animated-container']}><Concept data={questionData} /></div> {/* 필터링된 데이터 전달 */}
        </div>
    );
}

export default GuidePage;

