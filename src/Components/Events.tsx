import React, { useState } from "react";
import {
  ButtonSelect,
  ColorChoice,
  ColorOption,
  DayOffButton,
  DescriptionContainer,
  DescriptionDetail,
  EventContainer,
  ExamButton,
  Header,
  HeaderButton,
  InputDescript,
  InputName,
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
              <SettingName>
                <InputName  type="text" name="firstname" placeholder="เพิ่มชื่อ"/>
              </SettingName>
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
              <ColorOption>
                <option >Please choose</option>
                <option >Option 1</option>
                <option >Option 2</option>
                <option >Option 3</option>
                <option >Option 4</option>
              </ColorOption>
              </ColorChoice>
            </SettingStatus>
            <DescriptionContainer>
              <DescriptionDetail>
                <InputDescript>
                เพิ่มคำอธิบาย...
                </InputDescript>
              </DescriptionDetail>
            </DescriptionContainer>
          </SettingEvent>
            <SaveButton className="rounded-full dark:md:hover:bg-amber-500">
              บันทึก
            </SaveButton>
        </div>
      </EventContainer>
    </div>
  );
}
