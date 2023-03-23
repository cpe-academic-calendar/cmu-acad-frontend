import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import GlobalContext from "../../../GlobalContext/GlobalContext";
import CalendarCard from "./CalendarCard/CalendarCard";
import ChooseCalendarContext from "./Context/ChooseCalendarContext";
import { CalendarPath } from "../../path";

interface CalendarProps {
    id: number,
    name: string;
    start_semester: Date;
    year: number;
    create_at: Date;
    update_at: Date;
}

function ActiveList( ) {
    const { search } = useContext(ChooseCalendarContext);
    const [item, setItem] = useState([])
    
    useEffect(() => {
        const fetchData = async (input: string) => {
            axios
                .get(`${CalendarPath.local}/calendar/findByName?query=${input}&type=Active`)
                .then(  
                    response => {
                        setItem(response.data)
                    }
                )
        };
        fetchData(search)
    }, [search])

    const { multipleSelect, setMultipleSelect } = useContext(ChooseCalendarContext);

      const handleCheckClick = (id: number) => {
        setMultipleSelect([...multipleSelect, id]);
      };

      const handleUnCheckClick = (selectedCard: number) => {
        const newItems = multipleSelect.filter((card) => card !== selectedCard)
        setMultipleSelect(newItems);
      };



    return(
        <div>
             {
                item.map((item :CalendarProps) => (
                    <div>
                        <CalendarCard id={item.id} name={item.name} year={item.year} start_semester={item.start_semester} create_at={item.create_at} update_at={item.update_at} handleCheckClick={handleCheckClick} handleUnCheckClick={handleUnCheckClick} />
                    </div>
                ))
            }
        </div>
    )
}

export default ActiveList;