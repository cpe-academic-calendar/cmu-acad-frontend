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



interface contextType {
    monthIndex: number;
    setMonthIndex: (index: number) => void;
    daySelected: number;
    setDaySelected: (day: any) => void;
    showAddEventModal: boolean;
    setShowAddEventModal: (modal: boolean) => void;
    dispatchCalEvents: React.Dispatch<Action>;
    savedEvents: any[];
    selectedEditEvent: any;
    setSelectedEditEvent: (props: any) => void;
    currentView: string;
    setCurrentView: (props: string) => void;

}

const GlobalContext = React.createContext<contextType>({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    daySelected: 0,
    setDaySelected: (day) => {},
    showAddEventModal: false,
    setShowAddEventModal: () => {},
    dispatchCalEvents: ({type, payload}) => {},
    savedEvents: [],
    selectedEditEvent: null,
    setSelectedEditEvent: (props) => {},
    currentView: '',
    setCurrentView: (props) => null

})

export default GlobalContext;