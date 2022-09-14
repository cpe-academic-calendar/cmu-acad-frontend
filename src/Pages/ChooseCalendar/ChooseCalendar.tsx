import React from "react";
import NavBar from "../../Components/NavBar";
import cards_dummy from "../../cards_dummy.json"
import CalendarCard from "./CalendarCard";
import styled from "styled-components";

interface Data { name: string; year: string; create_date: string; recently_edited: string; };

const NewCalendar = styled.button`
    background-color: #F57F17;
    color: #FFF;
    font-size: xx-large;
    border: none;
    border-radius: 30px;
`


function ChooseCalendar(){

    return(
        <>
        <NavBar />
        {
            cards_dummy.map((item :Data)=>(
                <div>
                    <CalendarCard name={item.name} year={item.year} create_date={item.create_date}  recently_edited={item.recently_edited}/>
                </div>
            ))
        }
        {/* {card_render} */}
        <NewCalendar>+</NewCalendar>
        </>
    )
}

export default ChooseCalendar;