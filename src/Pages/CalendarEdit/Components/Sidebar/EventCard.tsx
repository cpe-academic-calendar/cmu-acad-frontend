import styled from "styled-components";
import dayjs from "dayjs";
import changeToThai from "../../../../Functions/changeToThai";

interface EventProps {
  name: string;
  date: dayjs.Dayjs;
  type: string;
}

interface ColorProps {
  color: string;
}

var buddhistEra = require("dayjs/plugin/buddhistEra");
dayjs.extend(buddhistEra);

const EventCard: React.FC<EventProps> = ({ name, date, type }) => {
  // function truncateString(str: string) {
  //   if(30>str.length){
  //     return str
  //   }
  //     return str.slice(0, 25) + "..."
  // }

  return (
    <Container>
      <Event color={type} />
      <div className="content">
        <h1>{name}</h1>
        <DateThai>
          <p>{dayjs(date).format("DD")}</p>{" "}
          <p>{changeToThai(dayjs(date).format("MMMM"))}</p>{" "}
          <p>{dayjs(date).format("BBBB")}</p>
        </DateThai>
      </div>
    </Container>
  );
};

const handleColorType = (color: string) => {
  switch (color) {
    case "กิจกรรม":
      return "var(--default-event-color)";
    case "วันหยุด":
      return "var(--default-holiday-color)";
    case "วันสอบ":
      return "var(--default-exam-color)";
    case "วันเปิดภาคเรียน":
      return "var(--primary-color)";
    case "วันปิดภาคเรียน":
      return "var(--primary-color)";
  }
};

const Container = styled.div`
  display: flex;
  h1 {
    font-weight: 600;
  }
  .content {
    width: 80%;
  }
  margin-bottom: 16px;
`;

const Event = styled.div<ColorProps>`
  width: 5px;
  background-color: ${({ color }) => handleColorType(color)};
  margin-right: 8px;
`;

const DateThai = styled.div`
  display: flex;
  p{
    margin-right: 3px;
    color: var(--dark-brown);
  }
`;

export default EventCard;
