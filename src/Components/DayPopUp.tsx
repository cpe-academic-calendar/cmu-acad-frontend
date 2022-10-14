import React, { useState } from "react";
import {
  CloseButton,
  Day,
  DayInfo,
  EventInfo,
  Header,
  HeaderInfo,
  Month,
  PopUP,
  PopUpContainer,
} from "./DayPopUp.styled";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const DayPopUp: React.FC = () => {
  const [event,setEvent] = useState<string>('ไม่มีกิจกรรม')
  const data = {
      name: ""
  }


  return (
    <PopUpContainer>
      <PopUP>
        <DayInfo>
          <Header>
            <HeaderInfo>พุธ</HeaderInfo>
          </Header>
          <Day>13</Day>
          <Month>เม.ย.</Month>
          <EventInfo>{data.name === '' 
          ? <h5>ไม่มีกิจกรรม</h5>
          : data.name
        }</EventInfo>
        </DayInfo>
        <CloseButton>
          <CloseRoundedIcon />
        </CloseButton>
      </PopUP>
    </PopUpContainer>
  );
};

export default DayPopUp;
