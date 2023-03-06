//import * from "../../../Components/Events.styled";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import GlobalContext from "./Context/EditCalendarContext";
// import CheckIcon from '@mui/icons-material/Check';

interface calendarEventProps {
  title: string;
}

export default function EventModal() {

  const { showAddEventModal, setShowAddEventModal, daySelected, setDaySelected, selectedEditEvent, setSelectedEditEvent,selectedEvent } = useContext(GlobalContext);
  const closedEventHandle = () => {
    setShowAddEventModal(false);
    setSelectedEditEvent(null)
  };

  //state of input that are in this modal
  const [eventName, setEventName] = useState(selectedEditEvent ? selectedEditEvent.event_name : ''); //Event_name
  const [duration, setDuration] = useState(1);  //duration
  const [eventType, setEventType] = useState(selectedEditEvent ? selectedEditEvent.type : 'กิจกรรม') //type
  const [errorMessage, setErrorMessage] = React.useState(false);
  const calendarId = useParams()
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {

    event.preventDefault()

    const calendarEvent = {
      event_name: eventName,
      type: eventType,
      start_date: daySelected,
      id: selectedEvent?.id,
    }
    
    const createEvent = {
      event_name: eventName,
      type: eventType,
      calendar: calendarId.id,
      start_date: new Date(daySelected),

    }


    if (selectedEditEvent) {
      if (calendarEvent.event_name === '') {
        setErrorMessage(true);
      }
      else {
        axios.put(`http://localhost:4000/event/update/${calendarEvent.id}`,
          calendarEvent
        ).then((res: any) => {
          window.location.reload()
          console.log(res.data)
        })
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
        // console.log(createEvent)
        axios.post(`http://localhost:4000/event/create`,createEvent)
          .then((res)=>{
            window.location.reload()
          })
        // axios.post(`http://localhost:4000/event/create`,createEvent)
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
            <div className="col">
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

                <DurationInput
                  type="number"
                  name="duration"
                  placeholder="ระยะเวลา"
                  value={duration}
                  onChange={(e) => setDuration(e.target.valueAsNumber)}
                />
                <div>
                  <p>วัน</p>
                </div>
              </SettingDate>
            </div>
            <SettingSection>
              <TextStatus>สถานะ...</TextStatus>
            </SettingSection>
            <SettingDate>
              <ColorOption value={eventType} onChange={(e) => setEventType(e.target.value)}>
                <option value="กิจกรรม">กิจกรรม</option>
                <option value="วันหยุด">วันหยุด</option>
                <option value="วันสอบ">วันสอบ</option>
              </ColorOption>
            </SettingDate>
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
  margin-bottom: 18px;
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
  margin: 18px;
  border-radius: 15px;
`;

const SettingDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* .col{
    flex-direction: column;
  }
  .duration{
    display: flex;
    align-items: center;
  } */
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

// const InputName = styled.input`
//   color: rgba(0, 0, 0, 0.5);
//   border: 2px solid #aaaaaa;
//   width: 80%;
//   height: 33px;
//   padding: 5px;
//   font-size: 16px;
//   line-height: 19px;
//   background: #fcfcfc;
//   border-radius: 20px;
//   margin: 4px;
// `;

const DurationInput = styled.input`
  line-height: 19px;
  color: rgba(0, 0, 0, 0.5);
  border: 2px solid #aaaaaa;
  width: 60%;
  padding: 5px;
  background: #fcfcfc;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  margin-right: 4px;
`;

const TextStatus = styled.div`
  line-height: 16px;
  color: #000000;
`;

const ColorOption = styled.select`
  color: rgba(0, 0, 0, 0.5);
  border: 2px solid #aaaaaa;
  width: 50%;
  padding: 5px;
  line-height: 19px;
  background: #fcfcfc;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  margin: 4px;
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
  color: var(--error)
`