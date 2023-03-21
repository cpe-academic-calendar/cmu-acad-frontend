import React, { createContext, useContext, useEffect, useRef } from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import styled from "styled-components";
import CalendarCardOption from "./CalendarCardOption";
import { useCalendarCollect } from "../CollectItem";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import ChooseCalendarContext from "../Context/ChooseCalendarContext";
import changeToThai from "../../../../Functions/changeToThai";

interface calendarProps{
  id: number,
  name: string;
  start_semester: Date;
  year: number;
  create_at: Date;
  update_at: Date;
  handleCheckClick: (id: number) => void;
  handleUnCheckClick: (selectedCard: number) => void;
}

const CalendarCard: React.FC<calendarProps> = (data) => {

  const [duplicateOverlay, setDuplicateOverlay] = useState<Boolean>(false);
  const navigate = useNavigate();
  const [selectCalendar, setSelectCalendar] = useState<boolean>(false);
  const [pathId, setPathId] = useState('')

  let render_option = null;

  duplicateOverlay
    ? (render_option = <CalendarCardOption item={data} />)
    : (render_option = null);

  const handleDropDownFocus = (state: Boolean) => {
    setDuplicateOverlay(!state);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutSide, true);
  }, []);

  const refOne = useRef<HTMLDivElement | null>(null);

  const handleClickOutSide = (e: any) => {
    if (refOne.current != null) {
      if (!refOne.current?.contains(e.target)) {
        setDuplicateOverlay(false);
      }
    }
  };

  const handleCardClick = () => {
    navigate(`/calendar-edit/${data.id}/${"month"}`);
  };

  return (
    <Card>
      <Start>
        {selectCalendar ? (
          <div
            className="check"
            onClick={() => {
              data.handleUnCheckClick(data.id);
              setSelectCalendar((prev) => !prev)
            }}
          >
            <CheckCircleIcon />
          </div>
        ) : (
          <div
            className="check"
            onClick={() => {
              data.handleCheckClick(data.id);
              setSelectCalendar((prev) => !prev)
            }}
          >
            <RadioButtonUncheckedOutlinedIcon />
          </div>
        )}
        <CalendarTodayOutlinedIcon className="icon" />
        <div className="content" onClick={handleCardClick}>
          <h4>{data.name}</h4>
          <p>ปีการศึกษา {dayjs(data.start_semester).format("BBBB")}</p>
        </div>
      </Start>
      <End onClick={handleCardClick}>
        <h4>
          {String(data.create_at).substr(8,2)}{" "}
          {changeToThai(String(data.create_at).substr(5,2))}{" "}
          {dayjs(data.create_at).format("BBBB")}
        </h4>
        <h4>
        {String(data.update_at).substr(8,2)}{" "}
          {changeToThai(String(data.update_at).substr(5,2))}{" "}
          {dayjs(data.update_at).format("BBBB")}
        </h4>
      </End>
      <div className="block">
        <div className="static">
          <button>
            <MoreVertIcon
              onClick={() => handleDropDownFocus(duplicateOverlay)}
            />
          </button>
        </div>
        <div className="absolute mt-20" ref={refOne}>
          {render_option}
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
  cursor: pointer;
  padding-left: 16vh;
  padding-right: 16vh;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  :hover {
    background-color: var(--hover);
  }
`;

const Start = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  .content {
    flex-direction: column;
    padding: 1rem;
    h4 {
      margin-bottom: 10px;
      font-weight: 600;
    }
    p {
      color: #7e7e7e;
    }
  }
  .icon {
    margin-right: 2vh;
  }
  .check {
    margin-right: 2vh;
  }
`;

const End = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  .content {
    flex-direction: column;
  }
  h4 {
    margin-right: 12vh;
  }
`;

export default CalendarCard;
