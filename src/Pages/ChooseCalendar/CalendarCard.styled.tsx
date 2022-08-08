import styled from "styled-components";

export const Container = styled.div`
    margin-left: 20vh;
    margin-right: 20vh;
    padding-left: 4vh;
    padding-right: 4vh;
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    border-radius: 10px;
    :hover{
        background-color: #fafafa;
    }
`

export const Start = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: row;
    align-items: center;
    .content{
        flex-direction: column;
    }
`

export const End = styled.div`
    display: flex;
    justify-content: end;
    flex-direction: row;
    .content{
        flex-direction: column;
    }
`