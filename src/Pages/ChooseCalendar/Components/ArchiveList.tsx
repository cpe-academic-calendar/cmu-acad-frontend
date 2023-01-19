import React from "react";
import archive_dummy from '../../../archive_dummy.json'
import CalendarCard from './CalendarCard'

interface Data { name: string; year: number; create_date: string; recently_edited: string; };

function ArchiveList( ) {
    return(
        <div>
            {/* {
                archive_dummy.map((item :Data)=>(
                    <div>
                        <CalendarCard name={item.name} year={item.year} create_date={item.create_date}  recently_edited={item.recently_edited} />
                    </div>
                ))
            } */}
        </div>
    )
}

export default ArchiveList;