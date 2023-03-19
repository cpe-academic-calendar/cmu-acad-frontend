import React from "react";

interface contextType {
    multipleSelect: number[];
    setMultipleSelect: (state: number[]) => void;
    startSemisterMonth: any;
    setStartSemisterMonth: (state: any) => void;
    search: string;
    setSearch: (input: string) => void;
}

const ChooseCalendarContext = React.createContext<contextType> ({
    multipleSelect: [],
    setMultipleSelect: (state) => {},
    startSemisterMonth: null,
    setStartSemisterMonth: (state) => {},
    search: '',
    setSearch: (input) => {}
})
 
export default ChooseCalendarContext;