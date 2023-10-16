import React, { useState } from 'react';
import { conceptData as initialConceptData } from '../../../data/guide/mockConceptData';
import styles from './Concept.module.css';

function Concept() {
    const [conceptData, setConceptData] = useState(initialConceptData); // 상태 초기화

    const handleCheckboxChange = (id) => {
        setConceptData(conceptData.map(data => 
            data.id === id ? {...data, checked: !data.checked} : data
        )); // 체크박스 상태 토글
    };

    return (
        <div className={styles.container}>
            <div className={styles.conceptHeader}>
                <h3>응용</h3>
                <p>과거에 몰랐던 내용들을 복습해보세요.</p>
            </div>
            {conceptData.map(item => (
                <div className={styles.term} key={item.id}>
                    <div className={styles.content}>
                        <div className={styles.contentHeader}>
                            <h4>💙{item.title}</h4>
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
