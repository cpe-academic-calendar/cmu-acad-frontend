import styled from "styled-components";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';

const ProfileOption = () => {
  return (
    <DraftOption>
        <a href="/admin">
          <button><PeopleAltIcon /><p>จัดการผู้ใช้</p></button>
        </a>
        <a href="/recently-deleted">
          <button><HistoryIcon /><p>ประวัตการลบ</p></button>
        </a>
      <div className="item">
        <a href="https://oauth.cmu.ac.th/v2/Authorize.aspx?response_type=code&client_id=MgtZS8S3J9cAhGAUGhbdX9qFHR2mCySSG7pNHbW8&redirect_uri=http://localhost:4000/auth&scope=cmuitaccount.basicinfo&cmuitaccount.personal_id&state=xyz">
        <button><LogoutIcon /><p>ออกจากระบบ</p></button>
        </a>
      </div>
    </DraftOption>
  );
};

const DraftOption = styled.div`
  position: absolute;
  align-items: center;
  background-color: var(--background);
  color: #000;
  font-size: medium;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
    button{
      display: flex;
    justify-content: space-between;
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
