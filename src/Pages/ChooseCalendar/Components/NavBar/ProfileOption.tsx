import styled from "styled-components";

const ProfileOption = () => {
  return (
    <DraftOption>
      <div className="hover:bg-gray-200">
        <a href="https://oauth.cmu.ac.th/v2/Authorize.aspx?response_type=code&client_id=MgtZS8S3J9cAhGAUGhbdX9qFHR2mCySSG7pNHbW8&redirect_uri=http://localhost:4000/auth&scope=cmuitaccount.basicinfo&cmuitaccount.personal_id&state=xyz">
          <button>ออกจากระบบ</button>
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
  padding: 16px;
  border-radius: 12px;
  p {
    margin: 2px;
  }
`;

export default ProfileOption;
