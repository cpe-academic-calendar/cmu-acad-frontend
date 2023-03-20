import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import ChooseCalendar from "./ChooseCalendar/ChooseCalendar";

const SecondRedirect = () => {
    const calendarId = useParams()
    const authId = calendarId.token
    if(authId){
        localStorage.setItem("token", authId)
    }

    useEffect(() => {
        if(localStorage.getItem("token")){
            window.location.href = `https://cmu-acad.netlify.app/choose_calendar`;
        }else{
            window.location.href = `https://oauth.cmu.ac.th/v2/Authorize.aspx?response_type=code&client_id=MgtZS8S3J9cAhGAUGhbdX9qFHR2mCySSG7pNHbW8&redirect_uri=https://cmu-acad-backend-production.up.railway.app/auth&scope=cmuitaccount.basicinfo&cmuitaccount.personal_id&state=xyz`;
        }
    },[])
    return ( <>
    
    </> );
}
 
export default SecondRedirect;