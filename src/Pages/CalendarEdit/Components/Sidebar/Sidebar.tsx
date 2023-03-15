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

    return ( 
    <Container>

        <Section>
            <div className="header">
                    <CalendarMonthIcon />
                    กำหนดการสำคัญ
            </div>
            <Content>
                {event_render}
            </Content>
        </Section>
        <Section>
            <div className="header">
                    <CalendarMonthIcon />
                    กำหนดการสำคัญ
            </div>
            <Content>
                {event_render}
            </Content>
        </Section>
    </Container> );
}

const Container = styled.div`
    position: fixed;
    margin-top: 54px;
    display: flex;
    top: 79;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    padding-left:14px;
    padding-bottom: 48px;
    gap: 24px;
    width: 253px;
    height: 80%;
    top: 79px;
    background: #FFFFFF;
    /* Stroke */
    border-left: 1px solid #E7E7E7;
    border-top: 1px solid #E7E7E7;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    .header{
        font-weight: 600;
        color: var(--primary-color);
        background-color: white;
        width: 100%;
        padding: 20px 0;
    }
`

const Content = styled.div`
    height: 30vh;
    overflow-y: scroll;
`
export default SideBar;