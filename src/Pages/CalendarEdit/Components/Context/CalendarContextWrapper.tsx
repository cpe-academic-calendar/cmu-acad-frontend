import React, { useContext, useEffect, useReducer, useState } from "react";
import EditCalendarContext from "./EditCalendarContext";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import GlobalContext from "../../../../GlobalContext/GlobalContext";
import axios from "axios";

interface Payload {
    id: any;
}

// An interface for our actions
interface Action {
    type: string;
    payload: Payload;
}

interface calendarEventProps {
event_name: string;
type: string;
start_date: Date;
id: number;
}

export const CalendarContextWrapper = (props: any) => {
    const { setLoading } = useContext(GlobalContext);
    const [monthIndex, setMonthIndex] = useState<number>(dayjs().month());
    const [daySelected, setDaySelected] = useState<any>(null);
    const [showAddEventModal, setShowAddEventModal] = useState<boolean>(false);
    const [selectedEditEvent, setSelectedEditEvent] = useState<any>(null);
    const [currentView, setCurrentView] = React.useState<string>('month');
    const [savedEvents, setSavedEvents] = useState<any[]>([])
    const [selectedEvent, setSelectedEvent] = useState<any>(); //Just one event that want to look info
    const [currentMonth, setCurrentMonth] = useState<number>(0);
    // const [savedEvents, dispatchCalEvents] = useReducer(
    //     savedEventReducer,
    //     [] as CalendarEvent[]
    //   );

    const calendarId = useParams()
    // console.log(calendarId)
    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`https://cmu-acad-backend-production.up.railway.app/calendar/findEventById/${calendarId.id}`)
                setLoading(false)
                setSavedEvents(res.data[0].events);
            }catch(error){
                console.log(error)
            }        
        }
        getData()
    }, [calendarId])

    const value = {
        monthIndex,
        setMonthIndex,
        daySelected,
        setDaySelected,
        showAddEventModal,
        setShowAddEventModal,
        selectedEditEvent,
        setSelectedEditEvent,
        savedEvents,
        setSavedEvents,
        currentView,
        setCurrentView,
        selectedEvent, 
        setSelectedEvent,
        currentMonth,
        setCurrentMonth
      };

    return (
    <EditCalendarContext.Provider value={value}>
        {props.children}
    </EditCalendarContext.Provider> );
}