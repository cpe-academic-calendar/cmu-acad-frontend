import React, { createContext, useEffect, useRef } from 'react';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import styled from "styled-components";
import CalendarCardOption from './CalendarCardOption';
import DuplicatePopUp from './DuplicatePopUp';
import ExportPopUp from './ExportPopUp';
import { useCalendarCollect } from './CollectItem';

type Props = {
    id: number;
    name: string;
    year: number;
    create_date: string;
    recently_edited: string;
}

export const CalendarContext = createContext<number[]>([])

const CalendarCard: React.FC<Props> = (data) => {
    const [selectCalendar, setSelectCalendar] = useState<Boolean>(false);
    const [duplicateOverlay, setDuplicateOverlay] = useState<Boolean>(false)
    const [popupOverlay, setPopupOverlay] = useState<String>('')
    const { userId, setId } = useCalendarCollect()

    const selectCalendarClicked = (state: Boolean) => {
        setSelectCalendar(state);
    };
    
    let render_option = null;

    //choose which option
    let render_popup = null;
    const duplicateHandle = () => {
        console.log(popupOverlay)
        setPopupOverlay('duplicate');
    }
    const exportHandle = () => {
        setPopupOverlay('export');
    }
    const archiveHandle = () => {
        setPopupOverlay('archive');
    }
    const deleteHandle = () => {
        setPopupOverlay('delete');
    }

    switch(popupOverlay){
        case 'duplicate':
            console.log("duplicate")
            render_option = <DuplicatePopUp /> 
            break;
        case 'export':
            render_option = <ExportPopUp />
            break;
        case 'archive':
            render_option = null;
            break;
        case 'delete':
            render_option = null;
    }

    duplicateOverlay ? (
        render_option = <CalendarCardOption item={data} />
    ) : (render_option = null)

    const handleDropDownFocus = (state: Boolean) => {
        setDuplicateOverlay(!state)
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutSide, true)
    }, [])
    const handleCheck = async (id: number, e: boolean) => {
        if (e == true) {
            setId(id)
            selectCalendarClicked(!selectCalendar)
        } else {
            const index = userId.indexOf(id)
            userId.splice(index)
            const arr = [...userId]
            for(let i=0;i< arr.length;i++){
                setId(arr[i])
            }
            selectCalendarClicked(false)
            
        }
    }

    // console.log(userId)

    const refOne = useRef<HTMLDivElement | null>(null)

    const handleClickOutSide = (e: any) => {
        if (refOne.current != null) {
            if (!refOne.current?.contains(e.target)) {
                setDuplicateOverlay(false)
            }
        }
    }
    
    

    return (
        <CalendarContext.Provider value={userId}>
            <Card>
                <Start>
                    {
                        selectCalendar ?
                            <div className='check' onClick={() => handleCheck(data.id, false)}>
                                <CheckCircleIcon />
                            </div>
                            :
                            <div className='check' onClick={() => handleCheck(data.id, true)}>
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
                    <div className='block'>
                        <div className='static'>
                            <button>
                                <MoreVertIcon onClick={() => handleDropDownFocus(duplicateOverlay)} />
                            </button>
                        </div>
                        <div className='absolute mt-20' ref={refOne}>
                            {render_option}
                        </div>
                    </div>
                </End>
            </Card>
        </CalendarContext.Provider >

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

export default CalendarCard;
