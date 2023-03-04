import React, { useEffect, useReducer, useState } from "react";
import EditCalendarContext from "./EditCalendarContext";
import dayjs from "dayjs";

interface Payload {
    id: any;
}

// An interface for our actions
interface Action {
    type: string;
    payload: Payload;
}

interface CalendarEvent {
    id: number;
    start_date: Date;
    end_date: Date;
  }



function savedEventReducer(state: any[], action: Action) {
    switch (action.type){
        case 'push':
            return [...state, action.payload]
        case "update":
            return state.map((evt) =>
                evt.id === action.payload.id ? action.payload : evt
            );
        case "delete":
            return state.filter((evt) => evt.id !== action.payload.id);
            default:
        throw new Error();
    }
}

//new event
function initEvents(){
    const storageEvent = localStorage.getItem('savedEvents');
    const parsedEvent = storageEvent? JSON.parse(storageEvent) : [];
    return parsedEvent
}


export const CalendarContextWrapper = (props: any) => {
    const [monthIndex, setMonthIndex] = useState<number>(dayjs().month());
    const [daySelected, setDaySelected] = useState<any>(null);
    const [showAddEventModal, setShowAddEventModal] = useState<boolean>(false);
    const [selectedEditEvent, setSelectedEditEvent] = useState<any>(null);
    const [currentView, setCurrentView] = React.useState<string>('month');
    const [selectedEvent, setSelectedEvent] = useState<any>(); //Just one event that want to look info
    // const [savedEvents, setSavedEvents] = useState<any[]>([]);
    // const [savedEvents, dispatchCalEvents] = useReducer( savedEventReducer, [], initEvents)
    const [savedEvents, dispatchCalEvents] = useReducer(
        savedEventReducer,
        [] as CalendarEvent[]
      );

    useEffect(()=> {
        localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
        // localStorage.removeItem("savedEvents")
    }, [savedEvents])

    const value = {
        monthIndex,
        setMonthIndex,
        daySelected,
        setDaySelected,
        showAddEventModal,
        setShowAddEventModal,
        selectedEditEvent,
        setSelectedEditEvent,
        dispatchCalEvents,
        savedEvents,
        // setSavedEvents,
        currentView,
        setCurrentView,
        selectedEvent, 
        setSelectedEvent
    };

    return (
    <EditCalendarContext.Provider value={value}>
        {props.children}
    </EditCalendarContext.Provider> );
}