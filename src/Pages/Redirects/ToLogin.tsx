import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ToLogin = () => {
    const navigate = useNavigate();

    const isThereToken = localStorage.getItem("token") ? localStorage.getItem("token") : null;

    useEffect(() => {
        if(isThereToken){
            navigate("/choose_calendar", { replace: true });
        }
    },[])

    const handleSubmit = () => {
        // window.location.href = `${process.env.REACT_CMU_OAUTH}/redirect`
        navigate("/redirect", { replace: false });
    }

    return ( 
    <Container>
        <InputForm>
            <Logo src="\Assets\Logo.png" />
            <Description>กรุณาเข้าสู่ระบบ</Description>
            <LoginButton onClick={handleSubmit}>เข้าสู่ระบบ</LoginButton>
        </InputForm>
    </Container> );
}
 
export default ToLogin;

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