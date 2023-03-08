import React, { useState } from "react";
import ChooseCalendarContext from "./ChooseCalendarContext";

const ChooseContextWrapper = (props: any) => {
    const [multipleSelect, setMultipeSelect] = useState<any[]>([]);
    const [startSemisterMonth, setStartSemisterMonth] = useState<any>();

    const value = {
        multipleSelect,
        setMultipeSelect,
        startSemisterMonth,
        setStartSemisterMonth,
    }

    return ( 
        <ChooseCalendarContext.Provider value={value}>
            {props.children}
        </ChooseCalendarContext.Provider>
     );
}
 
export default ChooseContextWrapper;