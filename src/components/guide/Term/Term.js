import React, { useState } from 'react';
import { termsData as initialData } from '../../../data/guide/mockTermData';
import styles from './Term.module.css';

function Term() {
    const [data, setData] = useState(initialData); // 상태 초기화

    const handleCheckboxChange = (id) => {
        setData(data.map(item => 
            item.id === id ? {...item, checked: !item.checked} : item
        )); // 체크박스 상태 토글
    };

    return (
        <div className={styles.container}>
            <div className={styles.termHeader}>
                <h3>용어</h3>
                <p>과거에 몰랐던 용어들을 복습해보세요.</p>
            </div>
            {data.map(item => (
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

export default Term;
