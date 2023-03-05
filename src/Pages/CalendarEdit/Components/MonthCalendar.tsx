import React, { useContext, useEffect, useState } from "react";
import dayjs from 'dayjs'
import styled from "styled-components";
import Day from "./Day";
import axios from 'axios'
import { useParams } from "react-router-dom";
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
    DragStart
  } from "react-beautiful-dnd";
import EditCalendarContext from "./Context/EditCalendarContext";

interface DateFromDayjs {
    month: dayjs.Dayjs[][];
    events: any[];
}


const MonthCalendar: React.FC<DateFromDayjs> = ({ month, events }) => {
    const {
        daySelected,
        setDaySelected,
        setShowAddEventModal,
        savedEvents,
        selectedEditEvent,
        setSelectedEditEvent,
        dispatchCalEvents,
        selectedEvent,
        setSelectedEvent,
      } = useContext(EditCalendarContext);
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

    const [draggedComponent, setDraggedComponent] = React.useState<string | null>(null);

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result
    
    if (destination !== null && destination !== undefined) {
        setDaySelected(dayjs(destination.droppableId).format())
    }
        const calendarEvent = {
            event_name: selectedEditEvent.event_name,
            duration: selectedEditEvent.duration,
            start_date: daySelected,
            id: selectedEditEvent.id,
            type: selectedEditEvent.type
            }
        dispatchCalEvents({ type: "update", payload: calendarEvent });
      };  
    const onDragStart = (start: DragStart, provided: any) => {
        setDraggedComponent(start.draggableId);
        savedEvents.map((event) => {
            if(event.id === Number(draggedComponent)){
                setSelectedEditEvent(event)
            }
        })
        // console.log(start.draggableId)
      }
        
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
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
            <Container>
            {
                month.map((row, i) => (
                    <Calendar key={i}>
                        {row.map((day, idx)=> (
                            <Droppable droppableId={`${day.format("YYYY-MM-DD")}`}>
                                {(provided, snapshot) => (
                                    <div {...provided.droppableProps} ref={provided.innerRef}>
                                        <Day day={day} event={event} key={idx} />
                                    </div>
                                )}
                            </Droppable>
                        ))}
                    </Calendar>
                ))
            }
            </Container>
        </DragDropContext>
    </> );
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