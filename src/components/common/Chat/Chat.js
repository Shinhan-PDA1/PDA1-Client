import React, { useState } from 'react';
import styles from './Chat.module.css';
import doremi from '../../../assets/images/common/doremi01.png';
import send from '../../../assets/images/common/send.png';
import mockChatData from '../../../data/common/mockChatData';

function Chatting() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(mockChatData);  // mock 데이터로 초기 상태 설정
    const [inputValue, setInputValue] = useState('');
    
    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setMessages([...messages, { user: 'You', text: inputValue.trim() }]);
            setInputValue('');
        }
    };
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            handleSendMessage();
            event.preventDefault(); // Enter 키에 의한 form 제출을 방지
        }
    };

    return (
        <div className={isOpen ? styles.ChatOpen : styles.Chat}>    
            <div className={styles.chatBox}>
                <div className={styles.header}>
                    <img src={doremi} alt="User" id={styles.aiBot}/>
                    <p>척척박사 도레미</p>
                </div>
                <div className={styles.messages}>
                    {messages.map((msg, index) => (
                        <div key={index} className={msg.user === 'You' ? styles.userMessage : styles.aiMessage}>
                            <span className={styles.messageBubble}>{msg.text}</span>
                        </div>
                    ))}
                </div>
             
                <div className={styles.inputContainer}>
                    <input 
                        type="text" 
                        placeholder="" 
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
