import React, { useEffect, useRef } from 'react';
import Loading from '../../components/common/Loading/Loading';
import GuideHeader from '../../components/guide/GuideHeader/GuideHeader';
import Term from '../../components/guide/Term/Term';
import Concept from '../../components/guide/Concept/Concept';
import styles from './Guide.module.css';

function GuidePage() {
    const headerRef = useRef(null);
    const termRef = useRef(null);
    const conceptRef = useRef(null);

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

    return (
        <div className={styles['guide-page']}>
            <div ref={headerRef} className={styles['animated-container']}><GuideHeader /></div>
            <div ref={termRef} className={styles['animated-container']}><Term /></div>
            <div ref={conceptRef} className={styles['animated-container']}><Concept /></div>
        </div>
    );
}

export default GuidePage;
