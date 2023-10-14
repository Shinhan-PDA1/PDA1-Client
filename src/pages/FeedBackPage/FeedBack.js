import React, { useState } from 'react';

import styles from './FeedBack.module.css'; // CSS 모듈 임포트

function FeedbackPage() {
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    /*
    // API 호출을 통해 데이터를 DB에 저장
    try {
        const response = await fetch('/api/feedback', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('평가가 성공적으로 저장되었습니다.');
        } else {
            alert('오류가 발생했습니다. 다시 시도해주세요.');
        }
    } catch (error) {
        console.error('API 호출 중 에러 발생:', error);
    }
    }
    */;

    return (
        <div className={styles.container}>
            <div className={styles['feedback-box']}>
                <button className={styles.button}>
                    서비스에 만족하셨나요?
                </button>

                <div className={styles['stars-container']}>
                    {[1, 2, 3, 4, 5].map(star => (
                        <span
                            key={star}
                            onClick={() => setRating(star)}
                            className={star <= rating ? styles['star-active'] : styles.star}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <p className={styles.instruction}>별점을 선택해주세요.</p>

                <button className={styles.button}>
                    서비스에 대한 의견을 공유해주세요!
                </button>

                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className={styles.textarea}
                    placeholder="내용을 입력해주세요"
                ></textarea>

                <button 
                            className={styles.submitButton} 
                            //onClick={handleSubmit}
                        >
                            제출하기
                </button>

            </div>
        </div>
    );
}

export default FeedbackPage;
