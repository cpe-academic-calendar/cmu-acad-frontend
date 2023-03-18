import styled from "styled-components";
import React, { useContext, useEffect, useRef, useState } from "react";

//Other files
import { getMonth } from "./Components/util";
import CalendarHeader from "./Components/CalendarHeader";
import SideBar from "./Components/Sidebar/Sidebar";
import MonthCalendar from "./Components/MonthCalendar";
import EventModal from "./Components/EventModal";
import GlobalContext from "../../GlobalContext/GlobalContext";
import EditCalendarContext from "./Components/Context/EditCalendarContext";
import YearCalendar from "./Components/YearCalendar";
import axios from "axios";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import ExportPopUp from "../../Components/ExportPopUp";

interface dataProps {
  data: {
    name: string;
    start_semester: Date;
    year: number;
    calendar_status: string;
    create_at: Date;
    update_at: Date;
    delete_at: Date;
  };
}

const CalendarEdit = () => {
  const [calendarName, setCalendarName] = React.useState("");
  const [startSemesterMonth, setStartSemesterMonth] = useState<any>();
  const [startSemesterYear, setStartSemesterYear] = useState<any>();
  const [fileOption, setFileOption] = React.useState<boolean>(false);
  const { showAddEventModal, savedEvents, setSavedEvents } = React.useContext(EditCalendarContext);
  const { exportModal, setExportModal } = React.useContext(GlobalContext);
  const [data, setData] = React.useState<any[]>([]);
  const { id, view } = useParams();

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutSide, true);
  });

  const refOne = React.useRef<HTMLDivElement | null>(null);
  const handleClickOutSide = (e: any) => {
    if (refOne.current != null) {
      if (!refOne.current?.contains(e.target)) {
        setFileOption(false);
      }
    }
  };

  useEffect(() => {
    axios
      .get(`https://cmu-acad-backend-production.up.railway.app/calendar/${id}`)
      .then((res) => {
        setData(res.data);
        setStartSemesterMonth(dayjs(res.data.start_semester).month())
        setStartSemesterYear(dayjs(res.data.start_semester).year())
      });
  }, []);

  const onFileClickHandle = () => {
    setFileOption(true);
  };
  const closedFileModalHandle = () => {
    setFileOption(false);
  };

  const handleClickBack = () => {
    localStorage.removeItem("savedEvents");
  };

  let render_view = null;

  //   let months = [];
  //   for (let i = -3; i < 20; i++) {
  //     months.push(i);
  //   }

  switch (view) {
    case "month":
      render_view = (
        <Row>
          <div className="calendar">
            <Header>
              <DayItems>
                <p>วันอาทิตย์</p>
              </DayItems>
              <DayItems>
                <p> วันจันทร์</p>
              </DayItems>
              <DayItems>
                <p>วันอังคาร</p>
              </DayItems>
              <DayItems>
                <p>วันพุธ</p>
              </DayItems>
              <DayItems>
                <p>วันพฤหัส</p>
              </DayItems>
              <DayItems>
                <p>วันศุกร์</p>
              </DayItems>
              <DayItems>วันเสาร์</DayItems>
            </Header>
            <Container>
              <MonthCalendar
                month={getMonth(
                  startSemesterMonth-3,
                  startSemesterYear
                )}
                events={data}
              />
            </Container>
          </div>
          <div className="sidebar">
            <SideBar />
          </div>
        </Row>
      );
      break;
    case "year":
      render_view = (
        <div>
          <YearCalendar />
        </div>
      );
  }

  return (
    <React.Fragment>
      {exportModal && <ExportPopUp />}
      <Col>
        {showAddEventModal && <EventModal />}
        <CalendarHeader
          onFileClickHandle={onFileClickHandle}
          name={calendarName}
          year={startSemesterYear}
        />
        {fileOption ? (
          <div ref={refOne}>
            <FileOption>
              <div className="item" onClick={() => setExportModal(true)}>
                นำออกเป็นไฟล์อื่น
              </div>
              <div className="item" onClick={() => handleClickBack()}>
                <a href="/">กลับหน้าหลัก</a>
              </div>
            </FileOption>
          </div>
        ) : null}
        {render_view}
      </Col>
    </React.Fragment>
  );
};

const Col = styled.div`
  height: 100%;
  width: 100%;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 7fr auto;
  .calendar {
    margin-right: 253px;
  }
  .sidebar {
    padding-top: 133px;
  }
`;

const FileOption = styled.div`
  position: fixed;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  z-index: 998;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  color: #111;
  margin-top: 48px;
  .item {
    padding: 20px 30px;
    &:hover {
      cursor: pointer;
      background-color: var(--hover);
    }
  }
`;

const Header = styled.div`
  width: 100%;
  margin-top: 79px;
  position: fixed;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 54px;
  background: #fcfcfc;
  border-width: 0px 1px 1px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  padding-right: 253px;
`;

const DayItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 133px;
`;

export default CalendarEdit;
