import React, { useEffect, useReducer, useState } from "react";
import EditCalendarContext from "./EditCalendarContext";
import dayjs from "dayjs";

interface Payload {
    id: number;
}

// An interface for our actions
interface Action {
    type: string;
    payload: Payload;
}

// interface eventProps {
//     id: number;
//     event_name: string;
//     started_date: string;
//     type: string;
// }

function savedEventReducer(state: any[], {type, payload}: Action) {
    switch (type){
        case 'push':
            return [...state, payload]
        case "update":
            return state.map((evt) =>
                evt.id === payload.id ? payload : evt
            );
        case "delete":
            return state.filter((evt) => evt.id !== payload.id);
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
    // const []
    const [savedEvents, dispatchCalEvents] = useReducer( savedEventReducer, [], initEvents)

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
        currentView,
        setCurrentView,
    };

    return (
    <EditCalendarContext.Provider value={value}>
        {props.children}
    </EditCalendarContext.Provider> );
}