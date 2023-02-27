import React, { useEffect, useInsertionEffect, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import DatePicker from "react-date-picker";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

type ButtonProps = {
    handleClosePopup: () => void;
};

const AddCalendar: React.FC<ButtonProps> = ({ handleClosePopup }) => {
    var buddhistEra = require('dayjs/plugin/buddhistEra')

    const [selectMonth, setSelectMonth] = useState(0) //เดือน
    const [startSemister, setStartSemister] = useState(new Date())
    const [name, setName] = useState('')
    const [startSemester, setStartSemester] = useState(new Date)
    const [response, setResponse] = useState()
    const navigate = useNavigate();
    const year = dayjs(String(startSemester)).format('YYYY')

    console.log(startSemister)
    console.log(year)
    const data = {
        name: name,
        starts_semester: startSemister,
        year: year,
        calendar_status: "Active",
    }
    console.log(data)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        await e.preventDefault();
        await axios.post('http://localhost:4000/calendar/create', {
            // name: name,
            // starts_semester: startSemister,
            // year: year,
            // calendar_status: "Active",
            data
        })
            .then((response) => {
                setResponse(response.data)
                console.log(response.data.starts_semester)
                alert("create calendar success")
                // navigate(`/calendar-edit/${response.data.id}`, { state: response.data.id })
                navigate(`/calendar-edit/`, { state: response.data.id })
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onSelect = (e: any) => {
        const date = startSemister.getDate()
        setSelectMonth(e.target.value)
        setStartSemister(new Date(Number(year), Number(selectMonth), date))
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
                                <FormInput type="number" id="year" name="year" className="border rounded-full mb-6 p-2" placeholder="ปีการศึกษา" onChange={(e :any) => setStartSemester(e.target.value)} />
                            </div>
                            <div  className="mb-3">
                                <FormInput type="text" id="name" name="name" className="border rounded-full mb-3 p-2 " placeholder="ชื่อปฏิทิน" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <SemesterTitle className="mb-3 mt-3">วันแรกของการเปิดการศึกษา</SemesterTitle>
                            <div className="flex-col justify-center ">
                                <div className="flex w-full justify-center gap-8">
                                    <div className="w-full">
                                        <MonthInput className="border rounded-lg" onChange={onSelect}>
                                            <option value="0">เดือน</option>
                                            <option value="01">มกราคม</option>
                                            <option value="02">กุมภาพันธ์</option>
                                            <option value="03">มีนาคม</option>
                                            <option value="04">เมษายน</option>
                                            <option value="05">พฤษภาคม</option>
                                            <option value="06">มิถุนายน</option>
                                            <option value="07">กรกฎาคม</option>
                                            <option value="08">สิงหาคม</option>
                                            <option value="09">กันยายน</option>
                                            <option value="10">ตุลาคม</option>
                                            <option value="11">พฤศจิกายน</option>
                                            <option value="12">ธันวาคม </option>
                                        </MonthInput>
                                    </div>
                                    <div className="w-full">
                                        <DatePicker className="w-full" onChange={(e: any)=> {setStartSemister(e)}} value={startSemister} locale='th' />
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

//styled

const SubmitLayout = styled.div`

`
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

const CreateButton = styled.button`
    padding: 5px 42px 5px 42px;
    display: flex;
    align-items: center;
    background-color: #F57F17;
    color: white;


`
const AddForm = styled.form`
    display: grid;
    padding: 0px 50px;
    width: 100%;
`
const FormInput = styled.input`
    width: 100%;
`

const MonthInput = styled.select`
    width: 100%;
`

const DateInput = styled.input`
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
