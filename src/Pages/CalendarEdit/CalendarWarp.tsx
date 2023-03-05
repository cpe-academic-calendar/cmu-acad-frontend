import { CalendarContextWrapper } from './Components/Context/CalendarContextWrapper';
import CalendarEdit from './CalendarEdit';
const CalendarWarp = () => {
    return ( 
    <CalendarContextWrapper>
        <CalendarEdit />
    </CalendarContextWrapper> 
    );
}
 
export default CalendarWarp;