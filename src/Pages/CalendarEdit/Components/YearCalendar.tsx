import styled from "styled-components";
import moment from "moment";
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
    <YearView>
      <CalendarContainer>
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
      </CalendarContainer>
    </YearView>
  );
}

export default function YearCalendar() {
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

const YearView = styled.div`
   margin-top: 86px;
   width: 100%;
`

const DraftContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
margin: 149px 50px 14px 250px;
grid-gap: 100px 10px;
`;

const CalendarContainer = styled.div`
  .calendar .day{
    position: relative;
    width: calc(70% / 7);
    height: 44px;
    display: inline-block;
    background-color: white;
    padding: 0;
    margin-bottom: 10px;
    box-sizing: border-box;
    z-index: 1;
    text-align: center;
  }

.week {
    display: inline-block;
    width: calc(70% / 7);
    height: 30px;
    text-align: center;
    line-height: 30px;
}
`;

const Calendar = styled.div``;

const CalendarMonth = styled.div``;

const LabelHeader = styled.div`
  width: (100%/7);
`;

const MonthComponent = styled.div`
  color: #F57F17;
`;
