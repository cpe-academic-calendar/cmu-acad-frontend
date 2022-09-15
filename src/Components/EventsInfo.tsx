import React from "react";
import {
  BoxColor,
  ButtonContainer,
  Description,
  DescriptionHead,
  Duration,
  InfoContainer,
  InfoLayout,
  Status,
  StatusType,
  Title,
  TitleHeader,
} from "./EventInfo.styled";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const EventInfo: React.FC = () => {
  return (
      <InfoContainer>
        <InfoLayout>
          <TitleHeader>
            <BoxColor></BoxColor>
            <Title>สอบกลางภาค</Title>
          </TitleHeader>
          <Duration>จ.-ส. 25 กรกฏาคม - 30 กรฏาคม</Duration>
          <Status>
            สถานะ:
            <StatusType>วันสอบ</StatusType>
          </Status>
          <DescriptionHead>
            คำอธิบาย:
            <Description>วันสอบกลางภาค</Description>
          </DescriptionHead>
        </InfoLayout>
        <ButtonContainer>
          <button>
            <EditOutlinedIcon />
          </button>
          <button>
            <DeleteOutlineOutlinedIcon />
          </button>
          <button>
            <CloseOutlinedIcon />
          </button>
        </ButtonContainer>
      </InfoContainer>
  );
};

export default EventInfo;
