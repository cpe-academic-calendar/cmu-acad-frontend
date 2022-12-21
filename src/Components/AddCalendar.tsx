import React from "react"
import CloseIcon from '@mui/icons-material/Close';
import { AddContainer, CloseButton, Header, Title, CreateButton, AddForm, SemesterTitle, FormInput, MonthInput, DateInput } from "./AddCalendar.styled";
const AddCalendar: React.FC = () => {
    return (
        <div className="grid place-items-center h-screen">
            <div>
                <AddContainer>
                    <div className="flex justify-between mb-3">
                        <div className="flex-box">
                            <Header>
                                New Draft
                            </Header>
                            <Title>สร้างแบบร่างปฏิทินใหม่</Title>
                        </div>
                        <CloseButton>
                            <CloseIcon />
                        </CloseButton>
                    </div>
                    <AddForm>
                        <div >
                            <FormInput type="text" name="name" className="border rounded-full mb-3 p-2 " placeholder="ชื่อปฏิทิน" />
                        </div>
                        <div>
                            <FormInput type="text" name="name" className="border rounded-full mb-3 p-2" placeholder="ปีการศึกษา" />
                        </div>
                        <SemesterTitle className="mb-3">วันแรกของการเปิดการศึกษา</SemesterTitle>
                        <div >
                            <FormInput type="text" name="name" className="border rounded-full mb-6 p-2" placeholder="ปีการศึกษา" />
                        </div>
                        <div className="flex-col justify-center ">
                            <div className="flex w-full justify-center gap-8">
                                <div className="w-full">
                                    <MonthInput className="border rounded-lg">
                                        <option value="0">เดือน</option>
                                        <option value="1">มกราคม</option>
                                        <option value="2">กุมภาพันธ์</option>
                                        <option value="3">มีนาคม</option>
                                        <option value="4">เมษายน</option>
                                        <option value="5">พฤษภาคม</option>
                                        <option value="6">มิถุนายน</option>
                                        <option value="7">กรกฎาคม</option>
                                        <option value="8">สิงหาคม</option>
                                        <option value="9">กันยายน</option>
                                        <option value="10">ตุลาคม</option>
                                        <option value="11">พฤศจิกายน</option>
                                        <option value="12">ธันวาคม </option>
                                    </MonthInput>
                                </div>
                                <div className="w-full">
                                    <DateInput type="date" className="border rounded-full  mb-4 " value="วันที่" />
                                </div>
                            </div>
                            <div className="grid justify-center" >
                                <CreateButton type="submit" className="border rounded-full" value="Create Draft" />
                            </div>
                        </div>
                    </AddForm>
                </AddContainer>
            </div>
        </div>
    )
};

export default AddCalendar;
