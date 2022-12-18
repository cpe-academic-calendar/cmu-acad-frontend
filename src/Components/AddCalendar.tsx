import React from "react"
import { AddContainer, CloseButton, Header, Title, CreateButton, AddForm, SemesterTitle, FormInput } from "./AddCalendar.styled";
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
                        <CloseButton>X</CloseButton>
                    </div>
                    <AddForm>
                        <div >
                            <FormInput type="text" name="name" className="border rounded-lg mb-3" placeholder="ชื่อปฏิทิน" />
                        </div>
                        <div>
                            <FormInput type="text" name="name" className="border rounded-lg mb-3" placeholder="ปีการศึกษา" />
                        </div>
                        <SemesterTitle className="mb-3">วันแรกของการเปิดการศึกษา</SemesterTitle>
                        <div >
                            <FormInput type="text" name="name" className="border rounded-lg mb-3" placeholder="ปีการศึกษา" />
                        </div>
                        <div className="flex-col mb-4 justify-center">
                            <div className="flex mb-4 gap-8">
                                <div>
                                    <select>
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
                                        <option value="12">ธันวาคม</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="date" className="border rounded-lg" value="วันที่" />
                                </div>
                            </div>
                            <div >
                                <CreateButton type="submit" className="boreder rounded-full ml-16" value="Create Draft" />
                            </div>
                        </div>
                    </AddForm>
                </AddContainer>
            </div>
        </div>
    )
};

export default AddCalendar;
