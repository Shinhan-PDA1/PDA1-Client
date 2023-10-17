import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom'; // Import useHistory

function LoginPage({ onLogin }) {

    const navigate  = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    const onSubmitHandler = (event) => {
        // 버튼만 누르면 리로드 되는것을 막아줌
        event.preventDefault();

        console.log('Id', Id);
        console.log('Password', Password);

        onLogin();

        navigate('/main');
      

    }

    return (
        <div className={styles.loginContainer}>
        <form className={styles.loginForm} onSubmit={onSubmitHandler} >
        <div className={styles.loginHeader}>
            <h2>로그인하세요</h2>
            <p>맞춤형 관심 종목을 확인할 수 있습니다</p>
        </div>
        <input 
            type='id' 
            value={Id} 
            onChange={onIdHandler}
            placeholder='Id를 입력하세요'
        />
        <input
            type='password' 
            value={Password} 
            onChange={onPasswordHandler}
            placeholder='비밀번호를 입력하세요'
        />
        <br />
        <div className={styles.pw}><p>비밀번호를 잊으셨나요?</p></div>
        <button type="submit">
          로그인
        </button>
      </form>
    </div>
  );
}

export default LoginPage;