import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import CalendarCard from "./CalendarCard/CalendarCard";
import ChooseCalendarContext from "./Context/ChooseCalendarContext";

interface CalendarProps {
    id: number,
    name: string;
    start_semester: Date;
    year: number;
    create_at: Date;
    update_at: Date;
}

function ActiveList( ) {

    const [item, setItem] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            axios
                .get('https://cmu-acad-backend-production.up.railway.app/calendar/findAll')
                .then(  
                    response =>
                    setItem(response.data)
                )
        };
        fetchData()
    }, [])

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