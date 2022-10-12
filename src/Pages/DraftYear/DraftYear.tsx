import * as React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

import {
  NavButton,
  NavBarSt,
  ButtonSave,
  BackButton,
} from "../SettingCalendar/SearchBar.styled";
import { InsertFile } from "./DraftYear.styled";
import Draft from "../../Components/Draft";
import BigCalendar from "react-big-calendar";
import moment from "moment";


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
        <Draft />
      </div>
    );
  }
};

export default DraftYear;
