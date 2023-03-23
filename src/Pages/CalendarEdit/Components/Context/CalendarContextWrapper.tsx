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
id: number;
event_name: string;
type: string;
start_date: Date;
// end_date: Date
current_date: Date
color: string;

}

export const CalendarContextWrapper = (props: any) => {
    const { setLoading } = useContext(GlobalContext);

    const [monthIndex, setMonthIndex] = useState<number>(dayjs().month());
    const [daySelected, setDaySelected] = useState<any>(null);
    const [showAddEventModal, setShowAddEventModal] = useState<boolean>(false);
    const [selectedEditEvent, setSelectedEditEvent] = useState<any>(null);
    const [currentView, setCurrentView] = React.useState<string>('month');
    const [savedEvents, setSavedEvents] = useState<calendarEventProps[]>([]);
    // const [importedEvents, setImportEvents] = useState<any[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<any>(); //Just one event that want to look info
    const [currentMonth, setCurrentMonth] = useState<number>(0);

    const calendarId = useParams()


    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                // const res = await axios.get(`http://localhost:4000/calendar/findEventById/${calendarId.id}`)
                const res = await axios.get(`http://localhost:4000/calendar/findEventById/${calendarId.id}`)
                setLoading(false)
                setSavedEvents(res.data[0].events);
            }catch(error){
                return error
            }        
        }
        getData()
    }, [calendarId])

    const pushEvent = (event: any) => {
        setLoading(true)
        // axios.post(`http://localhost:4000/event/create`,event)
        axios.post(`http://localhost:4000/event/create`,event)
        .then((res)=>{
            setSavedEvents(() => [...savedEvents, res.data])
            setLoading(false)
        })
    }

    const updateEvent = (newEvent: any) => {
        setLoading(true)
        // axios.put(`http://localhost:4000/event/update/${newEvent.id}`,newEvent).then(
        axios.put(`http://localhost:4000/event/update/${newEvent.id}`,newEvent).then(
            (res: any) => {
                // axios.get(`http://localhost:4000/calendar/findEventById/${calendarId.id}`).then(
                axios.get(`http://localhost:4000/calendar/findEventById/${calendarId.id}`).then(
                    (response: any) => {
                        setSavedEvents(response.data[0].events)
                        setLoading(false)
                    }
                )
      })
    }

    const deleteEvent = (event: any) => {
        setLoading(true)
        try{
            // axios.delete(`http://localhost:4000/event/delete/${event.id}`, event).then(
            axios.delete(`http://localhost:4000/event/delete/${event.id}`, event).then(
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