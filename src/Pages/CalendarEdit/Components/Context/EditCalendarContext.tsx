import React from "react";
import dayjs from "dayjs";

interface Payload {
    id: number;
}

// An interface for our actions
interface Action {
    type: string;
    payload: Payload;
}

interface calendarEventProps {
    event_name: string;
    type: string;
    date: Date;
    id: number;
    }

interface contextType {
    monthIndex: number;
    setMonthIndex: (index: number) => void;
    daySelected: number;
    setDaySelected: (day: any) => void;
    showAddEventModal: boolean;
    setShowAddEventModal: (modal: boolean) => void;
    savedEvents: any[];
    setSavedEvents: (event: any) => void;
    selectedEditEvent: any;
    setSelectedEditEvent: (props: any) => void;
    currentView: string;
    setCurrentView: (props: string) => void;
    selectedEvent: any;
    setSelectedEvent: (props: any) => void;
    currentMonth: number;
    setCurrentMonth: (month: any) => void;
    pushEvent: (event: any) => void;
    deleteEvent: (event: any) => void;
    updateEvent: (event: any) => void;
}

const EditCalendarContext = React.createContext<contextType>({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    daySelected: 0,
    setDaySelected: (day) => {},
    showAddEventModal: false,
    setShowAddEventModal: () => {},
    savedEvents: [],
    setSavedEvents: (event) => {},
    selectedEditEvent: null,
    setSelectedEditEvent: (props) => {},
    currentView: '',
    setCurrentView: (props) => null,
    selectedEvent: null, 
    setSelectedEvent: (props) => null,
    currentMonth: 0,
    setCurrentMonth: (month) => {},
    pushEvent: (event) => {},
    deleteEvent: (event) => {},
    updateEvent: (event) => {}
})

export default EditCalendarContext;