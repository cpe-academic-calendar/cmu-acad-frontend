import axios from "axios";
import React, { useEffect, useState } from "react";
import CalendarCard from "./CalendarCard";

interface Data { id: number, name: string; date_semester: number; create_at: string; update_at: string; };

function ArchiveList( ) {

    const [item, setItem] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            axios
                .get('http://localhost:4000/calendar/findArchive')
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
                item.map((item: Data) => (
                    <div>
                        <CalendarCard id={item.id} name={item.name} year={item.date_semester} create_date={item.create_at.slice(0, 10)} recently_edited={item.update_at.slice(0, 10)} />
                    </div>
                ))
            }
        </div>
    )
}

export default ArchiveList;