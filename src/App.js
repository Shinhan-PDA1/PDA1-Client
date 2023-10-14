import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/global.css";
import CoHeader from './components/common/CoHeader/CoHeader';
import Cofooter from './components/common/CoFooter/CoFooter';
import Chat from './components/common/Chat/Chat';
import DetailPage from './pages/DetailPage/Detail';
import FilterPage from './pages/FilterPage/Filter';
import MainPage from './pages/MainPage/Main';
import GuidePage from './pages/GuidePage/Guide'
import FeedbackPage from './pages/FeedBackPage/FeedBack';

function App() {
    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <CoHeader />
                <Routes>
                    <Route path="/detail" element={<DetailPage />} />
                    <Route path="/guide" element={<GuidePage />} />
                    <Route path="/filter" element={<FilterPage />} />
                    <Route path='/main' element={<MainPage />} />
                    <Route path='/feedback' element={<FeedbackPage />} />

                </Routes>
                <Chat />
                <Cofooter />
            </div>
        </Router>
    );
}

export default App;
