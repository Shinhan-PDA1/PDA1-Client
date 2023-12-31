import React, { useState } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import styles from './Chat.module.css';
import lulu from '../../../assets/images/common/chat01.png';
import send from '../../../assets/images/common/send.png';
import axios from 'axios';



const initialMessages = [
    { user: 'AI', text: '안녕하세요! 척척박사 루루입니다. \n ＊단어 검색 모드 : 단순 용어 검색 시, 더 빠르고 정확한 답변을 받으실 수 있습니다. \n＊질문하기 모드 : 용어 외 더 복잡한 질문 시 설정해주세요. ' },
];

function Chatting() {
    const [messages, setMessages] = useState(initialMessages);
    const [isOpen, setIsOpen] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [isTerm, setIsTerm] = useState(false);

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setMessages([...messages, { user: 'You', text: inputValue.trim(), isLoading: false }]);
            setInputValue('');

            const body = {
                "question": inputValue.trim(),
                "type": isTerm ? 'word' : 'question'
            }

            // AI 응답 대기 메시지 추가
            setMessages(prevMessages => [...prevMessages, { user: 'AI', isLoading: false }]);

            console.log("ChatBot API...");
            const apiUrl = 'http://jootopia-mainserver-service.team-1.svc.cluster.local/jootopia/v1/users/system/chatbot';
            axios.post(apiUrl, body)
            .then((response) =>{
                setMessages(prevMessages => [
                    ...prevMessages.slice(0, -1), // 마지막 로딩 메시지 제거
                    { user: 'AI', text: response.data.response, isLoading: false }
                ]);

            })
            .catch((error) => {
              console.error('Chat API...', error);
            });

setMessages(prevMessages => [...prevMessages, { user: 'AI', text: 'AI 응답 메시지', isLoading: true }]);
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
                                    <PulseLoader color={"#123abc"} loading={true} size={10} /> : 
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
