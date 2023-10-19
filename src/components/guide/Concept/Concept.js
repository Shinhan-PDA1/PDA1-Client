import React, { useState, useEffect } from 'react';
import styles from './Concept.module.css';

function Concept({ data }) {
    const [conceptData, setConceptData] = useState([]); // 상태 초기화

    useEffect(() => {
        const newData = data.map((item, index) => ({ ...item, id: index, checked: false }));
        setConceptData(newData); // data prop이 변경될 때마다 상태 업데이트
        console.log(data)
    }, [data]);

    const handleCheckboxChange = (id) => {
        setConceptData(conceptData.map(item => 
            item.id === id ? {...item, checked: !item.checked} : item
        )); // 체크박스 상태 토글
    };

    return (
        <div className={styles.container}>
            <div className={styles.conceptHeader}>
                <h3>응용</h3>
                <p>과거에 몰랐던 내용들을 복습해보세요.</p>
            </div>
            {conceptData.map(item => ( // conceptData를 매핑
                <div className={styles.term} key={item.id}>
                    <div className={styles.content}>
                        <div className={styles.contentHeader}>
                            <h4>💙{item.question}</h4>
                            <input 
                                type="checkbox" 
                                id={`option${item.id}`} 
                                checked={item.checked} 
                                onChange={() => handleCheckboxChange(item.id)} 
                            />
                        </div> 
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Concept;
