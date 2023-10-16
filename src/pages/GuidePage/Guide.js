import React, { useState } from 'react';
import Loading from '../../components/common/Loading/Loading';
import GuideHeader from '../../components/guide/GuideHeader/GuideHeader';
import Term from '../../components/guide/Term/Term'
import styles from './Guide.module.css';
import Concept from '../../components/guide/Concept/Concept';

function GuidePage() {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <div className={styles['guide-page']}>
            {isLoading ? (
                <Loading onLoadingComplete={handleLoadingComplete} />
            ) : (
                <>
                    <GuideHeader />
                    <Term />
                    <Concept />
                </>
            )}
        </div>
    );
}

export default GuidePage;
