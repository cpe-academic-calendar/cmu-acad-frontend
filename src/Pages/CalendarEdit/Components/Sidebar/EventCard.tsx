import styled from "styled-components";
import dayjs from "dayjs";

interface EventProps {
    name: string;
    date: dayjs.Dayjs;
    type: string;
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
    let event_type = type;
    let render_rectangle = null;
    switch(event_type){
        case 'กิจกรรม' :
            render_rectangle = <Event />
            break;
        case 'วันหยุด' :
            render_rectangle = <Holiday />
            break;
        case 'วันสอบ' :
            render_rectangle = <Exam />
            break;
    }
    return ( 
    <Container>
        {render_rectangle}
        <div className="content">
            <h1>{name}</h1>
            {/* <p>date</p> */}

            <p>{dayjs(date).format('DD MMMM BBBB')}</p>
        </div>
    </Container> );
}

const Container = styled.div`
    display: flex;
    h1{
        font-weight: 600;
    }
    .content{
        max-width: max-content;
    }
`

const Event = styled.div`
    height: 100%;
    width: 5%;
    background-color:  var(--default-event-color);
    margin-right: 8px;
`
const Holiday = styled.div`
    height: 100%;
    width: 5%;
    background-color: var(--default-holiday-color);
    margin-right: 8px;
`
const Exam = styled.div`
    height: 100%;
    width: 5%;
    background-color: var(--default-exam-color);
    margin-right: 8px;
`
 
export default EventCard;