import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import GlobalContext from "../../../GlobalContext/GlobalContext";

const DuplicatePopUp = (props: any): JSX.Element => {
    const { setLoading } = useContext(GlobalContext)
    const [calendar_name, setCalendarName] = useState("")
    const [year, setYear] = useState(0)
    const [start_date, setStartDate] = useState("")
    const [response, setResponse] = useState()
    const [popup, setPopup] = useState(true)

    const handleClosePopup = () => {
        setPopup(false)
    }
    
    useEffect(()=>{
        console.log(props)
    },[props])


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault();
        setYear(props.data.item.year)
        setStartDate(props.data.item.start_semester)
        await axios.post(`http://localhost:4000/calendar/duplicate/${props.data.item.id}`, {
            name: calendar_name,
            start_semester: start_date
        })
            .then((response) => {
                setResponse(response.data)
                console.log(response.data)
                setLoading(false)
                alert("duplicate calendar success")
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            {
                popup ? (
                    <PopUp>
                        <MenuBar>
                            <Heading>
                                <h1>Duplicate</h1>
                                <p>ทำซ้ำปฏิทินเดิม</p>
                            </Heading>
                            <CloseIcon onClick={handleClosePopup} />
                        </MenuBar>
                        <CalendarName onSubmit={handleSubmit}>
                            <input placeholder="ชื่อปฏิทินใหม่" onChange={(e) => setCalendarName(e.target.value)} />
                            <button>Duplicate</button>
                        </CalendarName>
                    </PopUp >
                ) : null
            }
        </>
    );
}

const Modal = styled.div`
    padding: 48px;
    position: absolute;
    z-index: 99;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,0.4);
    width: 100vw;
    height: 100vh;
`

const PopUp = styled.div`
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    position: fixed;
    z-index: 40;
    left: 25%;
    top: 20%;
    width:50%;
    height: 40%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 100vw;
    overflow: auto;
    border-radius: 10px;
    background-color: #fff;
    padding: 4vh;
    align-items: center;
`

const MenuBar = styled.div`
    display: flex;
    color: var(--primary-color);
    width: 100%;
    justify-content: space-between;
`

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        color: var(--primary-color);
        font-size: x-large;
        font-weight: 600;
    }
    p{
        color: #000;
    }
`

const CalendarName = styled.form`
    max-width: fit-content;
    display: flex;
    flex-direction: column;
    gap:20px;
    padding-left: 2vh;
    padding-right: 2vh;
    input{
        border-radius: 30px;
        padding: 8px;
        border: 1px solid var(--stroke);
        margin-bottom: 2vh;
    }
    input:hover{
        border: 1px solid var(--primary-color);
    }
    button{
        background-color: var(--primary-color);
        color: var(--background);
        border-radius: 30px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: auto;
        padding-right: auto;
    }
`

export default DuplicatePopUp;