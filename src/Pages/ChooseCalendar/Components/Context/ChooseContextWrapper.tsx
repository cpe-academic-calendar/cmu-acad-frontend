import React, { useState } from "react";
import ChooseCalendarContext from "./ChooseCalendarContext";

const ChooseContextWrapper = (props: any) => {
    const [multipleSelect, setMultipeSelect] = useState(false);

    const value = {
        multipleSelect,
        setMultipeSelect
    }

    return ( 
        <ChooseCalendarContext.Provider value={value}>
            {props.children}
        </ChooseCalendarContext.Provider>
     );
}
 
export default ChooseContextWrapper;