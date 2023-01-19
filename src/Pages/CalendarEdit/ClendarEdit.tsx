import styled from 'styled-components';
import React, { useState } from 'react';

//Other files
import { getMonth } from './util'
import CalendarHeader from './Components/CalendarHeader';
import Sidebar from './Components/Sidebar';
import MonthCalendar from './Components/MonthCalendar';

const ClendarEdit:React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    console.table(getMonth());

    return ( 
    <React.Fragment>
        <Col>
            <CalendarHeader />
            <Row>
                <Sidebar />
                <MonthCalendar month={currentMonth} />
            </Row>
        </Col>
    </React.Fragment> 
    );
}

const Col = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`
export default ClendarEdit;