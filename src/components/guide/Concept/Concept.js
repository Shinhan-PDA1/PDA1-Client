import React from 'react';
import styles from './Concept.module.css';

function Concept() {

    return (
        <div className={styles.container}>
            <div className={styles.concept}>
                <div className={styles.conceptHeader}>
                    <h2>응용 개념</h2>
                    <p>희빈님이 몰랐던 부분들을 다시 한 번 복습해보세요.</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.contentHeader}>
                        <h4>🧐  재무재표를 확인해야 하는 이유는 뭐야?</h4>
                        <input type="checkbox" id="option1" />
                    </div> 
                    <p>재무재표를 확인해야지 이녀석 어쩓고도거 이동펴균선이란 어쩓고도거 이동펴균선이란 어쩓고도거 이동펴균선이란 어쩓고도거이동펴균선이란 어쩓고도거이동펴균선이란 어쩓고도거이동펴균선이란 어쩓고도거</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.contentHeader}>
                        <h4>🧐  PER이 높다라는 건 구체적으로 어떤 의미야?</h4>
                        <input type="checkbox" id="option1" />
                    </div> 
                    <p>이동평균선이란 어쩓고도거 이동펴균선이란 어쩓고도거 이동펴균선이란 어쩓고도거 이동펴균선이란 어쩓고도거이동펴균선이란 어쩓고도거이동펴균선이란 어쩓고도거이동펴균선이란 어쩓고도거</p>
                </div>
               

            </div>

       
          
        </div>
    );
}

export default Concept;
