import React, { useState } from 'react';
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";
import styles from './Chat.module.css';
import lulu from '../../../assets/images/common/chat01.png';
import send from '../../../assets/images/common/send.png';
import mockChatData from '../../../data/common/mockChatData';

// 스피너 스타일 설정
const override = css`
  display: block;
  margin: auto 4%;
  border-color: red;
`;

function Chatting() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(mockChatData);
    const [inputValue, setInputValue] = useState('');
    const [isTerm, setIsTerm] = useState(false);

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setMessages([...messages, { user: 'You', text: inputValue.trim(), isLoading: false }]);
            setInputValue('');

            // TODO: 서버 통신 코드를 여기에 추가하세요.
            setTimeout(() => { // 임시로 setTimeout을 사용하여 비동기 처리를 시뮬레이션합니다.
                setMessages(prevMessages => [...prevMessages, { user: 'AI', text: 'AI 응답 메시지', isLoading: true }]);
            }, 10);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            handleSendMessage();
            event.preventDefault();
        }
    };

    const toggleTerm = () => {
        setIsTerm(!isTerm);
    };

    return (
        <div className={isOpen ? styles.ChatOpen : styles.Chat}>
            <div className={styles.chatBox}>
                <div className={styles.header}>
                    <img src={lulu} alt="User" id={styles.aiBot}/>
                    <p>척척박사 루루</p>
                </div>
                <div className={styles.messages}>
                    {messages.map((msg, index) => (
                        <div key={index} className={msg.user === 'You' ? styles.userMessage : styles.aiMessage}>
                            <span className={styles.messageBubble}>
                                {msg.isLoading ? 
                                    <PulseLoader color={"#123abc"} loading={true} css={override} size={10} /> : 
                                    msg.text}
                            </span>
                        </div>
                    ))}
                </div>
                <button onClick={toggleTerm} className={styles.modeButton}>
                        <div id={styles.mode}>{isTerm ? '▼ 용어 검색' : '▼ 질문 하기'}</div>
                </button>
                <div className={styles.inputContainer}>
                    <input 
                        type="text" 
                        className={styles.input} 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}  
                    />
                    <button onClick={handleSendMessage} className={styles.sendButton}>
                        <img src={send} alt="Send" className={styles.sendIcon} />
                    </button>
                </div>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.toggleButton}>
                {isOpen ? '◀' : '▶'}
            </button>
        </div>
    );
}

export default Chatting;
