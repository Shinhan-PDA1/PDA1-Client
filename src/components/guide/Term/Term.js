import React, { useState, useEffect } from 'react';
import styles from './Term.module.css';

function Term({ data }) {
    const [termData, setTermData] = useState([]); // 상태 초기화

    useEffect(() => {
        const newData = data.map((item, index) => ({ ...item, id: index, checked: false }));
        setTermData(newData); // data prop이 변경될 때마다 상태 업데이트
    }, [data]);

    const handleCheckboxChange = (id) => {
        setTermData(termData.map(item => 
            item.id === id ? {...item, checked: !item.checked} : item
        )); // 체크박스 상태 토글
    };

    return (
        <div className={styles.container}>
            <div className={styles.termHeader}>
                <h3>용어</h3>
                <p>과거에 몰랐던 용어들을 복습해보세요.</p>
            </div>
            {termData.map(item => (
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

export default Term;
