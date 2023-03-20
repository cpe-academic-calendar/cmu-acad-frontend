import styled from "styled-components";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';

const ProfileOption = () => {

  const handleLogOut = () => {
    localStorage.removeItem("token")
    window.location.reload()
  }

  return (
    <DraftOption>
        <a href="/admin">
          <button><PeopleAltIcon /><p>จัดการผู้ใช้</p></button>
        </a>
        <a href="/recently-deleted">
          <button><DeleteIcon /><p>ถังขยะ</p></button>
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
