import React from "react";

interface contextType {
    multipleSelect: any[],
    setMultipleSelect: (state: any) => void;
}

const ChooseCalendarContext = React.createContext<contextType> ({
    multipleSelect: [],
    setMultipleSelect: () => {}
})
 
export default ChooseCalendarContext;