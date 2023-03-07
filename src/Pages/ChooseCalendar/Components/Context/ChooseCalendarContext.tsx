import React from "react";

interface contextType {
    multipleSelect: boolean,
    setMultipeSelect: (state: boolean) => void;
}

const ChooseCalendarContext = React.createContext<contextType> ({
    multipleSelect: false,
    setMultipeSelect: () => {}

})
 
export default ChooseCalendarContext;