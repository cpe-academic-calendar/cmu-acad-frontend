import dayjs from "dayjs";
import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import EditCalendarContext from "./Context/EditCalendarContext";
import EventInfo from "./EventInfo";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DragStart,
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
  // const [data, setData] = useState<eventProps[]>([]);
  // const [dayDropped, setDayDropped] = useState<any>();
  const calendarId = useParams();

  const data = [
    {
      id: 1,
      event_name: "hello",
      start_date: "2023-02-28T10:05:35.608Z",
      duration: 1,
      type: "กิจกรรม",
    },
    {
      id: 2,
      event_name: "hello",
      start_date: "2023-02-29T10:05:35.608Z",
      duration: 1,
      type: "วันหยุด",
    },
    {
      id: 3,
      event_name: "วันสอบ1",
      start_date: "2023-02-26T10:05:35.608Z",
      duration: 1,
      type: "วันสอบ",
    },
  ];

  const {
    daySelected,
    setDaySelected,
    setShowAddEventModal,
    savedEvents,
    setSelectedEditEvent,
    dispatchCalEvents,
    selectedEvent,
    setSelectedEvent,
  } = useContext(EditCalendarContext);

  // useEffect (() => {
  //     const fetchData = async () => {
  //       axios.get(`http://localhost:4000/calendar/findEventById/${calendarId.id}`)
  //       .then(
  //       (res) => {setData(res.data)})
  //     }
  //   fetchData()

  // data.map((props)=>{
  //     if( dayjs(props.start_date).format("DD-MM-YY") === day.format("DD-MM-YY")){
  //       setDaySelected(props.start_date)
  //     dispatchCalEvents({type:'push', payload: props});
  //   }
  // })

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

  const deleteEventHandle = () => {
    dispatchCalEvents({ type: "delete", payload: selectedEvent });
    setEventInfo(false);
  };

  return (
    <Droppable droppableId={`${day.format("YYYY-MM-DD")}`}>
      {(provided, snapshot) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
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
                        <p>{evt.event_name}</p>
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
        </div>
      )}
    </Droppable>
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
  z-index: 999;
  display: flex;
  justify-content: start;
  width: 100%;
  margin-bottom: 4px;
  background-color: ${({ color }) => handleColorType(color)};
  color: white;
`;

export default Day;
