import dayjs from "dayjs";
import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import EditCalendarContext from "./Context/EditCalendarContext";
import EventInfo from "./EventInfo";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface DateFromDayjs {
  day: dayjs.Dayjs;
}

interface ColorProps {
  color: string;
}

interface eventProps {
  id: number;
  event_name: string;
  start_date: Date;
  end_date: Date;
  type: string;
}


const Day: React.FC<any> = ({ day }) => {
  const [dayEvents, setDayEvents] = useState<any[]>([]);
  const [eventInfo, setEventInfo] = useState(false);
  const calendarId = useParams();
  const {
    daySelected,
    setDaySelected,
    setShowAddEventModal,
    savedEvents,
    setSelectedEditEvent,
    selectedEvent,
    setSelectedEvent,
  } = useContext(EditCalendarContext);


  useEffect(() => {
    savedEvents.map((ed: any) => {
      if (savedEvents && dayjs(ed.start_date).format("DD-MM-YY") === day.format("DD-MM-YY")) {
        setDaySelected(ed.start_date)
      }
    })
  }, [savedEvents])


  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => dayjs(evt.start_date).format("DD-MM-YY") === day.format("DD-MM-YY")
    )
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
    axios.delete(`https://cmu-acad-backend-production.up.railway.app/event/delete/${selectedEvent.id}`).then(
      (res)=>{
        console.log(res.data)
        window.location.reload()
      })
      setEventInfo(false)
  }

  function truncateString(str: string) {
    if(15>str.length){
      return str
    }
      return str.slice(0, 15) + "..."
  }

  return (
          <DayContainer>
            <LiteralDay onClick={addEventHandle}>
              {day.format("D")}
              {day.format("D") === "1" && <div>{day.format("MMM")}</div>}
            </LiteralDay>
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
                        color={evt.type}
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
            {eventInfo && (
              <EventInfo
                event={selectedEvent}
                closeEventInfoHandle={closeEventInfoHandle}
                editEventHandle={() => {
                  editEventHandle(selectedEvent);
                }}
                deleteEventHandle={deleteEventHandle}
              />
            )}
          </DayContainer>
  );
};

const handleColorType = (color: string) => {
  switch (color) {
    case "กิจกรรม":
      return "var(--default-event-color)";
    case "วันหยุด":
      return "var(--default-holiday-color)";
    case "วันสอบ":
      return "var(--default-exam-color)";
  }
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

const EventsEvent = styled.div<ColorProps>`
  padding: 0px 4px;
  overflow: hidden;
  z-index: 999;
  display: flex;
  justify-content: start;
  width: 100%;
  /* max-height: 10px; */
  margin-bottom: 4px;
  background-color: ${({ color }) => handleColorType(color)};
  color: white;
`;

export default Day;
