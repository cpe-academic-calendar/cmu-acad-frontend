import styled from "styled-components";
import dayjs from "dayjs";
import changeToThai from "../../../../Functions/changeToThai";

interface EventProps {
  name: string;
  date: dayjs.Dayjs;
  color: string;
}

interface ColorProps {
  color: string;
}

var buddhistEra = require("dayjs/plugin/buddhistEra");
dayjs.extend(buddhistEra);

const EventCard: React.FC<EventProps> = ({ name, date, color }) => {

  return (
    <Container>
      <Event color={color} />
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
  background-color: ${(prpos) => (prpos.color)};
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
