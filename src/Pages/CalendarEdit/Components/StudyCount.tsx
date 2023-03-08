import axios from "axios";
import { eachDayOfInterval } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudyCountWeek = () => {
    const [count, setCount] = useState([])
    const calendarId = useParams()
    // useEffect(()=>{
    //     axios.get(`http://localhost:4000/calendar/studyweek/${calendarId.id}`)
    //         .then((res)=>{
    //             setCount(res.data.term1[0].sunday)
    //             // setCount(res.data.term1)
    //         })
    // },[calendarId.id])

    return (<div>
            {count}
    </div>)
}

export default StudyCountWeek;