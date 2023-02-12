import { getMonth } from '../util'
import styled from 'styled-components';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';


const CalendarHeader:React.FC = () => {
    return (
    <Nav>
        <Items>
            <div className='files'>
                <InsertDriveFileOutlinedIcon fontSize='large'/>
                <KeyboardArrowDownOutlinedIcon fontSize='medium' />
            </div>
            <div className='static'>
                <CalendarTodayOutlinedIcon fontSize='large' />
                <p>ปฏิทิน</p>
            </div>
            <select id="display">
                <option value="months">เดือน</option>
                <option value="year">ปี</option>
            </select>
        </Items>
        <p>Calendar Name</p>
        <p>1/65 มิถุนายน 2565</p>
    </Nav>
    );
}

const Nav = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
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
export default CalendarHeader;