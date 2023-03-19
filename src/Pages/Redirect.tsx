import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {

    useEffect(() => {
        window.location.href = 'http://localhost:3000/choose_calendar';
    },[])

    return ( <>

    </> );
}
 
export default Redirect;