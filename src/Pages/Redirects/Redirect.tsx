const Redirect = () => {
            window.location.href = `https://oauth.cmu.ac.th/v2/Authorize.aspx?response_type=code&client_id=MgtZS8S3J9cAhGAUGhbdX9qFHR2mCySSG7pNHbW8&redirect_uri=https://cmu-acad-backend-production.up.railway.app/auth&scope=cmuitaccount.basicinfo&cmuitaccount.personal_id&state=xyz`;
    return ( <>

    </> );
}
 
export default Redirect;