import React, { useEffect, useInsertionEffect, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
<<<<<<< HEAD
// import DatePicker from "react-date-picker";
=======
import DatePicker from "react-date-picker";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
>>>>>>> 25a9f1c (feat: crud front)
=======
import { startOfWeek } from 'date-fns'
>>>>>>> 7fa8cbc (feat: set Start Semester)

type ButtonProps = {
    handleClosePopup: () => void;
};

const AddCalendar: React.FC<ButtonProps> = ({ handleClosePopup }) => {
    const year = new Date().getFullYear()
    const date = 19
    const month = 5
    const [value, onChange] = useState(new Date(year,month,date))
    const [name, setName] = useState('')
    const [semester, setSemester] = useState(0)
    const [response, setResponse] = useState()
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        await e.preventDefault();
        await axios.post('http://localhost:4000/calendar/create', {
            name: name,
            date_semester: semester,
            calendar_status: "Active",
            start_semester: "2022-05-19"
        })
            .then((response) => {
                setResponse(response.data)
                console.log(response.data)
                navigate('/', { replace: true })
                alert("create calendar success")
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const  setYear =  (e: any) => {
        const start = startOfWeek(new Date(e-543,month,date), { weekStartsOn: 1 })
        onChange(start)
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
                                <FormInput type="number" id="year" name="year" className="border rounded-full mb-6 p-2" placeholder="ปีการศึกษา" onChange={(e) => setYear(Number(e.target.value))} />
                            </div>
                            <div className="mb-3">
                                <FormInput type="text" id="name" name="name" className="border rounded-full mb-3 p-2 " placeholder="ชื่อปฏิทิน" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <SemesterTitle className="mb-3 mt-3">วันแรกของการเปิดการศึกษา</SemesterTitle>
                            <div className="flex-col justify-center ">
                                <div className="flex w-full justify-center gap-8">
                                    <div className="w-full">
<<<<<<< HEAD
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
<<<<<<< HEAD
                                        {/* <DatePicker  onChange={onChange} value={value} locale='th'/> */}
=======
=======
>>>>>>> 7fa8cbc (feat: set Start Semester)
                                        <DatePicker className="w-full" onChange={onChange} value={value} locale='th' />
>>>>>>> 25a9f1c (feat: crud front)
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
