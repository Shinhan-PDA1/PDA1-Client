import React, { useState } from 'react';
import styles from './Chat.module.css';
import lulu from '../../../assets/images/common/chat01.png';
import send from '../../../assets/images/common/send.png';
import mockChatData from '../../../data/common/mockChatData';

function Chatting() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(mockChatData);
    const [inputValue, setInputValue] = useState('');
    const [isTerm, setIsTerm] = useState(false); // 추가: 용어와 응용개념 상태 관리

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setMessages([...messages, { user: 'You', text: inputValue.trim() }]);
            setInputValue('');
        }
    };
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            handleSendMessage();
            event.preventDefault();
        }
    };
    
    const toggleTerm = () => {
        setIsTerm(!isTerm); // 용어와 응용개념 상태 토글
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
                            {msg.text.split('\n').map((textPart, partIndex) => (
                                <span key={partIndex}>
                                    {textPart}
                                    {partIndex < msg.text.split('\n').length - 1 && <br />}
                                </span>
                            ))}
                        </span>
                    </div>
                ))}
                </div>
             
                <div className={styles.inputContainer}>
                    {/* 용어와 응용개념 토글 버튼 추가 */}
                    <button onClick={toggleTerm} className={styles.toggleTypeButton}>
                        <div id={styles.mode}>{isTerm ? '[용어]' : '[응용]'}</div>
                    </button>
                    
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
