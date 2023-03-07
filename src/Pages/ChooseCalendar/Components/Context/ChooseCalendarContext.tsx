import React from "react";

interface contextType {
    multipleSelect: any[],
    setMultipeSelect: (state: any) => void;
}

const ChooseCalendarContext = React.createContext<contextType> ({
    multipleSelect: [],
    setMultipeSelect: () => {}

})
 
export default ChooseCalendarContext;