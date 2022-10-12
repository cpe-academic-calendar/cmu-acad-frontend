import React from "react";
import moment from "moment";
import styled from "styled-components";
import { render } from "react-dom";
import { eachDayOfInterval, endOfMonth, isFirstDayOfMonth, startOfMonth } from "date-fns";

const Container = styled.div`
  margin-top: 19px;
  color: #f57f17;
  gap: 20px;
  .year {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }
  .month-name {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 50px;
  }
`;

export default function Draft() {
  const first = startOfMonth(new Date());
  const last = endOfMonth(new Date());
  const weeksCount = Math.ceil((first.getDate()+ last.getDate())/7)
  const calendar = Object.assign([],{first,last})
  console.log(calendar)
  const dayofMonth = eachDayOfInterval(
      {
        start: first,
        end: last
      }
  )
  for(let weekNumber = 0; weekNumber < weeksCount; weekNumber++){
    const week = []
    
  }
  
  
  
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
  return (
    <div className="flex">
      {label.map((dayofMonth, index) => (
        <div key={index}>

        </div>
      ))}
    </div>
  );
}
