import React, { useState, useEffect, useContext } from "react";
import ChooseCalendarContext from "./ChooseCalendarContext";

const ChooseContextWrapper = (props: any) => {
    const [multipleSelect, setMultipleSelect] = useState<number[]>([]);
    const [startSemisterMonth, setStartSemisterMonth] = useState<any>();
    const [search, setSearch] = useState('')

    // useEffect(() => {
    //     console.log(multipleSelect)
    // }, [multipleSelect])

    const value = {
        multipleSelect,
        setMultipleSelect,
        startSemisterMonth,
        setStartSemisterMonth,
        search,
        setSearch
    }

    return ( 
        <ChooseCalendarContext.Provider value={value}>
            {props.children}
        </ChooseCalendarContext.Provider>
     );
}
 
export default ChooseContextWrapper;