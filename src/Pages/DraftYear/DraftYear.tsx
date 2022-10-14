import * as React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

import {
  NavButton,
  NavBarSt,
  ButtonSave,
  BackButton,
} from "../SettingCalendar/SearchBar.styled";
import { DraftComponent, InsertFile } from "./DraftYear.styled";
import Draft from "../../Components/Draft";


class DraftYear extends React.Component {
  render(){
    return (
      <div>
        <NavBarSt>
          <InsertFile>
            <InsertDriveFileOutlinedIcon />
          </InsertFile>
          <NavButton>
            <BackButton>
              {" "}
              Back
              <ButtonSave>Save Changes</ButtonSave>
            </BackButton>
            <CalendarTodayOutlinedIcon />
          </NavButton>
        </NavBarSt>
        <DraftComponent>
        <Draft />
        </DraftComponent>
      </div>
    );
  }
};

export default DraftYear;
