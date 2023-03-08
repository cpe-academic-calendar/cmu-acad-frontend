import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";

export const ContextWarpper = (props: any) => {

    const [exportModal, setExportModal] = useState<boolean>(false);
    const [calendarSort, setCalendarSort] = useState<String>('Active');
    const [loading, setLoading] = useState(false);
    const [currentMonth, setCurrentMonth] = useState<any>();

    const value = {
        exportModal, 
        setExportModal, 
        calendarSort, 
        setCalendarSort, 
        loading, 
        setLoading,
        currentMonth,
        setCurrentMonth
    };

    return (
    <GlobalContext.Provider value={value}>
        {props.children}
    </GlobalContext.Provider> );
}