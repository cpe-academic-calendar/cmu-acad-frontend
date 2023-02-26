import dayjs from 'dayjs'
import styled from 'styled-components';
import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from './Context/GlobalContext';
import EventInfo from './EventInfo';

interface DateFromDayjs{
    day: dayjs.Dayjs;
  }

const Day:React.FC<DateFromDayjs> = ({day}) => {

  let dayClassName = 'work-day'
  if(day.format('d') === '0' || day.format('d') === '6'  ){
    dayClassName = 'holioday'
  }

  const [dayEvents, setDayEvents] = useState<any[]>([]);
  const [eventInfo, setEventInfo] = useState(false);

  const { setDaySelected,  setShowAddEventModal, savedEvents, setSelectedEditEvent } = useContext(GlobalContext);

  useEffect((()=> {
    const events = savedEvents.filter((evt) => 
      dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events)
  }), [savedEvents, day])


  const addEventHandle = () => {
    setDaySelected(day);
    setShowAddEventModal(true);
}

  const closeEventInfoHandle = () => {
   setEventInfo(false)
  }

  const editEventHandle = (evt: any) => {
    setDaySelected(day)
    setSelectedEditEvent(evt)
    setShowAddEventModal(true)
    setEventInfo(false)
  }

  return (
    <DayContainer onClick={addEventHandle}>
        <LiteralDay>
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
              <EventsEvent onClick={() => setEventInfo(true)}>
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
            </div>)}
    </DayContainer>
  )}

const LiteralDay = styled.div`
  display: flex;
`

const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 14px 14px;
  border-color: var(--stroke);
  border-width: 0px 0px 1px 1px;
  border-style: solid;
  .work-day{
    background: #FFFFFF;
  }
  .holiday{
    background: var(--disable-color);
  }
`

const EventsEvent = styled.div`
  padding: 0px 4px;
  z-index: 999;
  display: flex;
  justify-content: start;
  width: 100%;
  margin-bottom: 4px;
  background-color: var(--default-event-color);
  p{
    color: white;
  }
`

const EventsHoliday = styled.div`
  padding: 0px 4px;
  z-index: 999;
  display: flex;
  justify-content: start;
  width: 100%;
  margin-bottom: 4px;
  background-color: var(--default-holiday-color);
  p{
    color: white;
  }
`

const EventsExam = styled.div`
  padding: 0px 4px;
  z-index: 999;
  display: flex;
  justify-content: start;
  width: 100%;
  margin-bottom: 4px;
  background-color: var(--default-exam-color);
  p{
    color: white;
  }
`
  /* width: ${({Size}) => 
    Size === 'Small' && '25px' || 
    Size === 'Large' && '100px' || 
    '50px'
  }; */

export default Day;