import styled from "styled-components";
import React, { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = () => {
        if(username === ''){
            setUserNameError(true);
        } 
        if(password === ''){
            setPasswordError(true);
        }
    }

    return ( 
    <Container>
        <InputForm>
            <Logo src="\Assets\Logo.png" />
            <Description>กรุณาเข้าสู่ระบบ</Description>
            <CalendarSearch>
                <input placeholder="ชื่อผู้ใช้" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                {
                    usernameError? <ErrorText>ต้องกรอก</ErrorText>: null
                }
            </CalendarSearch>
            <CalendarSearch>
                <input type="password" placeholder="รหัสผ่าน" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                {
                    passwordError? <ErrorText>ต้องกรอก</ErrorText>: null
                }
            </CalendarSearch> 
            <LoginButton onClick={handleSubmit}>เข้าสู่ระบบ</LoginButton>
            <Description>
                    <p>หากไม่มีบัญชี</p>
                    <div className="register">
                        <a href="register">
                            <p>ลงทะเบียนที่นี่</p>
                        </a>
                    </div>
            </Description>
        </InputForm>
    </Container> );
}
 
export default Login;

const CalendarSearch = styled.div`
    input{
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
        padding: 12px 20px;
        border: 2px solid var(--stroke);
        border-radius: 30px;
        background-color: white;
    }
    width: 100%;
    margin-bottom: 16px;
`

const LoginButton = styled.button`
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;
    padding: 12px 20px;
    border: 2px solid #F57F17;
    border-radius: 30px;
    color: white;
    background-color: var(--primary-color);
    margin-bottom: 16px;
`

const Container = styled.div`
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    width: 80%;
`

const InputForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
`

const Logo = styled.img`
    width: 240px;
`

const Description = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 24px;
    .register{
        cursor: pointer;
        color: var(--primary-color);
        margin-left: 4px;
    }
`

const ErrorText = styled.label`
    color: var(--error);
`