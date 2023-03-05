import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";

export const ContextWarpper = (props: any) => {

    const [exportModal, setExportModal] = useState<boolean>(false);
    const [calendarSort, setCalendarSort] = useState<String>('Active');
    const [loading, setLoading] = useState(false);

    const value = {
        exportModal, setExportModal, calendarSort, setCalendarSort, loading, setLoading
    };

    return (
    <GlobalContext.Provider value={value}>
        {props.children}
    </GlobalContext.Provider> );
}