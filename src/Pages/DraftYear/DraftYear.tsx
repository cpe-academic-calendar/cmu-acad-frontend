import React from "react";
import {
  NavButton,
  NavBarSt,
  ButtonSave,
  BackButton,
}from '../SettingCalendar/SearchBar.styled'

const DraftYear: React.FC = () => {
  return (
    <div>
      <NavBarSt>
        <NavButton>
          <BackButton> Back</BackButton>
          <ButtonSave>Save Changes</ButtonSave>
        </NavButton>
      </NavBarSt>
    </div>
  );
};

export default DraftYear;
