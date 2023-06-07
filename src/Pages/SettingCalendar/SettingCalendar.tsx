import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../../GlobalContext/GlobalContext";
import LoadingModal from "../Loading/LoadingModal";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { CalendarPath } from "../path";
import axios from "axios";
import changeToThai from "../../Functions/changeToThai";
import HolidayCard from "./HolidayCard";
import EditIcon from '@mui/icons-material/Edit';

const SettingCalendar = () => {
  const { loading } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [view, setView] = useState("holiday");
  const [condition, setCondition] = useState([
    {
      id: 0,
      event_name: "",
      duration_days: 0,
      duration_weeks: 0,
      num_days: 0,
      num_weeks: 0,
      reference_event: "",
      ref_start: "",
      ref_end: "",
      reference_condition: "",
      type: "",
    },
  ]);
  const [holiday, setHoliday] = useState([
    {
      id: 0,
      color: "",
      event_name: "",
      start_date: "",
    },
  ]);



  useEffect(() => {
    //get condition
    axios
      .get(`${CalendarPath.local}/event/findConditionData`)
      .then((res) => {
        setCondition(res.data);
      });

    //get holiday
    axios.get(`${CalendarPath.local}/event/findHolidayData`).then((res) => {
      setHoliday(res.data);
    });
  }, []);


  let render_content = null;
  if (view === "events") {
    render_content = (
      <>
        <table>
          <tr>
            <th>No.</th>
            <th>ชื่อกรรม</th>
            <th>ประเภท</th>
            <th>ระยะเวลา(วัน) จากวันอ้างอิง</th>
            <th>ระยะเวลา(สัปดาห์) จากวันอ้างอิง</th>
            <th>ก่อน/หลัง</th>
            <th>วันอ้างอิง(วันเริ่ม)</th>
            <th>ระยะเวลา(วัน)</th>
            <th>ระยะเวลา(สัปดาห์)</th>
            <th>ก่อน/หลัง</th>
            <th>วันอ้างอิง(วันสิ้นสุด)</th>
          </tr>
          {condition.map((evt, idx) => (
            <tr key={idx}>
              <td>{idx}</td>
              <td>{evt.event_name}</td>
              <td>
                {evt.type}
              </td>
              <td>{evt.num_days}</td>
              <td>{evt.num_weeks}</td>
              <td>
              {evt.ref_start === "before" && 'ก่อน'}
              {evt.ref_start === "after-last" && 'หลังวันสุดท้าย'}
              {evt.ref_start === "after" && 'ก่อนวันแรก'}
              </td>
              <td>
              {evt.reference_event}
              </td>
              <td>{evt.duration_days}</td>
              <td>{evt.duration_weeks}</td>
              <td>
              {evt.ref_end === "before" && 'ก่อน'}
              {evt.ref_end === "after-last" && 'หลังวันสุดท้าย'}
              {evt.ref_end === "after" && 'ก่อนวันแรก'}
              </td>
              <td>
              {evt.reference_condition}
              </td>
            </tr>
          ))}
        </table>
      </>
    );
  } else if (view === "holiday") {
    render_content = (
      <>
        <table>
          <tr>
            <th>No.</th>
            <th>ชื่อวันหยุด</th>
            <th>วันที่</th>
            <th>เดือน</th>
          </tr>
          {holiday.map((evt, idx) => (
            <tr key={idx}>
              <HolidayCard evt={evt} idx={idx} holiday={holiday} setHoliday={setHoliday} />
            </tr>
            ))
          }
        </table>
      </>
    );
  }

  return (
      <Container>
        {loading ? <LoadingModal /> : null}
        <Count>
          <BackButton
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowBackIosIcon />
            <p>กลับหน้าหลัก</p>
          </BackButton>
          <TableSort>
            <TableName>
              <p>เงื่อนไข</p>
            </TableName>
            <Items>
              <select value={view} onChange={(e) => setView(e.target.value)}>
                <option value="holiday">วันหยุดตามราชกิจจานุเบกษา</option>
                <option value="events">วันที่มีเงื่อนไขเกี่ยวข้องกัน</option>
              </select>
            </Items>
          </TableSort>
          {render_content}
        </Count>
      </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
`;

const Count = styled.div`
  height: 12vh;
  margin-left: 32vh;
    margin-right: 32vh;
  th {
    font-weight: 600;
    color: var(--default-holiday-color);
  }
  table {
    align-items: center;
  }
  td,
  th {
    border: 1px solid var(--stroke);
    text-align: center;
    padding: 12px 18px;
  }
  .icon {
    cursor: pointer;
  }
`;

const TableName = styled.div`
  p {
    font-size: 22px;
    font-weight: 600;
    color: var(--primary-color);
  }
  margin-bottom: 24px;
`;

const TableSort = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  input {
    margin-bottom: 12px;
    padding: 8px 12px;
    border: 1px solid var(--stroke);
    border-radius: 30px;
    background-color: white;
  }
`;

const BackButton = styled.div`
  display: flex;
  cursor: pointer;
  color: var(--yellow);
  p {
    margin-right: 8px;
  }
  margin-bottom: 32px;
`;

const Items = styled.div`
  display: flex;
  max-width: 100%;
  color: var(--primary-color);
  align-items: center;
  .files {
    display: flex;
    align-items: center;
    margin-right: 16px;
  }
  .static {
    display: flex;
    align-items: center;
    margin-right: 16px;
    p {
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-color);
    }
  }
  select {
    border-radius: 8px;
    border-color: var(--primary-color);
    border-width: 2px;
    border-style: solid;
    padding: 8px;
    font-weight: 700;
  }
`;

export default SettingCalendar;
