import React, { useEffect, useState } from "react";
import cards_dummy from "../../../cards_dummy.json"
import CalendarCard from "./CalendarCard";
import axios from 'axios'
import styled from "styled-components";
// import calendarProps from "./calendarProps";

interface CalendarProps {
    data: {
        id: number,
        name: string;
        start_semester: Date;
        year: number;
        create_at: Date;
        update_at: Date;
    }[]
}



const Container = styled.div`
    /* align-items: center;
    display: flex;
    justify-content: space-between; */
`


const ActiveList = (calendar: CalendarProps) => {
    console.log(calendar)
    return (
        <Container>
            { calendar.data?.map((item, idx) => (
                    <div>
                        <CalendarCard id={item.id} name={item.name} year={item.year} start_semester={item.start_semester} create_at={item.create_at} update_at={item.update_at} />
                    </div>
                ))
            }
        </Container>
    )
}

export default ActiveList;