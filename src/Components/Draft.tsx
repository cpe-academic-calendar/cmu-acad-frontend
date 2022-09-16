import React, { useState } from "react";
import { Calendar } from "react-calendar";
import { DraftContainer } from "./Draft.styled";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";

export default function Draft() {
  let years = new Date().getFullYear();
  let today = new Date(years, 0, 1);
  let [selectDay,setSelectDay] = useState(today)
  let [current,setCurrent] = useState(format(new Date(years, 0, 1), "MMM-yyyy"))
  let firstMonth = parse(current, "MMM-yyyy", new Date());
  let days = eachDayOfInterval({
    start: firstMonth,
    end: endOfMonth(firstMonth),
  });

  const day = days.map((data,dayIdx)=> {
    
  })

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <DraftContainer>
      <div className="grid grid-cols-7 mt-2 text-sm">
        {/* {days.map((day, dayIdx) => {
          <div
            key={day.toString()}
            className={classNames(
              dayIdx === 0 && colStartClasses[getDay(day)],
              "py-15"
            )}
          ></div>;
        })} */}
      </div>
    </DraftContainer>
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
