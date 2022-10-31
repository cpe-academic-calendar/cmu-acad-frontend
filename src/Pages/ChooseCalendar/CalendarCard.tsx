import React from 'react';
import { Card, End, Start } from './CalendarCard.styled'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

interface Props {
    name : string;
    year : string;
    create_date: string;
    recently_edited : string;
}

const CalendarCard: React.FC<Props> = ( data:Props ) => {
    const [selectCalendar, setSelectCalendar] = useState<Boolean>(false);
    const selectCalendarClicked = ( state:Boolean ) => {
        setSelectCalendar(state);
    }

    return(
        <Card>
            <Start>
                {
                    selectCalendar?
                    <div className='check' onClick={() => selectCalendarClicked(!selectCalendar)}>
                        <CheckCircleIcon />
                    </div>
                    :
                    <div className='check' onClick={() => selectCalendarClicked(!selectCalendar)}>
                        <RadioButtonUncheckedOutlinedIcon />
                    </div>
                }
                <CalendarTodayOutlinedIcon className='icon' />
                <div className="content">
                    <h4>{data.name}</h4>
                    <p>{data.year}</p>
                </div>
            </Start>
            <End>
                    <h4>{data.create_date}</h4>
                    <h4>{data.recently_edited}</h4>
                    <MoreVertIcon />
            </End>
        </Card>
    )
}

export default CalendarCard;