import React, { useCallback, useState } from "react";
import {
  CalendarContainer,
  CalendarMonth,
  DraftContainer,
  LabelHeader,
} from "./Draft.styled";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
} from "date-fns";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Draft() {
  let years = new Date().getFullYear();
  let today = new Date(years);
  let [selectedDay, setSelectDay] = useState(today);

  let [current, setCurrent] = useState(
    format(new Date(years, 0, 1), "MMM-yyyy")
  );
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstMonth = parse(current, "MMM-yyyy", new Date());
  let days = eachDayOfInterval({
    start: firstMonth,
    end: endOfMonth(firstMonth),
  });
  const label = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];
  const dayLabel = label.map((day) => day);
  console.log(days.map((data)=> data.getDay()))

  return (
    <div>

       
    </div>
              
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
