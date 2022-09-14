import React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

import {
  NavButton,
  NavBarSt,
  ButtonSave,
  BackButton,
} from "../SettingCalendar/SearchBar.styled";
import { InsertFile } from "./DraftYear.styled";
import Draft from "../../Components/Draft";

const DraftYear: React.FC = () => {
  return (
    <div>
      <NavBarSt>
        <InsertFile>
          <InsertDriveFileOutlinedIcon />
        </InsertFile>
        <NavButton>
          <BackButton> Back</BackButton>
          <CalendarTodayOutlinedIcon />
          <ButtonSave>Save Changes</ButtonSave>
        </NavButton>
      </NavBarSt>
      {/* <Draft /> */}
    </div>
  );
};

export default DraftYear;
