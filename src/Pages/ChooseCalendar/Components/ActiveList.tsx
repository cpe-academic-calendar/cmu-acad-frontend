import React, { useEffect, useState } from "react";
import cards_dummy from "../../../cards_dummy.json"
import CalendarCard from "./CalendarCard";
import axios from 'axios'
import styled from "styled-components";

interface Data { name: string; date_semester: number; create_at: string; update_at: string; };

const Container = styled.div`
    /* align-items: center;
    display: flex;
    justify-content: space-between; */
`

function ActiveList() {
    const [item, setItem] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            axios
                .get('http://localhost:4000/calendar/findAll')
                .then(
                    response =>
                        setItem(response.data)
                )
        };
        fetchData()
    }, [])
    return (
        <Container>
            {
                item.map((item: Data) => (
                    <div>
                        <CalendarCard name={item.name} year={item.date_semester} create_date={item.create_at.slice(0, 10)} recently_edited={item.update_at.slice(0, 10)} />
                    </div>
                ))
            }
        </Container>
    )
}

export default ActiveList;