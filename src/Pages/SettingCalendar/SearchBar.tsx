import MoreVertIcon from "@mui/icons-material/MoreVert";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import React from "react";
import styled from "styled-components";
const SearchBar: React.FC = () => {
  return (
    <div>
      <NavBarSt>
          <NavButton>
            <BackButton> Back</BackButton>
            <ButtonSave>Save Changes</ButtonSave>
          </NavButton>
        </NavBarSt>
      <MenuDisplay>
        <div className="menu">
          <MenuItems className="active">
            <CalendarTodayIcon className="icon" />
            <h2>Holiday Settings</h2>
          </MenuItems>
          test
        </div>
        <div className="content">
          <Header>
            <CalendarIcon >
            <CalendarTodayIcon />
            </CalendarIcon>
            <HeadTag>
              <HeadName2>Holiday Settings</HeadName2>
              <HeadName3>วันหยุดราชการ/ วันหยุดราชกิจจานุเบกษา</HeadName3>
            </HeadTag>
          </Header>
        </div>
      </MenuDisplay>
    </div>
  );
};

const MenuDisplay = styled.div`
  display: flex;
  flex-direction: row;
  .menu{
    width: 15%;
    flex-direction: column;
  }
  .content{
    width: 75%
  }
`

const ButtonSave = styled.button`
  padding-right: 40%;
  padding-left: 40%;
  padding-top: 6%;
  padding-bottom: 6%;
  display: inline-block;
  flex-direction: row;
  justify-content: center;
  white-space: nowrap;
  background-color: #f57f17;
  text-align: center;
  border-radius: 15px;
  border: none;
  margin-left: 300%;
  margin-left: 300%;
  margin-top: 10%;
  margin-bottom: 10%;
  color: #fcfcfc; ;
`;
const NavBarSt = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

const NavButton = styled.div`
  margin-left: 10%;
  align-items: center;
  display: flex;
  gap: 450%;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
`;
const BackButton = styled.button`
  border: none;
  margin-right: 300%;
  color: #f57f17;
  background-color: #ffffff;
`;

const Header = styled.div`
  margin-top: 3%;
  margin-left: 10%;
  display: flex;
  margin-bottom: 35px;
`;

const HeadName2 = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #f57f17;
  padding: 0;
  margin: 0;
`;

const HeadName3 = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.85);
  padding: 0;
  margin: 0;
`;

const CalendarIcon = styled.div`
  color: #f57f17;
`;

const HeadTag = styled.div``;

const MenuItems = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 26px;
  border-radius: 0 15px 15px 0;
  .active{
    background-color: var(--primary-color);
    h2{
      color: white;
    }
  }
  .default{
    .active{
    background-color: var(--primary-color);
    h2{
      color: var(--primary-color);
    }
  }
  }
  .icon{
    margin-right: 8px;
  }
`

export default SearchBar;
