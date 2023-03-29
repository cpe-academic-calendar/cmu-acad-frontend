import styled from "styled-components";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { CalendarPath } from "../../../path";

const ProfileOption = () => {

  const [cmuitaccount, setCmuitaccount] = useState('')
  const [role, setRole] = useState('')

  React.useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get(`https://misapi.cmu.ac.th/cmuitaccount/v1/api/cmuitaccount/basicinfo`,{
        headers:{
            'Authorization' : `Bearer ${token}`
        }}).then(res => {
            axios.get(`${CalendarPath.local}/user/findByName/${res.data.cmuitaccount}`,
            {headers:{
                'Validate-header' : `${res.data.cmuitaccount}`
            }})
            setCmuitaccount(res.data.cmuitaccount)
        })
},[])

axios.get(`${CalendarPath.local}/permission/getAccessUser/${cmuitaccount}`).then(
  (res) =>
    {
      setRole(res.data[0].roles)
    }
)

  const handleLogOut = () => {
    localStorage.removeItem("token")
    // window.location.reload()
    window.location.href = "https://cmu-acad.netlify.app/"
  }

  return (
    <DraftOption>
      {
        (role==='admin')?
        <>
        <a href="/admin">
          <button><PeopleAltIcon /><p>จัดการผู้ใช้</p></button>
        </a>
        </>
        :null
      }
        <a href="/recently-deleted">
          <button><DeleteIcon /><p>ถังขยะ</p></button>
        </a>
        <a href="/setting">
          <button><SettingsIcon /><p>ตั้งค่า</p></button>
        </a>
      <div className="item">
        <button onClick={handleLogOut}><LogoutIcon /><p>ออกจากระบบ</p></button>
      </div>
    </DraftOption>
  );
};

const DraftOption = styled.div`
  position: absolute;
  justify-content: start;
  background-color: var(--background);
  color: #000;
  font-size: medium;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
    button{
      display: flex;
      width: 100%;
      padding: 24px;
      margin-left: 4px;
      margin-right: 4px;
    &:hover{
      background-color: var(--hover);
      border-radius: 12px;
    }
    p{
      margin-left: 8px;
    }

  }
`;

export default ProfileOption;
