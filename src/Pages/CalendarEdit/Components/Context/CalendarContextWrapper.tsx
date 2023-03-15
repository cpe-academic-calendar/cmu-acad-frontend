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
    const [eventInfo, setEventInfo] = useState(false);
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

    const pushEvent = (event: any) => {
        setLoading(true)
        axios.post(`https://cmu-acad-backend-production.up.railway.app/event/create`,event)
        .then((res)=>{
            setSavedEvents(() => [...savedEvents, res.data])
            setLoading(false)
        })
    }

    const updateEvent = (newEvent: any) => {
        setLoading(true)
        axios.put(`https://cmu-acad-backend-production.up.railway.app/event/update/${newEvent.id}`,newEvent).then(
            (res: any) => {
            const newItems = savedEvents.map((evt) => 
                evt.id === newEvent.id ? newEvent : evt
            )
            setSavedEvents(newItems)
            setLoading(false)
      })
    }

    const deleteEvent = (event: any) => {
        setLoading(true)
        try{
            axios.delete(`https://cmu-acad-backend-production.up.railway.app/event/delete/${event.id}`, event).then(
                (res)=>{
                    const newItems = savedEvents.filter(evt => evt.id !== event.id);
                    setSavedEvents(newItems);
                    setLoading(false)
                })
        }
        catch(err){
            return err;
        }
    }

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
        setCurrentMonth,
        pushEvent,
        deleteEvent,
        updateEvent
      };

    return (
    <EditCalendarContext.Provider value={value}>
        {props.children}
    </EditCalendarContext.Provider> );
}