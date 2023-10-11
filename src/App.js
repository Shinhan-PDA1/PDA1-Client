import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/global.css";
import DetailPage from './pages/DetailPage/Detail';
import FilterPage from './pages/FilterPage/Filter';
import MainPage from './pages/MainPage/Main';
import CoHeader from './components/common/CoHeader/CoHeader';
import Cofooter from './components/common/CoFooter/CoFooter';
import Chat from './components/common/Chat/Chat';

function App() {
    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <CoHeader />
                <Routes>
                    <Route path="/detail" element={<DetailPage />} />
                    <Route path="/filter" element={<FilterPage />} />
                    <Route path='/main' element={<MainPage />} />
                </Routes>
                <Chat />
                <Cofooter />
            </div>
        </Router>
    );
}



export default App;
