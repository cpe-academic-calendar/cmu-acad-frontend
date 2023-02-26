import React, { useState, useContext } from "react";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import NavBar from "../../Components/NavBar";
import ActiveList from "./Components/ActiveList";
import ArchiveList from "./Components/ArchiveList";
import styled from "styled-components";
import AddCalendar from "./Components/AddCalendar";

function ChooseCalendar() {
    const [calendarSort, setCalendarSort] = useState<String>('Active')
    const [iconMenu, setIconMenu] = useState<Boolean>(false);
    const [newCalendar, setNewCalendar] = useState<Boolean>(false);

    const setSort = (state: String) => {
        setCalendarSort(state);
    }

    const newCalendarHandle = () => {
        setNewCalendar((prev)=>!prev);
    };

    let render_list = null;
    let sort_button = null;
    let new_calendar = null;

    switch (calendarSort){
        case "Active" :
            render_list = <ActiveList />
            sort_button =             
            <CalendarSortButton>
                <div className="select" onClick={() => setSort("Active")}>
                    <p>ปฏิทินทั้งหมด</p>
                </div>
                <div className="items" onClick={() => setSort("Archive")}>
                    <p>ที่จัดเก็บ</p>
                </div>
            </CalendarSortButton>
            break;
        case "Archive" :
            render_list = <ArchiveList />
            sort_button = <>
            <CalendarSortButton>
                <div className="items" onClick={() => setSort("Active")}>
                    <p>ปฏิทินทั้งหมด</p>
                </div>
                <div className="select" onClick={() => setSort("Archive")}>
                    <p>ที่จัดเก็บ</p>
                    <div className="selected" />
                </div>
            </CalendarSortButton>
        </>
            break;
    }
    return ( 
        <>
        <NavBar />
        <Container>
        {sort_button}
            <TableCardHeader>
                    <InsertDriveFileOutlinedIcon color="action" />
                        <p>ชื่อ</p>
                    <div className="end">
                        <p>วันที่สร้าง</p>
                        <p>แก้ไขล่าสุด</p>
                    {
                        iconMenu?
                        <div className='active-icon'>
                                <DeleteIcon />
                                <FolderIcon />
                        </div>
                        :
                        <div className='disable-icon'>
                                <DeleteIcon />
                                <FolderIcon />
                        </div>
                    }
                    </div>
            </TableCardHeader>
        {render_list}
        </Container>
        {
            newCalendar?
            new_calendar = <AddCalendar handleClosePopup={newCalendarHandle} />
            :
            new_calendar = null
        }
        
        <NewCalendarButton onClick={()=>newCalendarHandle()}>+</NewCalendarButton>  
        </>
     );
}

const NewCalendarButton = styled.button`
    position: fixed;
    bottom: 10vh;
    right: 15vh;
    background-color: var(--primary-color);
    color: var(--background);
    font-size: xx-large;
    border: none;
    height: 10vh;
    width: 10vh;
    border-radius: 50%;
    z-index: 2;
`

const Container = styled.div`
    margin-top: 3.5vh;
    margin-left: 15vh;
    margin-right: 15vh;
    align-items: center;
    flex-direction: column;
`

const TableCardHeader = styled.div`
    padding-left: 16vh;
    padding-right: 16vh;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    p {
        font-size: small;
        color: #7e7e7e;
    }
    .start{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        p{
            margin-right: 12vh;
        }
    }
    .end{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        p{
            margin-right: 10vh;
        }
    }
    .active-icon{
        margin-left: 2vh;
    }
    .disable-icon{
        margin-left: 2vh;
        color: var(--disable-color);
    }
`

const CalendarSortButton = styled.div`
    cursor: pointer;
    display: flex;
    border-radius:8px;
    justify-content: start;
    background-color: #F3F3F3;
    width: fit-content;
    margin-bottom: 2rem;
    .items{
        margin: 12px;
        display: flex;
        flex-direction: column;
    }
    .select{
        margin: 12px;
        p{
            color: var(--primary-color);
        }
    }
`


export default ChooseCalendar;
