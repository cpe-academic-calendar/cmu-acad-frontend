import dayjs from "dayjs";
import styled from "styled-components";
import React, { useContext, useEffect, useRef, useState } from "react";
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
  id: number;
  event_name: string;
  start_date: Date;
  end_date: Date;
  type: string;
}

interface DayProps {
  day: any;
  event: any
}

const Day: React.FC<DayProps> = ({ day, event }) => {
  const [dayEvents, setDayEvents] = useState<any[]>([]);
  const [eventInfo, setEventInfo] = useState(false);
  const [dayDropped, setDayDropped] = useState<any>(null);
  const calendarId = useParams();
  const {
    daySelected,
    setDaySelected,
    setShowAddEventModal,
    savedEvents,
    setSelectedEditEvent,
    dispatchCalEvents,
  } = useContext(GlobalContext);

 
    // const data = [
    //   {
    //     "id": 1,
    //     "event_name": "สงกรานต์",
    //     "start_date": "2023-04-13",
    //     "type": "วันหยุด"
    //   }
    // ]


    useEffect(()=>{
      console.log(event)
        event.map((ed: any) => {
        if (event && dayjs(ed.start_date).format("DD-MM-YY") === day.format("DD-MM-YY")) {
          setDaySelected(ed.start_date)
          dispatchCalEvents({ type: 'push', payload: ed })
        } 
      })
    },[event])
  


  useEffect(() => {
    const events  = savedEvents.filter(
      (evt) => dayjs(evt.start_date).format("DD-MM-YY") === day.format("DD-MM-YY")
    )
    setDayEvents(events)
  }, [savedEvents, day])

  const addEventHandle = () => {
      setDaySelected(day)
      setShowAddEventModal(true);
}

  const closeEventInfoHandle = () => {
    setEventInfo(false)
  }

  {console.log(daySelected)}

  const editEventHandle = (evt: any) => {
    setDaySelected(day);
    setSelectedEditEvent(evt);
    setShowAddEventModal(true);
    setEventInfo(false);
  };

  function handleDragStart(event: any) {// This method runs when the dragging starts
    console.log("Started")
  }

  //Drag and drop function
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if(!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index ) return;

    // let add,
    // events = dayEvents;

    // if(source.droppableId === 'uploaded'){
    //     add = active[source.index]
    //     active.splice(source.index, 1) //remove one item from that place
    // }else if(source.droppableId === 'front_view'){
    //     add = front_view[source.index]
    //     front_view.splice(source.index, 1)
    // }else if(source.droppableId === 'side_view'){
    //     add = side_view[source.index]
    //     side_view.splice(source.index, 1)
    // }else if(source.droppableId === 'back_view'){
    //     add = back_view[source.index]
    //     back_view.splice(source.index, 1)
    // }

    // if(destination.droppableId === 'uploaded'){
    //     active.splice(destination.index, 0, add)
    // }else if(destination.droppableId === 'front_view'){
    //     front_view.splice(destination.index, 0, add)
    // }else if(destination.droppableId === 'side_view'){
    //     side_view.splice(destination.index, 0, add)
    // }else if(destination.droppableId === 'back_view'){
    //     back_view.splice(destination.index, 0, add)
    // }

    // setUplodedImaes(active);
    // setFrontView(front_view);
    // setSideView(side_view);
    // setBackView(back_view);
    
};

  return (
      <DayContainer onClick={addEventHandle}>
        <DragDropContext onDragEnd={onDragEnd} >
          <LiteralDay>
              {day.format("D")}
                { day.format('D') === "1" && (
                  <div>
                    {day.format("MMM")}
                  </div>
                )}
              </LiteralDay>
          <Droppable droppableId={`${daySelected}`}>
            {
              (provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef} >
                  {dayEvents.map((evt, idx) => {
                    return (
                      <Draggable key={evt.id} draggableId={String(evt.id)} index={idx}>
                        {
                          (provided) => (
                            <div key={idx} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              {evt.type === 'กิจกรรม' &&                 
                              <EventsEvent onClick={() => {setEventInfo(true)}}>
                                <p>{evt.title}</p>
                              </EventsEvent> }
      
                              {evt.type === 'วันหยุด' &&                 
                              <EventsHoliday onClick={() => setEventInfo(true)}>
                                <p>{evt.title}</p>
                              </EventsHoliday> }

                              {evt.type === 'วันสอบ' &&                 
                              <EventsExam onClick={() => setEventInfo(true)}>
                                <p>{evt.title}</p>
                              </EventsExam> }
                              
                              {eventInfo && <EventInfo event={evt} closeEventInfoHandle={closeEventInfoHandle} editEventHandle={() => {
                                editEventHandle(evt)
                              }} />}
                            </div>
                          )
                        }
                      </Draggable>
                    )
                  })}
                </div>
              )
            }
          </Droppable>
        </DragDropContext>
              {/* {dayEvents.map((evt, idx) => 
                <div key={idx}>
                  {evt.type === 'กิจกรรม' &&                 
                  <EventsEvent onClick={() => {setEventInfo(true) }}>
                    <p>{evt.title}</p>
                  </EventsEvent> }

                  {evt.type === 'วันหยุด' &&                 
                  <EventsHoliday onClick={() => setEventInfo(true)}>
                    <p>{evt.title}</p>
                  </EventsHoliday> }

                  {evt.type === 'วันสอบ' &&                 
                  <EventsExam onClick={() => setEventInfo(true)}>
                    <p>{evt.title}</p>
                  </EventsExam> }
                  
                  {eventInfo && <EventInfo event={evt} closeEventInfoHandle={closeEventInfoHandle} editEventHandle={() => {
                    editEventHandle(evt)
                  }} />}
                </div>)} */}
        </DayContainer>
  )}

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
