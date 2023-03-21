import dayjs from "dayjs";
import styled from "styled-components";
import React, { useContext, useEffect, useState, useRef } from "react";
import EditCalendarContext from "./Context/EditCalendarContext";
import EventInfo from "./EventInfo";
import { truncateString } from "../../../Functions/truncateString";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";
import { useNavigate, useParams } from "react-router-dom";
import changeToThai from "../../../Functions/changeToThai";
import { useInView } from 'react-intersection-observer';

interface ColorProps {
  color: string;
}

interface monthColorProps {
  color:string;
}


const Day: React.FC<any> = ({ day }) => {
  const [dayEvents, setDayEvents] = useState<any[]>([]);
  const [eventInfo, setEventInfo] = useState(false);
  const {
    setDaySelected,
    setShowAddEventModal,
    savedEvents,
    setSelectedEditEvent,
    selectedEvent,
    setSelectedEvent,
    deleteEvent
  } = useContext(EditCalendarContext);


  useEffect(() => {
    savedEvents.map((ed: any) => {
      if (savedEvents && dayjs(ed.start_date).format("DD-MM-YY") === day.format("DD-MM-YY")) {
        setDaySelected(ed.start_date)
      }
      else
      if (savedEvents && dayjs(ed.end_date).format("DD-MM-YY") === day.format("DD-MM-YY")) {
        setDaySelected(ed.end_date)
      }
    })
  }, [savedEvents])

  // console.log(dayjs(day).format());
  // console.log(savedEvents)

  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => (
        evt.start_date.substr(0,10) === dayjs(day).format().substr(0,10) 
        || evt.end_date.substr(0,10) === dayjs(day).format().substr(0,10) 
        // || dayjs(evt.end_date).format("DD-MM-YY") === day.format("DD-MM-YY")
    ))
    setDayEvents(events)
  }, [savedEvents, day])

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

  const deleteEventHandle = () => {
      deleteEvent(selectedEvent)
      setEventInfo(false)
  }

  const refOne = useRef<HTMLDivElement | null>(null)

  const handleClickOutSide = (e: any) => {
      if (refOne.current != null) {
          if (!refOne.current?.contains(e.target)) {
            closeEventInfoHandle()
          }
      }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutSide, true)
}, [])

const colorValidate = (day: any) => {
  if(Number(dayjs(day).format("M")) %2 === 0){
    return "even"
  }
  else{
    return "odd"
  }
}


  return (
          <DayContainer color={colorValidate(day)}>
            <LiteralDay onClick={addEventHandle}>
                {day.format("D")}
                {<div>{changeToThai(day.format("MMMM"))}</div>}
                {/* {day.format("D") === "1" && <div>{changeToThai(day.format("MMMM"))}</div>} */}
            </LiteralDay>
            <div className="overflow">
            {dayEvents.map((evt, idx) => {
              return (
                <Draggable
                  key={evt.id}
                  draggableId={evt.id.toString()}
                  index={idx}
                >
                  {(provided) => (
                    <div
                      key={idx}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <EventsEvent
                        color={evt.color}
                        onClick={() => {
                          setEventInfo(true);
                          setSelectedEvent(evt);
                        }}
                      >
                      <p>
                        {
                          truncateString(evt.event_name)
                        }
                      </p>
                      </EventsEvent>
                    </div>
                  )}
                </Draggable>
              );
            })}
                        </div>
            {eventInfo && (
              <div ref={refOne}>
                <EventInfo
                  event={selectedEvent}
                  closeEventInfoHandle={closeEventInfoHandle}
                  editEventHandle={() => {
                    editEventHandle(selectedEvent);
                  }}
                  deleteEventHandle={deleteEventHandle}
                />
              </div>
            )}
          </DayContainer>
  );
};

const handleMonthColor = (color: string) => {
  switch (color) {
    case "even":
      return "var(--background)";
    case "odd":
      return "var(--variant-background)";
  }
};

const LiteralDay = styled.div`
  display: flex;
  cursor: pointer;
`;

const DayContainer = styled.div<monthColorProps>`
/* position: relative; */
  display: flex;
  z-index: 0;
  width: 100%;
  flex-direction: column;
  height: 100%;
  padding: 14px 14px;
  border-color: var(--stroke);
  border-width: 0px 0px 1px 1px;
  border-style: solid;
  background-color: ${({ color }) => handleMonthColor(color)};
  .overflow{
    overflow-y: scroll;
  }
  
`;

const EventsEvent = styled.div<ColorProps>`
  padding: 0px 4px;
  overflow: hidden;
  z-index: 999;
  display: flex;
  justify-content: start;
  width: 100%;
  /* max-height: 10px; */
  margin-bottom: 4px;
  background-color: ${props => props.color};
  color: white;
`;

export default Day;