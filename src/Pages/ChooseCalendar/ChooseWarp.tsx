import ChooseCalendar from "./ChooseCalendar";
import ChooseContextWrapper from "./Components/Context/ChooseContextWrapper";

const ChooseWarp = () => {
    return (
        <ChooseContextWrapper>
            <ChooseCalendar />
        </ChooseContextWrapper>
    )
}

export default ChooseWarp;