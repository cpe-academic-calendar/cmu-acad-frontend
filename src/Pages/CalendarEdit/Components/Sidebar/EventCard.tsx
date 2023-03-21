import styled from "styled-components";
import dayjs from "dayjs";
import changeToThai from "../../../../Functions/changeToThai";

interface EventProps {
  name: string;
  start_date: dayjs.Dayjs;
  end_date: dayjs.Dayjs;
  color: string;
}

interface ColorProps {
  color: string;
}

var buddhistEra = require("dayjs/plugin/buddhistEra");
dayjs.extend(buddhistEra);

const EventCard: React.FC<EventProps> = ({ name, start_date, end_date, color }) => {

  console.log(start_date)

  return (
    <Container>
      <Event color={color} />
      <div className="content">
        <h1>{name}</h1>
        <DateThai>
          {
            (String(start_date) === String(end_date))?
            <>
          <p>{String(start_date).substr(0,1)}</p>{" "}
          <p>{changeToThai(String(start_date).substr(5,2))}</p>{" "}
          <p>{dayjs(start_date).format("BBBB")}</p>
            </>:
            <>
          <p>{String(start_date).substr(0,1)}</p>{" "}
          <p>{changeToThai(String(start_date).substr(5,2))}</p>{" "}
          <p>{dayjs(start_date).format("BBBB")}</p>
          <p>-</p>
          <p>{dayjs(end_date).format("DD")}</p>{" "}
          <p>{changeToThai(String(start_date).substr(5,2))}</p>{" "}
          <p>{dayjs(end_date).format("BBBB")}</p>
            </>
            
          }
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
    width: 100%;
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
  flex-wrap: wrap;
  width: 100%;
  p{
    margin-right: 3px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export default EventCard;
