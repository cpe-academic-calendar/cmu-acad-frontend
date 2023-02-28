import { ContextWrapper } from './Components/Context/ContextWarpper';
import AddCalendar from '../ChooseCalendar/Components/AddCalendar';
import CalendarEdit from './CalendarEdit';
const CalendarWarp = () => {
    return ( 
    <ContextWrapper>
        <CalendarEdit />
    </ContextWrapper> 
    );
}
 
export default CalendarWarp;