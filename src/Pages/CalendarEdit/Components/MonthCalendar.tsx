import React from "react";
import dayjs from 'dayjs'
import styled from "styled-components";
import Day from "./Day";

interface DateFromDayjs {
    month: dayjs.Dayjs[][];
    day?: dayjs.Dayjs[][];
}

const MonthCalendar:React.FC<DateFromDayjs> = (month) => {
    return ( <div>
        {
            // month.map((row:number, i:any) => (
            //     <React.Fragment key={i}>
            //         {row.map((day:DateFromDayjs, idx:any)=> (
            //             <Day day={day} key={idx} />
            //         ))}
            //     </React.Fragment>
            // ))
        }

    </div> );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`
 
export default MonthCalendar;