import React, { useContext, useEffect, useInsertionEffect, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import DatePicker from "react-date-picker";
import axios from 'axios'
import { useNavigate} from "react-router-dom";
import GlobalContext from "../../../GlobalContext/GlobalContext";

type ButtonProps = {
    handleClosePopup: () => void;
};

const AddCalendar: React.FC<ButtonProps> = ({ handleClosePopup }) => {

    const { setLoading} = useContext(GlobalContext)

    const [name, setName] = useState('')
    const [semester_year, setSemesterYear] = useState(0)
    const [value, setValue] = useState(new Date("2023-06-19"))
    const navigate = useNavigate();

    const data = {
        name: name,
        start_semester: value,
        year: value,
        calendar_status: "Active",
    }   

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        await e.preventDefault();
        setLoading(true)
        await axios.post('http://localhost:4000/calendar/create',
            data)
            .then((response) => {
                navigate(`/calendar-edit/${response.data.id}/month`)
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const onSelect = (e: any) => {
        const day = new Date(e).setFullYear(semester_year)
        setValue(new Date(day))
    }

    const handleChooseYear = async (e: any) => {
        setSemesterYear((e.target.value))
        setValue(new Date(new Date(`${value}`).setFullYear((e.target.value))))
    }


    return (
        <Modal>
            <div className="grid place-items-center z-30">
                <div>
                    <AddContainer>
                        <div className="flex justify-between mb-3">
                            <div className="flex-box">
                                <Header>
                                    New Draft
                                </Header>
                                <Title>สร้างแบบร่างปฏิทินใหม่</Title>
                            </div>
                            <CloseButton onClick={() => handleClosePopup()}>
                                <CloseIcon />
                            </CloseButton>
                        </div>
                        <AddForm onSubmit={handleSubmit}>
                            <div >
                                <FormInput type="number" id="year" name="year" className="border rounded-full mb-6 p-2" placeholder="ปีการศึกษา" onChange={
                                    handleChooseYear
                                } />
                            </div>
                            <div className="mb-3">
                                <FormInput type="text" id="name" name="name" className="border rounded-full mb-3 p-2 " placeholder="ชื่อปฏิทิน" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <SemesterTitle className="mb-3 mt-3">วันแรกของการเปิดการศึกษา</SemesterTitle>
                            <div className="flex-col justify-center ">
                                <div className="flex w-full justify-center gap-8">
                                    <div className="w-full">
                                        <DatePicker className="w-full" onChange={onSelect} value={value} locale='th' />
                                    </div>
                                </div>
                                <div className="grid justify-center mt-4">
                                    <SubmitButton type="submit" className="border rounded-full" >สร้าง</SubmitButton>
                                </div>
                            </div>
                        </AddForm>
                    </AddContainer>
                </div>
            </div>
        </Modal>
    )
};


const SubmitButton = styled.button`
padding: 5px 42px 5px 42px;
display: flex;
align-items: center;
background-color: #F57F17;
color: white;
`

const AddContainer = styled.div`
    padding: 32px;
    border: 1px;
    background: #FCFCFC;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    width: 609px;
    height: 100%;
`

const Header = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    color: #F57F17;
`

const Title = styled.div`
    margin-top: -8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
`

const SemesterTitle = styled(Title)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
`

const CloseButton = styled.button`
    color: #F57F17;
    transform: scale(180%);
`

const AddForm = styled.form`
    display: grid;
    padding: 0px 50px;
    width: 100%;
`
const FormInput = styled.input`
    width: 100%;
`

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

export default AddCalendar;
