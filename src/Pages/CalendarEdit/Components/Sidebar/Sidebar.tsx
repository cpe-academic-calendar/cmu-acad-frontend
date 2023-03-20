import styled from "@emotion/styled";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import EventCard from "./EventCard";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import EditCalendarContext from "../Context/EditCalendarContext";
import { useParams } from "react-router-dom";

const SideBar: React.FC = () => {
  const { savedEvents } = useContext(EditCalendarContext);
  const calendarId = useParams();
  const [studyCount, setStudyCount] = useState<any>({
    term1: [
      {
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
      },
    ],
    term2: [
      {
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
      },
    ],
    term3: [
      {
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
      },
    ],
  });

  useEffect(() => {
    axios
      .get(
        // `https://cmu-acad-backend-production.up.https.app/calendar/studyweek/${calendarId.id}`
        `http://localhost:4000/calendar/studyweek/${calendarId.id}`
      )
      .then((res) => {
        console.log(res.data);
        setStudyCount(res.data);
      });
  }, [savedEvents]);

  let event_render = savedEvents.map((props, idx) => {
    return (
      <EventCard
        key={idx}
        name={props.event_name}
        start_date={props.start_date}
        // end_date={props.end_date}
        color={props.color}
      />
    );
  });

  return (
    <Container>
      <Section>
        <div className="header">
          <ImportContactsRoundedIcon />
          <p>สรุปวันเรียน</p>
        </div>
        <Count>
          <table>
            <tr>
              <th>ภาคเรียน</th>
              <th>จ</th>
              <th>อ</th>
              <th>พ</th>
              <th>พฤ</th>
              <th>ศ</th>
            </tr>
            <tr>
              <td>1</td>
              <td>{studyCount.term1[0].monday}</td>
              <td>{studyCount.term1[0].tuesday}</td>
              <td>{studyCount.term1[0].wednesday}</td>
              <td>{studyCount.term1[0].thursday}</td>
              <td>{studyCount.term1[0].friday}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{studyCount.term2[0].monday}</td>
              <td>{studyCount.term2[0].tuesday}</td>
              <td>{studyCount.term2[0].wednesday}</td>
              <td>{studyCount.term2[0].thursday}</td>
              <td>{studyCount.term2[0].friday}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>{studyCount.term3[0].monday}</td>
              <td>{studyCount.term3[0].tuesday}</td>
              <td>{studyCount.term3[0].wednesday}</td>
              <td>{studyCount.term3[0].thursday}</td>
              <td>{studyCount.term3[0].friday}</td>
            </tr>
          </table>
        </Count>
      </Section>
      <Section>
        <div className="header">
          <CalendarMonthIcon />
          <p>กำหนดการสำคัญ</p>
        </div>
        <Content>{event_render}</Content>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  margin-top: 54px;
  display: flex;
  top: 79;
  right: 0;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 14px;
  padding-bottom: 48px;
  gap: 24px;
  width: 253px;
  height: 80%;
  top: 79px;
  background: #ffffff;
  /* Stroke */
  border-left: 1px solid #e7e7e7;
  border-top: 1px solid #e7e7e7;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    font-weight: 600;
    color: var(--primary-color);
    background-color: white;
    width: 100%;
    padding: 20px 0;
    p {
      margin-left: 8px;
    }
  }
`;

const Content = styled.div`
  height: 52vh;
  overflow-y: scroll;
`;

const Count = styled.div`
  height: 12vh;
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
    padding: 2px 4px;
  }
`;
export default SideBar;
