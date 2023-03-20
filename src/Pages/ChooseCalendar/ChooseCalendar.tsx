import React, { useContext, useEffect, useState } from "react";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import NavBar from "./Components/NavBar/NavBar";
import ActiveList from "./Components/ActiveList";
import ArchiveList from "./Components/ArchiveList";
import styled from "styled-components";
import AddCalendar from "./Components/AddCalendar";
import axios from 'axios'
import { CalendarPath } from "./Components/path";
import GlobalContext from "../../GlobalContext/GlobalContext";
import ExportPopUp from "../../Components/ExportPopUp";
import LoadingModal from "../Loading/LoadingModal";
import ChooseCalendarContext from "./Components/Context/ChooseCalendarContext";

interface calendarProps{
    id: number,
    name: string;
    start_semester: Date;
    year: number;
    create_at: Date;
    update_at: Date;
    selected: boolean;
    handleCheckClick: (id: number) => void;
    handleUnCheckClick: (selectedCard: number) => void;
  }


function ChooseCalendar(props: any) {
    const { calendarSort, setCalendarSort, exportModal, loading, setLoading } = useContext(GlobalContext);
    const { multipleSelect } = useContext(ChooseCalendarContext)
    const [iconMenu, setIconMenu] = useState<Boolean>(false);
    const [token, setToken] = useState('')
    const [newCalendar, setNewCalendar] = useState<Boolean>(false);

    useEffect(() => {
        if(localStorage.getItem("token")===null){
          window.location.href = "https://cmu-acad.netlify.app/"
      }
      }, [])

    useEffect(() => {
        console.log(localStorage.getItem('token'))
    }, []) 

    const newCalendarHandle = () => {
        setNewCalendar((prev) => !prev);
    };

    const onDeleteClickhandle = () => {
        multipleSelect.forEach(async (item) => {
            // await axios.delete(`https://cmu-acad-backend-production.up.https.app/calendar/delete/${item}`)
            await axios.delete(`http://localhost:4000/calendar/delete/${item}`)
            .then((response: any) => {
                setLoading(false)
                window.location.reload();
            })
        })
        alert("delete calendar success")
    }

    const onArchiveClickhandle = () => {
        multipleSelect.map(async (item) => {
            await axios.put(`${CalendarPath.archiveCalendar}${item}`,
            {
                    calendar_status: "Archive"
            })
                .then((response) => {
                    window.location.reload();
                })
        })
        alert("archive calendar success")
    }

    let render_list = null;
    let sort_button = null;
    let new_calendar = null;

    switch (calendarSort) {
        case "Active":
            render_list = <ActiveList />
            sort_button =
                <CalendarSortButton>
                    <div className="select" onClick={() => setCalendarSort("Active")}>
                        <p>ปฏิทินทั้งหมด</p>
                    </div>
                    <div className="items" onClick={() => setCalendarSort("Archive")}>
                        <p>ที่จัดเก็บ</p>
                    </div>
                </CalendarSortButton>
            break;
        case "Archive":
            render_list = <ArchiveList />
            sort_button = <>
                <CalendarSortButton>
                    <div className="items" onClick={() => setCalendarSort("Active")}>
                        <p>ปฏิทินทั้งหมด</p>
                    </div>
                    <div className="select" onClick={() => setCalendarSort("Archive")}>
                        <p>ที่จัดเก็บ</p>
                        <div className="selected" />
                    </div>
                </CalendarSortButton>
            </>
            break;
    }
    return (
        <div>
            {
                loading? <LoadingModal />: null
            }
            {
                exportModal?
                    <ExportPopUp />:
                null
            }
            <NavBar />
            <Container>
                {sort_button}
                <TableCardHeader>
                    <InsertDriveFileOutlinedIcon color="action" />
                    <p>ชื่อ</p>
                    <p>วันที่สร้าง</p>
                    <p>แก้ไขล่าสุด</p>
                    <div className="end">
                        {
                            multipleSelect.length==0?
                            null
                                :
                            <div className=''>
                                <div onClick={onDeleteClickhandle}>
                                    <DeleteIcon />
                                </div>
                                <div onClick={onArchiveClickhandle}>
                                    <FolderIcon />                                  
                                </div>
                            </div>
                        }
                    </div>
                </TableCardHeader>
                {render_list}
            </Container>
            {
                newCalendar ?
                    new_calendar = <AddCalendar handleClosePopup={newCalendarHandle} />
                    :
                    new_calendar = null
            }
            <NewCalendarButton onClick={() => newCalendarHandle()}>+</NewCalendarButton>
        </div>
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
    padding-right: 26vh;
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
