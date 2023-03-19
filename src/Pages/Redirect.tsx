import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

const Redirect = () => {
    useEffect(() => {
        window.location.href = 'http://localhost:3000/oauth';
    },[])

    return ( <>

    </> );
}
 
export default Redirect;