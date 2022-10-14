import styled from "styled-components";
import {
  add,
  endOfMonth,
  endOfWeek,
  isBefore,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import sub from "date-fns/sub";
import { unstable_useForkRef } from "@mui/utils";
import moment from "moment";
import "./styles.css";
import { LabelHeader, MonthComponent } from "./Draft.styled";
import { CalendarContainer } from "react-datepicker";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

function calendarYear(props: any) {
  const monthname = props;
  const month = [];
  for (let i = 0; i < 12; i++) {
    month.push(createCalendar(monthname[i], i));
  }
  return (
    <div>
      <Container>{month.map((month) => month)}</Container>
    </div>
  );
}
function createCalendar(props: any, monthnum: any) {
  const calendar = [];
  const month = props;
  const num = monthnum;
  const value = moment().set("month", num);
  const first = value.clone().startOf("month").startOf("week");
  const subday = first.clone().subtract(1, "day");
  for (let i = 0; i < 5; i++) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => subday.add(1, "day").clone())
    );
  }
  const label = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];
  return (
    <div>
      <MonthComponent>{month}</MonthComponent>
      <LabelHeader>
        {label.map((day, index) => (
          <span key={index} className="week">
            {day}
          </span>
        ))}
      </LabelHeader>
      <div className="calendar">
        {calendar.map((week) => (
          <div>
            {week.map((day) => (
              <div className="day">
                <button className="week" onClick={ day =>
                  alert(`${day}`)
                }>{day.format("D").toString()}</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Draft() {
  const months = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  return <div>{calendarYear(months)}</div>;
}
