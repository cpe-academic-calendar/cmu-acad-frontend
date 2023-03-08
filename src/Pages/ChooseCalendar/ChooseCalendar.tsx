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
import calendarProps from "./Components/calendarProps";
import GlobalContext from "../../GlobalContext/GlobalContext";
import ExportPopUp from "../../Components/ExportPopUp";
import LoadingModal from "../Loading/LoadingModal";
import ChooseCalendarContext from "./Components/Context/ChooseCalendarContext";





function ChooseCalendar(props: any) {
    const { calendarSort, setCalendarSort, exportModal, loading, setLoading } = useContext(GlobalContext);
    const { multipleSelect } = useContext(ChooseCalendarContext)
    const [iconMenu, setIconMenu] = useState<Boolean>(false);
    const [newCalendar, setNewCalendar] = useState<Boolean>(false);
    const [item, setItem] = useState<calendarProps[]>([]);

    console.log(setItem)

    useEffect(() => {
        const fetchData = async () => {
            axios
                .get(CalendarPath.find)
                .then(
                    response =>
                        setItem(response.data)
                )
        };
        fetchData()
    }, [])

    const newCalendarHandle = () => {
        setNewCalendar((prev) => !prev);
    };

    const onClickhandle = async () => {
        await axios.delete(`${CalendarPath.delete}/${props.item.id}`)
            .then((response: any) => {
                console.log(response.data)
                setLoading(false)
                alert("delete calendar success")
                window.location.reload();
            })
    }

    let render_list = null;
    let sort_button = null;
    let new_calendar = null;

    switch (calendarSort) {
        case "Active":
            render_list = <ActiveList data={item} />
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
                    <div className="end">
                        <p>วันที่สร้าง</p>
                        <p>แก้ไขล่าสุด</p>
                        {
                            multipleSelect.length==0?
                            null
                                :
                            <div className=''>
                                <div onClick={onClickhandle}>
                                    <DeleteIcon />
                                </div>
                                <div onClick={onClickhandle}>
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

const ProfileOption = styled.div`
    position: fixed;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    z-index: 998;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    color: #111;
    margin-top: 48px;
    .item{
        padding: 20px 30px;
        &:hover{
            cursor: pointer;
            background-color: var(--hover);
        }
    }
`

export default ChooseCalendar;
