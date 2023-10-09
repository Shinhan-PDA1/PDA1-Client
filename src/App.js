import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage/Detail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/detail" element={<DetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;
