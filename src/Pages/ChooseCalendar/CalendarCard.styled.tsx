import styled from "styled-components";

export const Card = styled.div`
    padding-left: 16vh;
    padding-right: 16vh;
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    border-radius: 10px;
    :hover{
        background-color: var(--hover);
    }
`

export const Start = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    .content{
        flex-direction: column;
        padding: 1rem;
        h4{
            margin-bottom: 10px;
            font-weight: 600;
        }
        p{
            color: #7e7e7e;
        }
    }
    .icon{
        margin-right: 2vh;
    }
    .check{
        margin-right: 2vh;
    }
`

export const End = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    
    .content{
        flex-direction: column;
    }
    h4{
        margin-right: 12vh;
    }
`