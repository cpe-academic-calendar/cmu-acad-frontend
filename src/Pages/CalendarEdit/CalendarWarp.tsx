import { ContextWrapper } from './Components/Context/ContextWarpper';
import CalendarEdit from './CalendarEdit';
const CalendarWarp = () => {
    return ( 
    <ContextWrapper>
        <CalendarEdit />
    </ContextWrapper> );
}
 
export default CalendarWarp;