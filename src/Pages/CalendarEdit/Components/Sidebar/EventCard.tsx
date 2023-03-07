import styled from "styled-components";
import dayjs from "dayjs";

interface EventProps {
    name: string;
    date: dayjs.Dayjs;
    type: string;
}

interface ColorProps {
    color: string;
  }

var buddhistEra = require('dayjs/plugin/buddhistEra')
// var updateLocale = require('dayjs/plugin/updateLocale')
dayjs.extend(buddhistEra)
// dayjs.extend(updateLocale)
// dayjs.updateLocale('en', {
// months: [
//     "January", "February", "March", "April", "May", "June", "July",
//     "August", "September", "October", "November", "December"
// ]
// })

const EventCard: React.FC<EventProps> = ({name, date, type}) => {
    return ( 
    <Container>
        <Event color={type}/>
        <div className="content">
            <h1>{name}</h1>
            {/* <p>date</p> */}

            <p>{dayjs(date).format('DD MMMM BBBB')}</p>
        </div>
    </Container> );
}

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
    width: 100%;
    h1{
        font-weight: 600;
    }
    .content{
        max-width: max-content;
    }
`

const Event = styled.div<ColorProps>`
    height: 100%;
    width: 5px;
    background-color: ${({ color }) => handleColorType(color)};
    margin-right: 8px;
`
 
export default EventCard;