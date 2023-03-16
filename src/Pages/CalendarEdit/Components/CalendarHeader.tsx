import styled from 'styled-components';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import React, { useContext, useState } from 'react';
import GlobalContext from '../../../GlobalContext/GlobalContext';
import LoadingCompoent from '../../Loading/LoadingComponent';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link, useParams, useNavigate, useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';

interface handleProps{
    onFileClickHandle: () => void;
    name: string;
    year: number;
}

const CalendarHeader:React.FC<handleProps> = ( {onFileClickHandle, name, year} ) => {

    const [view, setView] = useState('month');
    const { loading } = useContext(GlobalContext)
    const calendarId = useParams()
    const navigate = useNavigate()

    const onViewChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setView(e.target.value)
        navigate(`/calendar-edit/${calendarId.id}/${e.target.value}`)
    }

    return (
    <Nav>
        <Items>
            <div className='files' onClick={onFileClickHandle}>
                <InsertDriveFileOutlinedIcon fontSize='large'/>
                <KeyboardArrowDownOutlinedIcon fontSize='medium' />
            </div>
            <div className='static'>
                <CalendarTodayOutlinedIcon fontSize='large' />
                <p>ปฏิทิน</p>
            </div>
            <Items>
            <select id="display" value={calendarId.view} onChange={onViewChange}>
                <option value="month">เดือน</option>
                <option value="year">ปี</option>
            </select>
            </Items>
            <Loading>
                <LoadingCompoent />
            </Loading>
        </Items>
        <p>{name}</p>
        <RightSide>
        <p>
            ปีการศึกษา {year+543}
        </p>
        </RightSide>
    </Nav>
    );
}

const Nav = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    z-index: 2;
    justify-content: space-between;
    padding: 16px 16px;
    width: 100%;
    grid-auto-rows: 85px;
    background: #FFF;
    border-width: 0px 1px 1px 0px;
    border-style: solid;
    border-color: #E7E7E7;
    top: 0;
    overflow: hidden;
    p{
        font-size: 24px;
        font-weight: 600;
        color: var(--primary-color);
    }
`

const Items = styled.div`
    display: flex;
    max-width: 100%;
    color: var(--primary-color);
    align-items: center;
    .files{
        display: flex;
        align-items: center;
        margin-right: 16px;
    }
    .static{
        display: flex;
        align-items: center;
        margin-right: 16px;
        p{
            font-size: 16px;
            font-weight: 600;
            color: var(--primary-color);
        }
    }
    select{
        border-radius: 8px;
        border-color: var(--primary-color);
        border-width: 2px;
        border-style: solid;
        padding: 8px;
        font-weight: 700;
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

const Loading = styled.div`
    margin-left: 8px;
`

const RightSide = styled.div`
    display: flex;
    align-items: center;
    .icons{
        margin-right: 16px;
        color: var(--primary-color);
        .item{
            cursor: pointer;
        }
    }
`

export default CalendarHeader;