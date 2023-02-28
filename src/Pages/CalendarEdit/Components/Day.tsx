import dayjs from "dayjs";
import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "./Context/GlobalContext";
import EventInfo from "./EventInfo";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

interface DateFromDayjs {
  day: dayjs.Dayjs;
}

const Day: React.FC<DateFromDayjs> = ({ day }) => {
  const [dayEvents, setDayEvents] = useState<any[]>([]);
  const [eventInfo, setEventInfo] = useState(false);

  const {
    daySelected,
    setDaySelected,
    setShowAddEventModal,
    savedEvents,
    setSelectedEditEvent,
    dayDropped,
    setDayDropped,
    dispatchCalEvents,
  } = useContext(GlobalContext);

        const data = [
          {
            id:1,
            title: "hello",
            day: "2023-02-28T10:05:35.608Z",
            duration: 1,
            type: "กิจกรรม",
          },
          {
            id:2,
            title: "hello",
            day: "2023-02-29T10:05:35.608Z",
            duration: 1,
            type: "วันหยุด",
          },
        ]
        
        useEffect(() => {
          data.map((evt, idx) => {
            setDaySelected(evt.day)
            if(dayjs(evt.day).format("DD-MM-YY") === dayjs(daySelected).format("DD-MM-YY")){
              dispatchCalEvents({type:'push', payload: evt});
            }
        });
          }, []);

  useEffect(() => {
    const events =
      savedEvents.filter(
        (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
      )
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

  //Drag and drop function
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if(!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index ) return;

    // let add,
    //   dropped_date = dayDropped,
    //   dragged_date = daySelected;

  };

  return (
    <DayContainer onClick={addEventHandle}>
      <DragDropContext onDragEnd={onDragEnd}>
        <LiteralDay>
          {day.format("D")}
          {day.format("D") === "1" && <div>{day.format("MMM")}</div>}
        </LiteralDay>
        <Droppable droppableId={`${dayDropped}`}>
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {dayEvents.map((evt, idx) => {
                return (
                  <Draggable
                    key={evt.id}
                    draggableId={String(evt.id)}
                    index={idx}
                  >
                    {(provided) => (
                      <div
                        key={idx}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {evt.type === "กิจกรรม" && (
                          <EventsEvent
                            onClick={() => {
                              setEventInfo(true);
                            }}
                          >
                            <p>{evt.title}</p>
                          </EventsEvent>
                        )}

                        {evt.type === "วันหยุด" && (
                          <EventsHoliday onClick={() => setEventInfo(true)}>
                            <p>{evt.title}</p>
                          </EventsHoliday>
                        )}

                        {evt.type === "วันสอบ" && (
                          <EventsExam onClick={() => setEventInfo(true)}>
                            <p>{evt.title}</p>
                          </EventsExam>
                        )}

                        {eventInfo && (
                          <EventInfo
                            event={evt}
                            closeEventInfoHandle={closeEventInfoHandle}
                            editEventHandle={() => {
                              editEventHandle(evt);
                            }}
                          />
                        )}
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </DayContainer>
  );
};

const LiteralDay = styled.div`
  display: flex;
`;

const DayContainer = styled.div`
  display: flex;
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
