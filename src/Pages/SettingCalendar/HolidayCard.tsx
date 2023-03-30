import { color } from "@mui/system";
import { useEffect, useState } from "react";
import changeToThai from "../../Functions/changeToThai"
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { CalendarPath } from "../path";
import axios from "axios";

interface evtProps {
        idx: number;
        evt: {
            id: number;
            color: string;
            event_name: string;
            start_date: string;
        };
        setHoliday: React.Dispatch<React.SetStateAction<{
            id: number;
            color: string;
            event_name: string;
            start_date: string;
        }[]>>;
        holiday: {
            id: number;
            color: string;
            event_name: string;
            start_date: string;
        }[];

}

const HolidayCard = ({idx, evt, holiday, setHoliday} : evtProps) => {
    const [holidayEdit, setHolidayEdit] = useState(false)
    const [name, setName] = useState<string>(evt.event_name)
    const [date, setDate] = useState<string>(String(evt.start_date).substr(8, 2))
    const [month, setMonth] = useState<string>(String(evt.start_date).substr(5, 2))

    const handleEdit = () => {
        if(name === ''){
            setName(evt.event_name)
        }
        if(date === ''){
            setDate(String(evt.start_date).substr(8, 2))
        }
        if(month === ''){
            setMonth(String(evt.start_date).substr(5, 2))
        }

        const newEvent = {
            id: evt.id,
            event_name: name,
            start_date: `2023-${month}-${date}`,
            color: evt.color
        }
        console.log(newEvent)
        console.log('date' ,date)
        console.log('month', month)
        setHoliday(
            holiday.map((holiday) => (holiday.id === evt.id? {...holiday, 
                id: newEvent.id,
                event_name: newEvent.event_name,
                start_date: newEvent.start_date,
                color: evt.color
            }: holiday)
        ))
        axios.post(`${CalendarPath.local}/calendar/update/holidayMockUp`, holiday).then(
            res => (
                setHolidayEdit(false)
            )
        )
    }
    return ( 
        <>
        {
            holidayEdit?
            <>
            <td>{idx}</td>
            <td>
                <input type="text" value={name} placeholder={evt.event_name} onChange={(e) => {setName(e.target.value)} } />
            </td>
            <td>
                <input type="number" value={date} placeholder={String(evt.start_date).substr(8, 2)} onChange={(e) => setDate(e.target.value)} />
            </td>
            <td>
                <select value={month} onChange={(e) => {setMonth(e.target.value)}}>
                    <option value="01">มกราคม</option>
                    <option value="02">กุมภาพันธ์</option>
                    <option value="03">มีนาคม</option>
                    <option value="04">เมษายน</option>
                    <option value="05">พฤษภาคม</option>
                    <option value="06">มิถุนายน</option>
                    <option value="07">กรกฏาคม</option>
                    <option value="08">สิงหาคม</option>
                    <option value="09">กันยายน</option>
                    <option value="10">ตุลาคม</option>
                    <option value="11">พฤษจิกายน</option>
                    <option value="12">ธันวาคม</option>
                </select>
            </td>
            <td>
                <div onClick={handleEdit}>
                    <CheckIcon />
                </div>
            </td>
            </>:
            <>
            <td>{idx}</td>
            <td>{evt.event_name}</td>
            <td>{String(evt.start_date).substr(8, 2)}</td>
            <td>{changeToThai(String(evt.start_date).substr(5, 2))}</td>
            <td>
                <div onClick={() => 
                {
                    setName(evt.event_name)
                    setDate(String(evt.start_date).substr(8, 2))
                    setMonth(String(evt.start_date).substr(5, 2))
                    setHolidayEdit(true)
                }
                    }>
                    <EditIcon />
                </div>
            </td>
            </>
        }
        </>
     );
}
 
export default HolidayCard;