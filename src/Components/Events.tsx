import React, { useState } from "react";
import {
  ButtonSelect,
  ColorChoice,
  DayOffButton,
  DescriptionContainer,
  DescriptionDetail,
  EventContainer,
  ExamButton,
  Header,
  HeaderButton,
  SaveButton,
  SettingDate,
  SettingDuration,
  SettingEvent,
  SettingName,
  SettingStatus,
  StudyButton,
  TextStatus,
  TitileHeader,
} from "./Events.styled";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function EventEdit() {
  return (
    <div>
      <EventContainer>
        <div className="shadow-xl">
          <Header>
            <TitileHeader>เพิ่มชื่อกิจกรรม</TitileHeader>
            <HeaderButton>
              <button>
                <CloseRoundedIcon />
              </button>
            </HeaderButton>
          </Header>
          <SettingEvent>
            <SettingDate>
              <SettingName>ขื่อ</SettingName>
              <SettingDuration className="rounded-full">
                ระยะเวลา
              </SettingDuration>
            </SettingDate>
            <TextStatus>
              สถานะ...
            </TextStatus>
            <SettingStatus>
              <ButtonSelect>
              <StudyButton className="">
                asdasd  
              </StudyButton>
              <DayOffButton>
                asdasd  
              </DayOffButton>
              <ExamButton>
                asdasd  
              </ExamButton>
              </ButtonSelect>
              <ColorChoice>
                choice
                <button>
                  Up
                </button>
              </ColorChoice>
            </SettingStatus>
            <DescriptionContainer>
              <DescriptionDetail>
                  เพิ่มคำบรรยาย
              </DescriptionDetail>
            </DescriptionContainer>
          </SettingEvent>
            <SaveButton className="rounded-full">
              บันทึก
            </SaveButton>
        </div>
      </EventContainer>
    </div>
  );
}
