import React, { useState } from "react";
<<<<<<< HEAD
// import { NewCalendarButton, TableCardHeader, Container, CalendarSortButton } from "./ChooseCalendar.styled";
=======
import { NewCalendarButton, TableCardHeader, Container, CalendarSortButton } from "./ChooseCalendar.styled";
>>>>>>> feat: ChooseCalendar
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import NavBar from "../../Components/NavBar";
<<<<<<< HEAD
<<<<<<< HEAD
import CalendarActiveList from "./CalendarActiveList";
import CalendarArchiveList from "./CalendarArchiveList";
=======
>>>>>>> feat: ChooseCalendar
<<<<<<< HEAD
import cards_dummy from "../../cards_dummy.json";
import CalendarCard from "./CalendarCard";
=======
>>>>>>> feat: ExportPopUp and Font added
import styled from "styled-components";

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

<<<<<<< HEAD
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
    }
    .select{
        margin: 12px;
        p{
            color: var(--primary-color);
        }
    }
`
=======
function ChooseCalendar() {
  return (
    <>
      <NavBar />
      {cards_dummy.map((item: Data) => (
        <div>
          <CalendarCard
            name={item.name}
            year={item.year}
            create_date={item.create_date}
            recently_edited={item.recently_edited}
          />
        </div>
      ))}
      {/* {card_render} */}
      <NewCalendar>+</NewCalendar>
    </>
  );
=======
=======
>>>>>>> refactor: ChooseCaleandr function
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
>>>>>>> feat: ChooseCalendar

export default ChooseCalendar;
