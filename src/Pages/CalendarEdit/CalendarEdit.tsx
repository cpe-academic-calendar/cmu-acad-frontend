import styled from 'styled-components';
import React, { useContext, useEffect, useState } from 'react';

//Other files
import { getMonth } from './Components/util'
import CalendarHeader from './Components/CalendarHeader';
import SideBar from './Components/Sidebar/Sidebar';
import MonthCalendar from './Components/MonthCalendar';
import EventModal from './Components/EventModal';
import GlobalContext from './Components/Context/GlobalContext';
import YearCalendar from './Components/YearCalendar';
import axios from 'axios'
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

interface dataProps {
    data: {
        name: string;
        start_semester: Date;
        year: number;
        calendar_status: string;
        create_at: Date;
        update_at: Date;
        delete_at: Date;
    }
}

const CalendarEdit = () => {

    const [calendarName, setCalendarName] = React.useState('');
    const [tempMonth, setTemptMonth] = React.useState(getMonth());
    const [fileOption, setFileOption] = React.useState<boolean>(false);
    const { daySelected, showAddEventModal, currentView, setCurrentView, monthIndex, dispatchCalEvents } = React.useContext(GlobalContext);
    const [data, setData] = React.useState<any[]>([])
    const calendarId = useParams()
    useEffect(() => {
        axios.get(`http://localhost:4000/calendar/${calendarId.state}`).then(
            (res) => {
                    setCalendarName(res.data.name)
                    console.log(res.data)
                    setTemptMonth(getMonth(dayjs(res.data.start_semester).month()))
                    // console.log(dayjs(res.data.start_semester).month())
                    console.log(res.data.start_semester)
                }
        )
    },[])


    let render_view = null;

    switch (currentView){
        case 'month':
            render_view = 
        <Row>
            <div className='calendar'>
                <MonthCalendar month={tempMonth} events={data} />
            </div>
            <div className='sidebar'>
                <SideBar />
            </div>
        </Row>
        break;
        case 'year':
            render_view = <>
                <YearCalendar />
            </>
    }

    const onFileClickHandle = () => {
        setFileOption(true);
    }

    return ( 
        <React.Fragment>
            <Col>
            {showAddEventModal && <EventModal />}
                <CalendarHeader onFileClickHandle={onFileClickHandle} name={calendarName} />
            {fileOption?
                <FileOption>
                    <div className='item'>
                        นำออกเป็นไฟล์อื่น
                    </div>
                    <div className='item'>
                        <a href="/">
                        กลับหน้าหลัก
                        </a>
                    </div>
                </FileOption>
                :
                null
            }
                {render_view}
            </Col>
        </React.Fragment> 
    );
}

const Col = styled.div`
    height: 100%;
    width: 100%;
`

const Row = styled.div`
    display: grid;
    grid-template-columns: 7fr auto;
    .calendar{
        margin-right: 253px;
    }
    .sidebar{
        z-index: -1;
    }
`

const FileOption = styled.div`
    position: fixed;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    z-index: 999;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    color: #111;
    .item{
        padding: 10px 30px;
    }
`

export default CalendarEdit;