import React from 'react';
// import { Card, End, Start } from './CalendarCard.styled'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import styled from "styled-components";

interface Props {
    name : string;
    year : string;
    create_date: string;
    recently_edited : string;
}

const CalendarCard: React.FC<Props> = ( data:Props ) => {
    const [selectCalendar, setSelectCalendar] = useState<Boolean>(false);
    const [duplicateOverlay, setDuplicateOverlay] = useState<Boolean>(false)
    const selectCalendarClicked = ( state:Boolean ) => {
        setSelectCalendar(state);
    };
    const popDuplicateOverlay = (state : Boolean) => {
        setDuplicateOverlay(state);
    };
    let render_option = null;
    duplicateOverlay? (
        render_option = <DraftOption>
            <p>ทำซ้ำ</p>
            <p>นำออก</p>
            <p>จัดเก็บ</p>
            <p className='delete'>ลบ</p>
        </DraftOption>
    ):(render_option = null)

    return(
        <div>
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
                        <MoreVertIcon onClick={() => popDuplicateOverlay(!duplicateOverlay)} />
                </End>
            </Card>
            {render_option}
        </div>

    )
}

const Card = styled.div`
    padding-left: 16vh;
    padding-right: 16vh;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    :hover{
        background-color: var(--hover);
    }
`

const Start = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    .content{
        flex-direction: column;
        padding: 1rem;
        h4{
            margin-bottom: 10px;
            font-weight: 600;
        }
        p{
            color: #7e7e7e;
        }
    }
    .icon{
        margin-right: 2vh;
    }
    .check{
        margin-right: 2vh;
    }
`

const End = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    
    .content{
        flex-direction: column;
    }
    h4{
        margin-right: 12vh;
    }
`

const DraftOption = styled.div`
    align-items: center;
    background-color: var(--background);
    color: #000;
    font-size: medium;
    display: flex;
    flex-direction: column;
    padding: 4px;
    .delete{
        color: var(--error)
    }
`

export default CalendarCard;