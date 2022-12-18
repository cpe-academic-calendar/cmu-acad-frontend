import React from "react";
import cards_dummy from "../../../cards_dummy.json"
import CalendarCard from "./CalendarCard";

interface Data { name: string; year: string; create_date: string; recently_edited: string; };

function CalendarActiveList( ){
    return(
        <div>
            {
                cards_dummy.map((item :Data )=>(
                    <div>
                        <CalendarCard name={item.name} year={item.year} create_date={item.create_date}  recently_edited={item.recently_edited} />
                    </div>
                ))
            }
        </div>
         )
}

export default CalendarActiveList;