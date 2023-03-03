import dayjs from "dayjs";
import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "./Context/EditCalendarContext";
import EventInfo from "./EventInfo";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface DateFromDayjs {
  day: dayjs.Dayjs;
}

interface eventProps {
  events: {
    id: number;
    event_name: string;
    start_date: any;
    end_date: any;
  }[];
}

const Day: React.FC<DateFromDayjs> = ({ day }) => {
  const [dayEvents, setDayEvents] = useState<any[]>([]);
  const [eventInfo, setEventInfo] = useState(false);
  const [data, setData] = useState<eventProps[]>([]);
  const [dayDropped, setDayDropped] = useState<any>(null);
  const calendarId = useParams();

  // const data = [
  //   {
  //     id:1,
  //     event_name: "hello",
  //     start_date: "2023-02-28T10:05:35.608Z",
  //     duration: 1,
  //     type: "กิจกรรม",
  //   },
  //   {
  //     id:2,
  //     event_name: "hello",
  //     start_date: "2023-02-29T10:05:35.608Z",
  //     duration: 1,
  //     type: "วันหยุด",
  //   },
  //   {
  //     id:3,
  //     event_name: "วันสอบ1",
  //     start_date: "2023-02-26T10:05:35.608Z",
  //     duration: 1,
  //     type: "วันสอบ",
  //   },
  // ]

  const {
    daySelected,
    setDaySelected,
    setShowAddEventModal,
    savedEvents,
    setSelectedEditEvent,
    dispatchCalEvents,
  } = useContext(GlobalContext);

  // useEffect (() => {
  //     const fetchData = async () => {
  //       axios.get(`http://localhost:4000/calendar/findEventById/${calendarId.id}`)
  //       .then(
  //       (res) => {setData(res.data)})
  //     }
  //   fetchData()

  //   data.map((props)=>{
  //     props.events.map((events) => {
  //       if( dayjs(events.start_date).format("DD-MM-YY") === day.format("DD-MM-YY")){
  //         setDaySelected(events.start_date)
  //         dispatchCalEvents({type:'push', payload: events.start_date});
  //     }
  //     })
  //   })
  //   // data.map((props)=>{
  //   //     if( dayjs(props.start_date).format("DD-MM-YY") === day.format("DD-MM-YY")){
  //   //       setDaySelected(props.start_date)
  //   //     dispatchCalEvents({type:'push', payload: props});
  //   //   }
  //   // })

  //   // data.forEach((evt,idx) =>
  //   // {
  //   //   if( dayjs(evt.events[0].start_date).format("DD-MM-YY") === day.format("DD-MM-YY")){
  //   //     dispatchCalEvents({type:'push', payload: evt});
  //   //   }
  //   // });
  // }, []);

  useEffect(() => {
    const events = savedEvents.filter(
      (evt) =>
        dayjs(evt.start_date).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [savedEvents, day]);

  const addEventHandle = () => {
    setDaySelected(day);
    setShowAddEventModal(true);
  };

  const closeEventInfoHandle = () => {
    setEventInfo(false);
  };

  const editEventHandle = (evt: any) => {
    setDaySelected(day);
    setSelectedEditEvent(evt);
    setShowAddEventModal(true);
    setEventInfo(false);
  };

  function handleDragStart(event: any) {// This method runs when the dragging starts
    console.log("Started")
  }
  
  function handleDrag(event: any) {
    // This method runs when the component is being dragged
    console.log("Dragging...")
  }
  
  function handleDragEnd(event: any) {
    // This method runs when the dragging stops
    console.log("Ended")
  }
  
  return (
    <DayContainer>
    <LiteralDay onClick={addEventHandle}>
      {day.format("D")}
        { day.format('D') === "1" && (
          <div>
            {day.format("MMM")}
          </div>
        )}
      </LiteralDay>
      {dayEvents.map((evt, idx) => 
        <div key={idx}>
          {evt.type === 'กิจกรรม' &&                 
          <EventsEvent draggable
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onClick={() => setEventInfo(true)}>
            <p>{evt.event_name}</p>
          </EventsEvent> }

          {evt.type === 'วันหยุด' &&                 
          <EventsHoliday onClick={() => setEventInfo(true)}>
            <p>{evt.event_name}</p>
          </EventsHoliday> }

          {evt.type === 'วันสอบ' &&                 
          <EventsExam onClick={() => setEventInfo(true)}>
            <p>{evt.event_name}</p>
          </EventsExam> }
          
          {eventInfo && <EventInfo event={evt} closeEventInfoHandle={closeEventInfoHandle} editEventHandle={() => {
            editEventHandle(evt)
          }} />}
        </div>)}
</DayContainer>
  );
};

const LiteralDay = styled.div`
  display: flex;
  cursor: pointer;
`;

const DayContainer = styled.div`
  display: flex;
  z-index: 0;
  width: 100%;
  flex-direction: column;
  height: 100%;
  padding: 14px 14px;
  border-color: var(--stroke);
  border-width: 0px 0px 1px 1px;
  border-style: solid;
  .work-day {
    background: #ffffff;
  }
  .holiday {
    background: var(--disable-color);
  }
`;

const EventsEvent = styled.div`
  padding: 0px 4px;
  z-index: 999;
  display: flex;
  justify-content: start;
  width: 100%;
  margin-bottom: 4px;
  background-color: var(--default-event-color);
  p {
    color: white;
  }
`;

const EventsHoliday = styled.div`
  padding: 0px 4px;
  z-index: 999;
  display: flex;
  justify-content: start;
  width: 100%;
  margin-bottom: 4px;
  background-color: var(--default-holiday-color);
  p {
    color: white;
  }
`;

const EventsExam = styled.div`
  padding: 0px 4px;
  z-index: 999;
  display: flex;
  justify-content: start;
  width: 100%;
  margin-bottom: 4px;
  background-color: var(--default-exam-color);
  p {
    color: white;
  }
`;
/* width: ${({Size}) => 
    Size === 'Small' && '25px' || 
    Size === 'Large' && '100px' || 
    '50px'
  }; */

export default Day;
