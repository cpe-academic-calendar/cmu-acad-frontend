import React from "react";

interface contextType {
    exportModal: boolean;
    setExportModal: (state: boolean) => void;
    calendarSort: String;
    setCalendarSort: (state: String) => void;
    loading: boolean;
    setLoading: (state: boolean) => void;
    currentMonth: any;
    setCurrentMonth: (month: any) => void;
}

const GlobalContext = React.createContext<contextType>({
    exportModal: false,
    setExportModal: () => {},
    calendarSort: '',
    setCalendarSort: (state) => null,
    loading: false,
    setLoading: () => {},
    currentMonth: null,
    setCurrentMonth: () => {}
})

export default GlobalContext;