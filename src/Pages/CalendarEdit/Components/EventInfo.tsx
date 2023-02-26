import React, { useContext } from "react";
import styled from "styled-components";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import GlobalContext from "./Context/GlobalContext";
import dayjs from "dayjs";

// interface eventType {
//   name: string;
//   type: string;
// }

interface eventProps {
  closeEventInfoHandle: () => void;
  editEventHandle: () => void;
  event: any;
}

const EventInfo: React.FC<eventProps> = ( { event, closeEventInfoHandle, editEventHandle } ) => {

  const { dispatchCalEvents, setShowAddEventModal } = useContext(GlobalContext);

  const deleteEventHandle = () => {
    dispatchCalEvents({type:'delete', payload: event})
    setShowAddEventModal(false);
  }

  let render_color = null;
  switch(event.type){
    case'กิจกรรม':
      render_color = <BoxEventColor />
      break;
    case'วันหยุด':
      render_color = <BoxHolidayColor />
      break;
    case'วันสอบ':
      render_color = <BoxExamColor />
      break;
  }

  return (
      <InfoContainer>
        <InfoLayout>
          <TitleHeader>
            {render_color}
            <Title>{event.title}</Title>
          </TitleHeader>
          <Duration>{<p>{dayjs(event.day).format('D MMMM BBBB')}</p>}</Duration>
          <Status>
            สถานะ:
            <StatusType>{event.type}</StatusType>
          </Status>
        </InfoLayout>
        <ButtonContainer>
          <button onClick={editEventHandle}>
            <EditOutlinedIcon />
          </button>
          <button onClick={deleteEventHandle}>
            <DeleteOutlineOutlinedIcon />
          </button>
          <button onClick={closeEventInfoHandle}>
            <CloseOutlinedIcon />
          </button>
        </ButtonContainer>
      </InfoContainer>
  );
};

export default EventInfo;

const InfoContainer = styled.div`
  position: fixed;
  width: 384px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding-left: 25px;
  padding-top: 18px;
  padding-bottom: 13px;
  padding-right: 8px;
  display: flex;
  justify-content: space-between;
`;

const TitleHeader = styled.div`
  display: flex;
  gap: 11px;
`;

const InfoLayout = styled.div``;

const Status = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  /* Text /Text85 */

  color: rgba(0, 0, 0, 0.85);
`;

const BoxEventColor = styled.div`
  width: 20px;
  height: 20px;
  background: var(--default-event-color);
  border-radius: 5px;
`;

const BoxHolidayColor = styled.div`
  width: 20px;
  height: 20px;
  background: var(--default-holiday-color);
  border-radius: 5px;
`;

const BoxExamColor = styled.div`
  width: 20px;
  height: 20px;
  background: var(--default-exam-color);
  border-radius: 5px;
`;

const Title = styled.div`
  margin-top: -5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;

const Duration = styled.div`
  margin-top: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  /* Text/ Text50 */

  color: rgba(0, 0, 0, 0.5);
`;

const StatusType = styled.div``;

const ButtonContainer = styled.div`
  margin-top: -5px;
  margin-right: 8px;
`;
