import React, { useContext, useEffect, useRef, useState } from "react";
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
import { useParams } from "react-router-dom";

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


const MonthCalendar: React.FC<DateFromDayjs> = ({ month, events }) => {
    const {
        daySelected,
        setDaySelected,
        savedEvents,
        selectedEditEvent,
        setSelectedEditEvent,
        setMonthIndex,
        monthIndex,
        updateEvent
      } = useContext(EditCalendarContext);
    const { setLoading } = useContext(GlobalContext)
    const selectedEditEventRef = React.useRef<any>(null);
    const daySelectedRef = React.useRef<any>();
    const calendarId = useParams()

    // useEffect(() => {
    //     axios.get(
    //         `https://cmu-acad-backend-production.up.railway.app/calendar/studyweek/${calendarId.id}`
    //     ).then(
    //         res => {
    //             if(currentTerm === 1){
    //                 setCountMon(res.data.term1[0].monday)
    //                 setCountTue(res.data.term1[0].tuesday)
    //                 setCountWed(res.data.term1[0].wednesday)
    //                 setCountThur(res.data.term1[0].thursday)
    //                 setCountFri(res.data.term1[0].friday)
    //             }else if(currentTerm === 2){
    //                 setCountMon(res.data.term2[0].monday)
    //                 setCountTue(res.data.term2[0].tuesday)
    //                 setCountWed(res.data.term2[0].wednesday)
    //                 setCountThur(res.data.term2[0].thursday)
    //                 setCountFri(res.data.term2[0].friday)
    //             }else if(currentTerm === 3){
    //                 setCountMon(res.data.term3[0].monday)
    //                 setCountTue(res.data.term3[0].tuesday)
    //                 setCountWed(res.data.term3[0].wednesday)
    //                 setCountThur(res.data.term3[0].thursday)
    //                 setCountFri(res.data.term3[0].friday)
    //             }
    //         }
    //     )
    //   }, [savedEvents])

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
        // console.log(selectedEditEventRef.current) 
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