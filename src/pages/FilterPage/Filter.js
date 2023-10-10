// pages/FilterPage.js
import React from 'react';
import MainTitle from '../../components/filter/MainTitle/MainTitle';
import QuestionField from '../../components/filter/QuestionField/QuestionField';
import FinanceField from '../../components/filter/FinanceField/FinanceField';
import ITField from '../../components/filter/ITField/ITField';
import FlightField from '../../components/filter/FlightField/FlightField';
import DrinkField from '../../components/filter/DrinkField/DrinkField';
import MedicalField from '../../components/filter/MedicalField/MedicalField';
import EnergyField from '../../components/filter/EnergyField/EnergyField';
import QuestionTerm from '../../components/filter/QuestionTerm/QuestionTerm';
import LongTerm from '../../components/filter/LongTerm/LongTerm';
import ShortTerm from '../../components/filter/ShortTerm/ShortTerm';
import ExplainLongTerm from '../../components/filter/ExplainLongTerm/ExplainLongTerm';
import ExplainShortTerm from '../../components/filter/ExplainShortTerm/ExplainShortTerm';
import styles from './Filter.module.css';

function FilterPage() {
    return (
        <div className={styles.filterpage}>
            <MainTitle />  
            <div className={styles['container']}>
                <div className={styles['top-section']}>
                    <QuestionField />
                    <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                        <FinanceField />
                        <ITField />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <FlightField />
                        <DrinkField />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <MedicalField />
                        <EnergyField />
                    </div>
                </div>

                <div className={styles['bottom-section']}>
                    <QuestionTerm />
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <ShortTerm />
                        <LongTerm />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <ExplainShortTerm />
                        <ExplainLongTerm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterPage;