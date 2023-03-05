import React from "react";

interface contextType {
    exportModal: boolean;
    setExportModal: (state: boolean) => void
    calendarSort: String;
    setCalendarSort: (state: String) => void
}

const GlobalContext = React.createContext<contextType>({
    exportModal: false,
    setExportModal: () => {},
    calendarSort: '',
    setCalendarSort: (state) => null
})

export default GlobalContext;