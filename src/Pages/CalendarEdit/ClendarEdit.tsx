import styled from 'styled-components';
import React, { useState } from 'react';

//Other files
import { getMonth } from './util'
import CalendarHeader from './Components/CalendarHeader';
import SideBar from './Components/Sidebar/Sidebar';
import MonthCalendar from './Components/MonthCalendar';

const ClendarEdit:React.FC = () => {
    const tempMonth = getMonth();

    return ( 
    <React.Fragment>
        <Col>
            <CalendarHeader />
            <Row>
                <div className='calendar'>
                    <MonthCalendar month={tempMonth} />
                </div>
                <div className='sidebar'>
                    <SideBar />
                </div>
            </Row>
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
`
export default ClendarEdit;