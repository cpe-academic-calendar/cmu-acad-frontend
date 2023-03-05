import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";

export const ContextWarpper = (props: any) => {

    const [exportModal, setExportModal] = useState<boolean>(false);
    const [calendarSort, setCalendarSort] = useState<String>('Active');

    const value = {
        exportModal, setExportModal, calendarSort, setCalendarSort
    };

    return (
    <GlobalContext.Provider value={value}>
        {props.children}
    </GlobalContext.Provider> );
}