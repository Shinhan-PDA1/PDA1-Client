import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage/Detail';
import FilterPage from './pages/FilterPage/Filter';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/detail" element={<DetailPage />} />
                <Route path="/filter" element={<FilterPage />} />
            </Routes>
        </Router>
    );
}

export default App;
