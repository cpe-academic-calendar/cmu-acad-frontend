import React, {useRef} from "react";
import dayjs from 'dayjs'
import styled from "styled-components";
import Day from "./Day";

interface DateFromDayjs {
    month: dayjs.Dayjs[][];
}

const MonthCalendar:React.FC<DateFromDayjs> = ({ month }) => {
    return ( <>
        <Header>
                <DayItems>วันอาทิตย์</DayItems>
                <DayItems>วันจันทร์</DayItems>
                <DayItems>วันอังคาร</DayItems>
                <DayItems>วันพุธ</DayItems>
                <DayItems>วันพฤหัส</DayItems>
                <DayItems>วันศุกร์</DayItems>
                <DayItems>วันเสาร์</DayItems>

        </Header>
        {
            month.map((row, i) => (
                <Container key={i}>
                    {row.map((day, idx)=> (
                        <Day day={day} key={idx} />
                    ))}
                </Container>
            ))
        }
    </> );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows:184px;
    width: 100%;
`
const Header = styled.div`
    width: 100%;
    margin-top: 79px;
    position: fixed;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows:54px;
    background: #FCFCFC;
    border-width: 0px 1px 1px 0px;
    border-style: solid;
    border-color: #E7E7E7;
    padding-right: 253px;
`

const DayItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
 
export default MonthCalendar;