import styled from "@emotion/styled";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventCard from "./EventCard";
import event_mockup from "../event_mockup.json"
import GlobalContext from "../Context/EditCalendarContext";
import React, {useContext} from "react";

const SideBar:React.FC = () => {
    const { savedEvents } = useContext(GlobalContext);

    let event_render = savedEvents.map((props, idx) => {
        return (
            <EventCard key={idx} name={props.event_name} date={props.start_date} type={props.type} />
        )
    })

    return ( <div>
        <Container>
            <Row>
                <div className="header">
                    <CalendarMonthIcon />
                    กำหนดการสำคัญ
                </div>
            </Row>
            {event_render}
        </Container>
    </div> );
}

const Container = styled.div`
    margin-top: 54px;
    position: fixed;
    display: flex;
    top: 79;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    padding: 22px 14px;
    gap: 24px;
    width: 253px;
    height: 938px;
    top: 79px;

    background: #FFFFFF;
    /* Stroke */
    border-left: 1px solid #E7E7E7;
`

const Row = styled.div`
    display: flex;
    .header{
        font-weight: 600;
        color: var(--primary-color);
    }
`

export default SideBar;