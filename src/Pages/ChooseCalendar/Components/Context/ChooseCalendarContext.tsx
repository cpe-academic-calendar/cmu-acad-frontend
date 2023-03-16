import React from "react";

interface contextType {
    multipleSelect: number[];
    setMultipleSelect: (state: number[]) => void;
    startSemisterMonth: any;
    setStartSemisterMonth: (state: any) => void;
}

const ChooseCalendarContext = React.createContext<contextType> ({
    multipleSelect: [],
    setMultipleSelect: (state) => {},
    startSemisterMonth: null,
    setStartSemisterMonth: (state) => {}
})
 
export default ChooseCalendarContext;