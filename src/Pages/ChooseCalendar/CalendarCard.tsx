import React from 'react';
import { Container, End, Start } from './CalendarCard.styled'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';

interface Props {
    name : string;
    year : string;
    create_date: string;
    recently_edited : string;
}

const CalendarCard: React.FC<Props> = ( data:Props ) => {
    return(
        <Container>
            <Start>
                <RadioButtonUncheckedOutlinedIcon />
                <CalendarTodayOutlinedIcon />
                <span className="content">
                    <h4>{data.name}</h4>
                    <p>{data.year}</p>
                </span>
            </Start>
            <End>
                    <h4>{data.create_date}</h4>
                    <h4>{data.recently_edited}</h4>
                    <DragIndicatorOutlinedIcon />
            </End>
        </Container>
    )
}

export default CalendarCard;
