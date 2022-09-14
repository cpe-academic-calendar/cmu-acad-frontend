import styled from "styled-components";

export const EventContainer = styled.div`
  margin-left: 200px;
  margin-top: 300px;
  border-radius: 10px 10px 0px 0px;
  width: 384px;
  height: 363px;
`;

export const Header = styled.div`
  border-radius: 10px 10px 0px 0px;
  background-color: #f57f17;
  display: flex;
  justify-content: space-between;
`;

export const BodyEvent = styled.div`
  border: 1px solid;
  border-radius: 10px 10px 0px 0px;
`;

export const TitileHeader = styled.div`
  padding-top: 9px;
  padding-bottom: 9px;
  margin-left: 22px;
  color: white;
`;
export const HeaderButton = styled.div`
  margin-right: 9px;
  padding-top: 9px;
  padding-bottom: 5px;
  color: white;
`;

export const SettingEvent = styled.div`
  background-color: #ffffff;
  margin: 18px 19px 20px 21px;
`;

export const SettingDate = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
`;

export const SettingName = styled.div`
  border: 2px solid #aaaaaa;
  width: 224px;
  height: 33px;
  padding: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  background: #fcfcfc;
  border-radius: 30px;
  color: rgba(0, 0, 0, 0.5);
`;

export const SettingDuration = styled.div`
  border: 2px solid #aaaaaa;
  width: 101px;
  height: 33px;
  padding: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  background: #fcfcfc;
  color: rgba(0, 0, 0, 0.5);
`;

export const DescriptionContainer = styled.div`
  border: 2px solid #aaaaaa;
  width: 344px;
  height: 128px;
  background: #ffffff;
  margin-top: 21px;
  border-radius: 10px;
`;
export const TextStatus = styled.div`
  margin-top: 9px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
`;

export const ButtonSelect = styled.div`
  margin-top: 7px;
  display: flex;
  gap: 10px;
`;
export const SettingStatus = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const StudyButton = styled.button`
  padding: 11px;
  background: #fcfcfc;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const DayOffButton = styled(StudyButton)``;
export const ExamButton = styled(StudyButton)``;

export const ColorChoice = styled.div`
  background: #fcfcfc;
  border: 2px solid #aaaaaa;
  border-radius: 30px;
`;

export const SaveButton = styled.button`
  padding: 10px;
  width: 98px;
  height: 35px;
  background: #f57f17;
  margin: 9px 20px 11px 266px;
  color: #ffffff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #ffffff;
`;

export const DescriptionDetail = styled.div`
  margin-left: 14px;
  margin-top: 11px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.5);
`;
