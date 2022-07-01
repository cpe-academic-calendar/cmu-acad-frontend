import styled from "styled-components";

export const NavBarSt = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`

export const Container = styled.div`
    margin-left: 20vh;
    margin-right: 20vh;
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
`

export const Logo = styled.img`
    width: 10%;
    height: fit-content;
`

export const CalendarSearch = styled.input`
    width: 50%;
    margin-top: auto;
    margin-bottom: auto;
    padding: 12px 20px;
    border: 1px solid #F57F17;
    border-radius: 30px;
    background-color: white;
`

export const Welcome = styled.div`
    display: flex;
    flex-direction: column;
    h3{
        color: #F57F17;
    }
    .caption{
        font-size: small;
    }
`