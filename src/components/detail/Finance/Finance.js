// Finance.js
import React from 'react';
import './Finance.module.css';

function Finance({ financeData, aiReport }) {
    return (
        <div className="finance">
            <table>
                {/* Render financeData here */}
            </table>
            <div className="ai-report">
                <textarea value={aiReport} readOnly />
            </div>
        </div>
    );
}

export default Finance;
