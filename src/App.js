import React, { useState } from 'react';
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
import LoginPage from './pages/LoginPage/Login'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [fanID, setFanID] = useState("");

    const handleLogin = () => {
        setIsLoggedIn(true);
      }
    
    const handleLogout = () => {
    setIsLoggedIn(false);
    }

    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <CoHeader onLogin={handleLogin}
                        isLoggedIn={isLoggedIn}
                        onLogout={handleLogout}
                        fanID={fanID} />
                <Routes>
                    <Route path="/detail" element={<DetailPage />} />
                    <Route path="/guide" element={<GuidePage />} />
                    <Route path="/filter" element={<FilterPage />} />
                    <Route path='/main' element={<MainPage />} />
                    <Route path='/feedback' element={<FeedbackPage />} />
                    <Route path="/login" element={<LoginPage onLogin={handleLogin}  />} />
                </Routes>
                <Chat />
                <Cofooter />
            </div>
        </Router>
    );
}

export default App;
