import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import GlobalContext from "./Context/EditCalendarContext";
import CheckIcon from '@mui/icons-material/Check';
import dayjs from "dayjs";

interface calendarEventProps {
  title: string;
}

interface colorProps {
  color: string
}

export default function EventModal() {

  const { savedEvents, setShowAddEventModal, daySelected, setDaySelected, selectedEvent, selectedEditEvent, setSelectedEditEvent, pushEvent, updateEvent } = useContext(GlobalContext);
  const closedEventHandle = () => {
    setShowAddEventModal(false);
    setSelectedEditEvent(null)
  };


  //state of input that are in this modal
  const [eventName, setEventName] = useState(selectedEditEvent ? selectedEditEvent.event_name : ''); //Event_name
  const [duration, setDuration] = useState(1);  //duration
  const [eventType, setEventType] = useState(selectedEditEvent ? selectedEditEvent.type : 'กิจกรรม') //type
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(selectedEditEvent ? selectedEditEvent.color : '#347BBB');
  const [endDate, setEndDate] = useState(selectedEditEvent ? selectedEditEvent.end_date : daySelected)
  const [startDate, setStartDate] = useState(selectedEditEvent ? selectedEditEvent.start_date : daySelected)
  const calendarId = useParams()

console.log(startDate)
console.log(endDate)

  const color = [
    '#EC407A',
    '#AB47BC',
    '#347BBB',
    '#42A5F5',
    '#26A69A',
    '#4CAF50',
    '#FFA726',
    '#FF5722',
    '#DD2C00'
  ]

  let render_color = color.map((colo) => 
    (
        <ChooseColors color={colo} onClick={() => setSelectedColor(colo)}>
          {
            (selectedColor === colo) && 
            <Icon>
              <CheckIcon />
            </Icon>

          }
        </ChooseColors>
  ))

  useEffect(() => {
    if(eventType === 'กิจกรรม'){
      setSelectedColor(selectedColor)
    }else if(eventType === 'วันหยุด'){
      setSelectedColor('#352829')
    }else if(eventType === 'วันสอบ'){
      setSelectedColor('#666AD1')
    }
  }, [eventType])

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const calendarEvent = {
      event_name: eventName,
      type: eventType,
      start_date: startDate,
      id: selectedEvent?.id,
      endDate: endDate,
      color: selectedColor,
    }

    const createEvent = {
      event_name: eventName,
      type: eventType,
      calendar: calendarId.id,
      start_date:  startDate,
      endDate: endDate,
      color: selectedColor,
    }

    console.log(calendarEvent)


    if (selectedEditEvent) {
      if (calendarEvent.event_name === '') {
        setErrorMessage(true);
      }
      else {
        updateEvent(calendarEvent)
        setErrorMessage(false);
        setSelectedEditEvent(null);
        setDaySelected(0);
        setShowAddEventModal(false);
      }
    }
    else {
      if (calendarEvent.event_name === '') {
        setErrorMessage(true);
      } else {
        pushEvent(createEvent)
        setSelectedEditEvent(null);
        setDaySelected(0);
        setShowAddEventModal(false);
      }
    }
  }

  return (
    <Container>
      <EventContainer>
        <div className="shadow-xl">
          {/* tab */}
          <Header>
            {
              selectedEditEvent ?
                <TitileHeader>แก้ไขกิจกรรม</TitileHeader>
                :
                <TitileHeader>เพิ่มชื่อกิจกรรม</TitileHeader>
            }
            <HeaderButton>
              <button onClick={closedEventHandle}>
                <CloseRoundedIcon />
              </button>
            </HeaderButton>
          </Header>

          {/* Input */}
          <SettingEvent>
            <div>
            <SettingSection>
              <TextStatus>ชื่อกิจกรรม</TextStatus>
            </SettingSection>
              <SettingDate>
                <DurationInput
                  type="text"
                  name="eventName"
                  placeholder="เพิ่มชื่อ"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  required
                />
                {errorMessage ? <ErrorLabel>จำเป็นต้องกรอก</ErrorLabel> : null}

                {/* <DurationInput
                  type="number"
                  name="duration"
                  placeholder="ระยะเวลา"
                  value={duration}
                  onChange={(e) => setDuration(e.target.valueAsNumber)}
                />
                <div>
                  <p>วัน</p>
                </div> */}
              </SettingDate>
            </div>
            <SettingSection>
              <TextStatus>สถานะ</TextStatus>
            </SettingSection>
            <SettingDate>
              <Option value={eventType} onChange={(e) => 
                setEventType(e.target.value)
                }>
                <option value="กิจกรรม">กิจกรรม</option>
                <option value="วันหยุด">วันหยุด</option>
                <option value="วันสอบ">วันสอบ</option>
              </Option>
            </SettingDate>
            <SettingSection>
              <TextStatus>วันเริ่มต้น</TextStatus>
            </SettingSection>
            <SettingDate>
              <DatePick type="date" value={startDate.substr(0,10)} onChange={(e) => 
                setStartDate(e.target.value)
                }>
              </DatePick>
            </SettingDate>
            <SettingSection>
              <TextStatus>วันสิ้นสุด</TextStatus>
            </SettingSection>
            <SettingDate>
              <DatePick type="date" value={endDate.substr(0,10)} onChange={(e) => 
                setEndDate(e.target.value)
                }>
              </DatePick>
            </SettingDate>
            {
              (eventType === "กิจกรรม") && 
              <div>
              <SettingSection>
                <TextStatus>สี</TextStatus>
              </SettingSection>
                <ColorOption>
                  {render_color}
                </ColorOption>
              </div>
            }
            <AddEventButton>
              {
                selectedEditEvent ?
                  <SaveButton type="submit" onClick={handleSubmit} className="rounded-full dark:md:hover:bg-amber-500">
                    แก้ไข
                  </SaveButton>
                  :
                  <SaveButton type="submit" onClick={handleSubmit} className="rounded-full dark:md:hover:bg-amber-500">
                    บันทึก
                  </SaveButton>
              }
            </AddEventButton>
          </SettingEvent>
        </div>
      </EventContainer>

    </Container>
  );
}

