import React, { useState } from "react";
import { NewCalendarButton, TableCardHeader, Container, CalendarSortButton } from "./ChooseCalendar.styled";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import NavBar from "../../Components/NavBar";
import CalendarActiveList from "./CalendarActiveList";
import CalendarArchiveList from "./CalendarArchiveList";

function ChooseCalendar() {
    const [calendarSort, setCalendarSort] = useState<String>('Active')
    const [iconMenu, setIconMenu] = useState<Boolean>(false)
    const setSort = (x: String) => {
        setCalendarSort(x);
    }

    let render_list = null;
    let sort_button = null;


    switch (calendarSort){
        case "Active" :
            render_list = <CalendarActiveList />
            sort_button = <>
                <CalendarSortButton>
                    <div className="select" onClick={() => setSort("Active")}>
                        <p>ปฏิทินทั้งหมด</p>
                    </div>
                    <div className="items" onClick={() => setSort("Archive")}>
                        <p>ที่จัดเก็บ</p>
                    </div>
                </CalendarSortButton>
            </>
            break;
        case "Archive" :
            render_list = <CalendarArchiveList />
            sort_button = <>
            <CalendarSortButton>
                <div className="items" onClick={() => setSort("Active")}>
                    <p>ปฏิทินทั้งหมด</p>
                </div>
                <div className="select" onClick={() => setSort("Archive")}>
                    <p>ที่จัดเก็บ</p>
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
        <NewCalendarButton>+</NewCalendarButton>  
        </>
     );
}

export default ChooseCalendar;
