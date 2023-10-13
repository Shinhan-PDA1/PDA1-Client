import React, { useState } from 'react';
import styles from './Term.module.css';

function SearchComponent() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={styles.container}>
            <div className={styles.term}>
                <div className={styles.termHeader}>
                    <h4>용어</h4>
                    <p>과거에 희빈님이 몰랐던 용어들을 복습해보세요.</p>
                </div>
                <div className={styles.contentHeader}>
                    <span>🔍이동평균선</span>
                    <input type="checkbox" id="option1" />
                </div>   
                <p>이동평균선이란 어쩓고도거 이동펴균선이란 어쩓고도거 이동펴균선이란 어쩓고도거 이동펴균선이란 어쩓고도거이동펴균선이란 어쩓고도거이동펴균선이란 어쩓고도거이동펴균선이란 어쩓고도거</p>

                <div className={styles.contentHeader}>
                    <span>🔍이동평균선</span>
                    <input type="checkbox" id="option1" />
                </div>   
                <p>이동평균선이란 어쩓고도거 이동펴균선이란 어쩓고도거 이동펴균선이란 어쩓고도거 이동펴균선이란 어쩓고도거이동펴균선이란 어쩓고도거이동펴균선이란 어쩓고도거이동펴균선이란 어쩓고도거</p>
            </div>

       
          
        </div>
    );
}

export default SearchComponent;
