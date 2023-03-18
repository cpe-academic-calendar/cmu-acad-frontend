import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/choose_calendar')
    })

    return ( <>
    </> );
}
 
export default Redirect;