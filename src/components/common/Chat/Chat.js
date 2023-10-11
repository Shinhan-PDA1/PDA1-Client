import React, { useState } from 'react';
import styles from './Chat.module.css';

function Chatting() {
    const [isOpen, setIsOpen] = useState(false); // 채팅방의 상태를 관리하는 state
    const [messages, setMessages] = useState([]); // 채팅 메시지를 관리하는 state
    const [inputValue, setInputValue] = useState(''); // 입력된 메시지를 관리하는 state

    // TODO: openapi에서 메시지를 가져오는 함수를 여기에 구현하세요.

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setMessages([...messages, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div className={isOpen ? styles.ChatOpen : styles.Chat}>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.toggleButton}>
                {isOpen ? '◀' : '▶'}
            </button>
            <div className={styles.chatBox}>
                <div className={styles.messages}>
                    {messages.map((msg, index) => (
                        <div key={index} className={styles.message}>
                            {msg}
                        </div>
                    ))}
                </div>
                <div className={styles.inputContainer}>
                    <input 
                        type="text" 
                        placeholder="메시지 입력..." 
                        className={styles.input} 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={handleSendMessage} className={styles.sendButton}>전송</button>
                </div>
            </div>
        </div>
    );
}

export default Chatting;
