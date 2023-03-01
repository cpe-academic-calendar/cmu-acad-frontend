import styled from 'styled-components';
import React, { useContext, useEffect, useState } from 'react';

//Other files
import { getMonth } from './Components/util'
import CalendarHeader from './Components/CalendarHeader';
import SideBar from './Components/Sidebar/Sidebar';
import MonthCalendar from './Components/MonthCalendar';
import EventModal from './Components/EventModal';
import GlobalContext from '../../GlobalContext/GlobalContext';
import EditCalendarContext from './Components/Context/EditCalendarContext';
import YearCalendar from './Components/YearCalendar';
import axios from 'axios'
<<<<<<< HEAD
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import ExportPopUp from '../../Components/ExportPopUp';
=======
import { useLocation, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
>>>>>>> fix: ChooseCalender re-direct and CalendarEdit
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
    const [tempMonth, setTemptMonth] = React.useState(getMonth(0));
    const [fileOption, setFileOption] = React.useState<boolean>(false);
<<<<<<< HEAD
    const { daySelected, showAddEventModal, currentView, setCurrentView, monthIndex, dispatchCalEvents } = React.useContext(EditCalendarContext);
    const { exportModal, setExportModal } = React.useContext(GlobalContext)
    const [data, setData] = React.useState<any[]>([])
    const calendarId = useParams()
    
        React.useEffect(() => {
            document.addEventListener("click", handleClickOutSide, true)
        }, [])
    
        const refOne = React.useRef<HTMLDivElement | null>(null)
        const handleClickOutSide = (e: any) => {
            if (refOne.current != null) {
                if (!refOne.current?.contains(e.target)) {
                    setFileOption(false)
                }
            }
        }
=======
    const { daySelected, showAddEventModal, currentView, setCurrentView, monthIndex, dispatchCalEvents } = React.useContext(GlobalContext);
<<<<<<< HEAD
>>>>>>> feat: autoGenerate added

=======
    const [data, setData] = React.useState([])
    const calendarId = useParams()
>>>>>>> fix: ChooseCalender re-direct and CalendarEdit
    // console.log(dayjs(res.data.start_semester).month())
    useEffect(() => {
        axios.get(`http://localhost:4000/calendar/${calendarId.id}`).then(
            (res) => {
                    setCalendarName(res.data.name)
                    setData(res.data)
<<<<<<< HEAD
                    setTemptMonth(getMonth(dayjs(res.data.start_semester).month()-5))
                    // setTemptMonth(getMonth(res.data.start_semester))
=======
                    setTemptMonth(getMonth(dayjs(res.data.start_semester).month()))
>>>>>>> fix: ChooseCalender re-direct and CalendarEdit
                    // console.log(dayjs(res.data.start_semester).month())
                }
        )
    },[])

    const onFileClickHandle = () => {
        setFileOption(true);
    }
    const closedFileModalHandle = () => {
        setFileOption(false);
    }

    const handleClickBack = () => {
        localStorage.removeItem('savedEvents')
    }

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
            render_view = <div>
                <YearCalendar />
            </div>
    }

    return ( 
        <React.Fragment>
            {exportModal && <ExportPopUp />}
            <Col>
            {showAddEventModal && <EventModal />}
                <CalendarHeader onFileClickHandle={onFileClickHandle} name={calendarName} />
            {fileOption?
            <div ref={refOne}>
                <FileOption>
                    <div className='item' onClick={() => setExportModal(true)}>
                        นำออกเป็นไฟล์อื่น
                    </div>
                    <div className='item' onClick={() => handleClickBack()} >
                        <a href="/">
                        กลับหน้าหลัก
                        </a>
                    </div>
                </FileOption>
            </div>
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
    z-index: 998;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    color: #111;
    margin-top: 48px;
    .item{
        padding: 20px 30px;
        &:hover{
            cursor: pointer;
            background-color: var(--hover);
        }
    }
`

export default CalendarEdit;