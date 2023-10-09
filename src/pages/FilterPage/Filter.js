// pages/FilterPage.js
import React from 'react';
import MainTitle from '../../components/filter/MainTitle/MainTitle';
import QuestionField from '../../components/filter/QuestionField/QuestionField';
import './Filter.module.css';

function FilterPage() {
    return (
        <div className="filter-page">
            <MainTitle />
            <QuestionField />
        </div>
    );
}

export default FilterPage;