const Container = styled.div`
  z-index: 999;
  position: fixed;
  display: flex;
  width: 100%;
  margin-top: 36vh;
  justify-content: center;
`

const ColorSelect = styled.div`
  display: flex;
  margin: 2px;
`

const EventContainer = styled.div`
  position: fixed;
  display: flex;
  border-radius: 10px 10px 10px 10px;
  background-color: white;
`;

const Header = styled.div`
  border-radius: 10px 10px 0px 0px;
  background-color: #f57f17;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 10px;
`;

const TitileHeader = styled.div`
  padding-top: 10px;
  padding-bottom: 9px;
  padding-left: 5px;
  color: white;
`;
const HeaderButton = styled.div`
  margin-right: 9px;
  padding-top: 9px;
  padding-bottom: 5px;
  color: white;
`;

const SettingEvent = styled.form`
  display: flex;
  flex-direction: column;
  margin: 16px;
  border-radius: 15px;
`;

const SettingDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddEventButton = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;


const SettingSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  margin-top: 8px;
`;

const DurationInput = styled.input`
  line-height: 19px;
  color: rgba(0, 0, 0, 0.5);
  border: 2px solid #aaaaaa;
  width: 100%;
  padding: 8px;
  background: #fcfcfc;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  margin-right: 4px;
`;

const TextStatus = styled.div`
  line-height: 16px;
  color: #000000;
`;

const Option = styled.select`
  color: rgba(0, 0, 0, 0.5);
  border: 2px solid #aaaaaa;
  width: 100%;
  padding: 5px;
  line-height: 19px;
  background: #fcfcfc;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  /* margin: 4px; */
`;

const SaveButton = styled.button`
  justify-content: end;
  padding: 10px;
  width: 98px;
  height: 35px;
  background: #f57f17;
  color: #ffffff;
  font-size: 16px;
  line-height: 19px;
  margin-top: 12px;
`;

const ErrorLabel = styled.span`
  font-size: 12px;
  color: var(--error);
`;

const ChooseColors = styled.div<colorProps>`
    display: flex;
    height: 25px;
    width: 25px;
    background-color: ${props => props.color};
    border-radius: 50%;
    display: inline-block;
`

const ColorOption = styled.div`
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  justify-content: space-between;
`

const Icon = styled.div`
  color: white;
`

const DatePick = styled.input`
    color: rgba(0, 0, 0, 0.5);
  border: 2px solid #aaaaaa;
  width: 1000%;
  padding: 8px;
  line-height: 19px;
  background: #fcfcfc;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`