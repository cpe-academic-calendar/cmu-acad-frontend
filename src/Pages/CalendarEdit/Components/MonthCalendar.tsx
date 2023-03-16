import React, { useContext, useEffect, useRef, useState } from "react";
import dayjs from 'dayjs'
import styled from "styled-components";
import Day from "./Day";
import {
    DragDropContext,
    Droppable,
    DropResult,
    DragStart
  } from "react-beautiful-dnd";
import EditCalendarContext from "./Context/EditCalendarContext";
import GlobalContext from "../../../GlobalContext/GlobalContext";

interface DateFromDayjs {
    // month: (dayjs.Dayjs | null)[][];
    month: dayjs.Dayjs[][]
    events: any[];
}

interface eventProps {
    event_name: string;
    start_date: number;
    id: number;
    duration?: number;
    type: string
}


const MonthCalendar: React.FC<DateFromDayjs> = ({ month }) => {
    const {
        savedEvents,
        updateEvent
      } = useContext(EditCalendarContext);
    const { setLoading } = useContext(GlobalContext)
    const selectedEditEventRef = React.useRef<any>(null);
    const daySelectedRef = React.useRef<any>();

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
        
    updateEvent(calendarEvent)
    }
      };  


    const onDragStart = (start: DragStart, provided: any) => {
        savedEvents.map((event) => {
            if(event.id === Number(start.draggableId)){
                selectedEditEventRef.current = event
            }
        })
      }

        
    return ( 
    <div>
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
            <div>
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
            </div>
        </DragDropContext>
    </div> );
}

const Calendar = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows:184px;
    width: 100%;
`

export default MonthCalendar;