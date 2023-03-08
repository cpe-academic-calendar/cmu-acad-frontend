import styled from "styled-components";
import React, { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return ( <Container>
        <InputForm>
            <Logo src="\Assets\Logo.png" />
            <div className="text">
                <p>กรุณาเข้าสู่ระบบ</p>
            </div>
            <CalendarSearch placeholder="ชื่อผู้ใช้" value={username} onChange={(e) => {setUsername(e.target.value)}} />
            <CalendarSearch type="password" placeholder="รหัสผ่าน" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            <LoginButton>เข้าสู่ระบบ</LoginButton>
        </InputForm>
    </Container> );
}
 
export default Login;

const CalendarSearch = styled.input`
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;
    padding: 12px 20px;
    border: 2px solid var(--stroke);
    border-radius: 30px;
    background-color: white;
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
    display: flex;
    justify-content: center;
    width: 100%;
`

const InputForm = styled.div`
    margin-top: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    .text{
        margin-bottom: 24px;
    }
`

const Logo = styled.img`
    width: 240px;
`