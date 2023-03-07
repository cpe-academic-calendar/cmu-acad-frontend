import axios from "axios";
import React, { useEffect, useState } from "react";
import CalendarCard from "./CalendarCard/CalendarCard";

interface CalendarProps {
    id: number,
    name: string;
    start_semester: Date;
    year: number;
    create_at: Date;
    update_at: Date;
}

function ArchiveList( ) {

    const [item, setItem] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            axios
                .get('https://cmu-acad-backend-production.up.railway.app/calendar/findArchive')
                .then(  
                    response =>
                    setItem(response.data)
                )
        };
        fetchData()
    }, [])



    return(
        <div>
             {
                item.map((item :CalendarProps) => (
                    <div>
                        <CalendarCard id={item.id} name={item.name} year={item.year} start_semester={item.start_semester} create_at={item.create_at} update_at={item.update_at} />
                    </div>
                ))
            }
        </div>
    )
}

export default ArchiveList;