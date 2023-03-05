import React from "react";
import dayjs from "dayjs";

interface Payload {
    id: number;
    // start_date: any;
    // end_date?:any;
    // type:string;
    // duration: number;
}

// An interface for our actions
interface Action {
    type: string;
    payload: Payload;
}

interface contextType {
    monthIndex: number;
    setMonthIndex: (index: number) => void;
    daySelected: number;
    setDaySelected: (day: any) => void;
    showAddEventModal: boolean;
    setShowAddEventModal: (modal: boolean) => void;
    dispatchCalEvents: React.Dispatch<Action>;
    savedEvents: any[];
    // setSavedEvents: (event: any) => void;
    selectedEditEvent: any;
    setSelectedEditEvent: (props: any) => void;
    currentView: string;
    setCurrentView: (props: string) => void;
    selectedEvent: any;
    setSelectedEvent: (props: any) => void;

}

const EditCalendarContext = React.createContext<contextType>({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    daySelected: 0,
    setDaySelected: (day) => {},
    showAddEventModal: false,
    setShowAddEventModal: () => {},
    dispatchCalEvents: ({type, payload}) => {},
    savedEvents: [],
    // setSavedEvents: (event) => {},
    selectedEditEvent: null,
    setSelectedEditEvent: (props) => {},
    currentView: '',
    setCurrentView: (props) => null,
    selectedEvent: null, 
    setSelectedEvent: (props) => null

})

export default EditCalendarContext;