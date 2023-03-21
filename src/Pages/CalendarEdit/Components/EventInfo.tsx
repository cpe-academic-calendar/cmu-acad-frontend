import React, { useContext } from "react";
import styled from "styled-components";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import changeToThai from "../../../Functions/changeToThai";
import dayjs from "dayjs";

interface eventProps {
  closeEventInfoHandle: () => void;
  editEventHandle: () => void;
  deleteEventHandle: () => void;
  event: any;
}

interface ColorProps {
  color: string;
}

const EventInfo: React.FC<eventProps> = ({ event, closeEventInfoHandle, editEventHandle, deleteEventHandle }) => {

  let render_delete_edit_button = null

  const checkEvent = (input: string) => {
    if(input=="วันเปิดภาคเรียน") return;
    else if(input=="วันปิดภาคเรียน") return;
    else{
      render_delete_edit_button = 
      <>
        <button onClick={editEventHandle}>
                <EditOutlinedIcon />
        </button>
        <button onClick={deleteEventHandle}>
          <DeleteOutlineOutlinedIcon />
        </button>
      </>
    }
  }

  checkEvent(event.type);

  return (
    <InfoContainer>
      <InfoLayout>
        <InfoHeader>
          <TitleHeader>
              <BoxEventColor color={event.color} />
              <Title>{event.event_name}</Title>
          </TitleHeader>
          <ButtonContainer>
              {render_delete_edit_button}
            <button onClick={closeEventInfoHandle}>
              <CloseOutlinedIcon />
            </button>
          </ButtonContainer>
        </InfoHeader>
        <Duration>
        {
            (String(event.start_date) === String(event.end_date))?
            <>
          <p>{String(event.start_date).substr(0,1)}</p>{" "}
          <p>{changeToThai(String(event.start_date).substr(5,2))}</p>{" "}
          <p>{dayjs(event.start_date).format("BBBB")}</p>
            </>:
            <>
          <p>{String(event.start_date).substr(0,1)}</p>{" "}
          <p>{changeToThai(String(event.start_date).substr(5,2))}</p>{" "}
          <p>{dayjs(event.start_date).format("BBBB")}</p>
          <p>-</p>
          <p>{dayjs(event.end_date).format("DD")}</p>{" "}
          <p>{changeToThai(String(event.start_date).substr(5,2))}</p>{" "}
          <p>{dayjs(event.end_date).format("BBBB")}</p>
            </>
          }
        </Duration>
        <Status>
          สถานะ:
          <StatusType>{event.type}</StatusType>
          <div />
        </Status>
      </InfoLayout>
    </InfoContainer>
  );
};

export default EventInfo;

const InfoContainer = styled.div`
  position: absolute;
  /* margin-top: 48px; */
  z-index: 999;
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

const InfoHeader = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`

const TitleHeader = styled.div`
  display: flex;
  gap: 11px;
`;

const InfoLayout = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

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

const BoxEventColor = styled.div<ColorProps>`
  min-width: 20px;
  max-width: 20px;
  max-height: 20px;
  background-color: ${props => props.color};
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
  /* word-wrap: break-word; */
  /* text-overflow: clip; */
`;

const Duration = styled.div`
  display: flex;
  margin-top: 5px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  p{
    margin-right: 4px;
  }
  color: rgba(0, 0, 0, 0.5);
`;

const StatusType = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: -5px;
  margin-right: 8px;
`;

