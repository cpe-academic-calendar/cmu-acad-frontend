import styled from "styled-components";

export const NewCalendarButton = styled.button`
    position: fixed;
    bottom: 10vh;
    right: 15vh;
    background-color: var(--primary-color);
    color: var(--background);
    font-size: xx-large;
    border: none;
    /* padding: 2.5vh; */
    height: 10vh;
    width: 10vh;
    border-radius: 50%;
    z-index: 2;
`

export const Container = styled.div`
    margin-top: 3.5vh;
    margin-left: 15vh;
    margin-right: 15vh;
    align-items: center;
    flex-direction: column;
`

export const TableCardHeader = styled.div`
    padding-left: 16vh;
    padding-right: 16vh;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    p{
        font-size: small;
        color: #7e7e7e;
        font-family: '	Noto Sans', sans-serif;
    }
    .start{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        p{
            margin-right: 12vh;
        }
    }
    .end{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        p{
            margin-right: 10vh;
        }
    }
    .active-icon{
        margin-left: 2vh;
    }
    .disable-icon{
        margin-left: 2vh;
        color: var(--disable-color);
    }
`

export const CalendarSortButton = styled.div`
    cursor: pointer;
    display: flex;
    border-radius:8px;
    justify-content: start;
    background-color: #F3F3F3;
    width: fit-content;
    margin-bottom: 2rem;
    .items{
        margin: 12px;
    }
    .select{
        margin: 12px;
        p{
            color: var(--primary-color);
        }
    }
`