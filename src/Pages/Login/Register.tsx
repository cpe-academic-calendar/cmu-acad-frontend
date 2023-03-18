import styled from "styled-components";
import React, { useState } from "react";

const Register = () => {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return ( 
    <Container>
        <InputForm>
            <Logo src="\Assets\Logo.png" />
            <Description>ลงทะเบียน</Description>
            <CalendarSearch placeholder="ชื่อ" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} />
            <CalendarSearch placeholder="นามสกุล" value={lastName} onChange={(e) => {setLastName(e.target.value)}} />
            <CalendarSearch placeholder="ตั้งชื่อผู้ใช้" value={username} onChange={(e) => {setUsername(e.target.value)}} />
            <CalendarSearch type="password" placeholder="รหัสผ่าน" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            <CalendarSearch type="password" placeholder="ยืนยันรหัสผ่าน" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} />
            <LoginButton>ลงทะเบียน</LoginButton>
            <Description>
                    <p>หรือ</p>
                    <div className="register">
                        <a href="login">
                            <p>กลับเข้าสู่ระบบ</p>
                        </a>
                    </div>
            </Description>
        </InputForm>
    </Container> );
}
 
export default Register;

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