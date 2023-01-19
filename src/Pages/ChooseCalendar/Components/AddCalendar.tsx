import React, { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
// import DatePicker from "react-date-picker";

type ButtonProps = {
    handleClosePopup: () => void;
};

const AddCalendar: React.FC<ButtonProps> = ({ handleClosePopup }) => {

    const [selectMonth, setSelectMonth] = useState(0)
    const [value,onChange] = useState(new Date())
    const [semester,setSemester] = useState(0)

    const handleChange = (e:any) => {
        setSemester(e.target.value)
    }

    const onSelect = (e:any) => {   
        console.log(e)
        const date = value.getDate()
        const year = semester - 543
        setSelectMonth(e.target.value)
        onChange(new Date(year,Number(selectMonth),date))
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
                        <AddForm>
                            <div >
                                <FormInput type="text" name="name" className="border rounded-full mb-3 p-2 " placeholder="ชื่อปฏิทิน" />
                            </div>
                            <SemesterTitle className="mb-3 mt-3">วันแรกของการเปิดการศึกษา</SemesterTitle>
                            <div >
                                <FormInput type="number" name="semester" className="border rounded-full mb-6 p-2" placeholder="ปีการศึกษา" onChange={handleChange} />
                            </div>
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
                                        {/* <DatePicker  onChange={onChange} value={value} locale='th'/> */}
                                    </div>
                                </div>
                                <div className="grid justify-center" >
                                    <CreateButton type="submit" className="border rounded-full" />
                                </div>
                            </div>
                        </AddForm>
                    </AddContainer>
                </div>
            </div>
        </Modal>
    )

};

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

const CreateButton = styled.input`
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
