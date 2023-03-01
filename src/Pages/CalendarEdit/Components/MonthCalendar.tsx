import React, { useContext, useEffect, useState } from "react";
import dayjs from 'dayjs'
import styled from "styled-components";
import Day from "./Day";
import GlobalContext from "./Context/EditCalendarContext";
import axios from 'axios'
import { useParams } from "react-router-dom";

interface DateFromDayjs {
    month: dayjs.Dayjs[][];
    events: any[];
}


const MonthCalendar: React.FC<DateFromDayjs> = ({ month, events }) => {
    const [event, setEvent] = useState<any[]>([])
    const calendarId = useParams()
    console.log(calendarId)
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/calendar/findEventById/${calendarId.id}`)
                setEvent(res.data[0].events);
            }catch(error){
                console.log(error)
            }        
        }
        getData()
    }, [calendarId])

    console.log(event)

    const {setDaySelected, daySelected, dispatchCalEvents } = useContext(GlobalContext);
        
    return ( <>
        <Header>
                <DayItems>
                    <p>วันอาทิตย์</p>
                </DayItems>
                <DayItems>
                    <p> วันจันทร์</p>
                    <p>12</p>
                </DayItems>
                <DayItems>
                    <p>วันอังคาร</p>
                    <p>12</p>
                </DayItems>
                <DayItems>
                    <p>วันพุธ</p>
                    <p>12</p>
                </DayItems>
                <DayItems>
                    <p>วันพฤหัส</p>
                    <p>12</p>
                </DayItems>
                <DayItems>
                    <p>วันศุกร์</p>
                    <p>12</p>
                </DayItems>
                <DayItems>วันเสาร์</DayItems>
        </Header>
        <Container>
            {
                month.map((row, i) => (
                    <Calendar key={i}>
                        {row.map((day, idx) => (
                            <div>
                                <Day day={day} event={event} key={idx} />
                            </div>
                        ))}
                    </Calendar>
                ))
            }
        </Container>
    </>);
}

const Calendar = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows:184px;
    width: 100%;
`

const Container = styled.div`
    margin-top: 133px;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default MonthCalendar;