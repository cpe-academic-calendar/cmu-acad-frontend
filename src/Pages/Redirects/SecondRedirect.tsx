import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const SecondRedirect = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    if(token){
        localStorage.setItem("token", token)
    }

    useEffect(() => {
        if(localStorage.getItem("token")){
            // window.location.href = `https://cmu-acad.netlify.app/choose_calendar`;
            navigate('/choose_calendar', { replace: true });
        }
    },[])
    return ( <>
    
    </> );
}
 
export default SecondRedirect;