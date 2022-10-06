import { useState } from "react";
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import styled from "styled-components";
import "react-multi-date-picker/styles/colors/yellow.css"
import { Datepicker, CalendarPrev, CalendarNav, CalendarNext, CalendarToday, SegmentedGroup, SegmentedItem, setOptions, localeTh } from '@mobiscroll/react-lite';

setOptions({
    locale: localeTh,
    theme: 'ios',
    themeVariant: 'light'
});


const Container = styled.div`
  margin-top: 19px;
  color: #f57f17;
  .custom-label {
    color: #f57f17;
  }
  .w-screen {
    grid-template-columns: auto auto auto;
    border-color: white;
    margin-left:auto ;
    margin-right: auto;
    padding-left: auto;
    padding-right: auto;
    
   
  }
  .rmdp-wrapper{
    border: none;
  }
  
`;

export default function Draft() {
  const label = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];
  const months = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  const [value, setValue] = useState(new Date());
  return (
    <Container >
      <Calendar
        fullYear
        value={value}
        weekDays={label}
        months={months}
        className="custom-label w-screen red"
        // plugins={[
        //   <DatePanel />
        // ]}
      />
    </Container>
  );
}
