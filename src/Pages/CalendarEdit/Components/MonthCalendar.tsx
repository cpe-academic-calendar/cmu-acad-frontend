import React, { useContext, useEffect, useState } from "react";
import dayjs from 'dayjs'
import styled from "styled-components";
import Day from "./Day";
import axios from 'axios'
import {
    DragDropContext,
    Droppable,
    DropResult,
    DragStart
  } from "react-beautiful-dnd";
import EditCalendarContext from "./Context/EditCalendarContext";
import GlobalContext from "../../../GlobalContext/GlobalContext";

interface DateFromDayjs {
    month: dayjs.Dayjs[][];
    events: any[];
}

interface eventProps {
    event_name: string;
    start_date: number;
    id: number;
    duration?: number;
    type: string
}


const MonthCalendar: React.FC<DateFromDayjs> = ({ month, events }) => {
    const {
        daySelected,
        setDaySelected,
        savedEvents,
        selectedEditEvent,
        setSelectedEditEvent,
      } = useContext(EditCalendarContext);
    const { setLoading } = useContext(GlobalContext)
    const selectedEditEventRef = React.useRef<any>(null);
    const daySelectedRef = React.useRef<any>();
    // console.log(event)

    //selectedEditEvent คนละตัวกับ useState ใน useContext



    const onDragEnd = (result: DropResult) => {
    const { destination, source } = result
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    
    daySelectedRef.current = new Date(dayjs(destination.droppableId).format())

    if (destination !== null && destination !== undefined) {
        const calendarEvent: eventProps = {
            event_name: selectedEditEventRef.current.event_name,
            start_date: daySelectedRef.current,
            id: selectedEditEventRef.current.id,
            type: selectedEditEventRef.current.type
            }
        setLoading(true)
        console.log(daySelectedRef.current)
        // console.log(result)
        // console.log(daySelectedRef.current)
        // console.log(calendarEvent)
        
        axios.put(`http://localhost:4000/event/update/${calendarEvent.id}`,
        calendarEvent
      ).then((res: any) => {
        setLoading(false)
        window.location.reload()
        console.log(res.data)
      })
    }
      };  


    const onDragStart = (start: DragStart, provided: any) => {
        // console.log(start.draggableId)
        savedEvents.map((event) => {
            if(event.id === Number(start.draggableId)){
                selectedEditEventRef.current = event
            }
        })
        console.log(selectedEditEventRef.current) 
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
                                        <Day day={day} key={idx} />
                                        {provided.placeholder}
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