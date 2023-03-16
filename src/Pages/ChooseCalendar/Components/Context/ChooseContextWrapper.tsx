import React, { useState, useEffect, useContext } from "react";
import ChooseCalendarContext from "./ChooseCalendarContext";

const ChooseContextWrapper = (props: any) => {
    const [multipleSelect, setMultipleSelect] = useState<number[]>([]);
    const [startSemisterMonth, setStartSemisterMonth] = useState<any>();

    // useEffect(() => {
    //     console.log(multipleSelect)
    // }, [multipleSelect])

    const value = {
        multipleSelect,
        setMultipleSelect,
        startSemisterMonth,
        setStartSemisterMonth
    }

    return ( 
        <ChooseCalendarContext.Provider value={{
            multipleSelect,
            setMultipleSelect,
            startSemisterMonth,
            setStartSemisterMonth
        }}>
            {props.children}
        </ChooseCalendarContext.Provider>
     );
}
 
export default ChooseContextWrapper;