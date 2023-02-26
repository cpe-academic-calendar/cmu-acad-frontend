import * as React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { DraftComponent, InsertFile } from "./DraftYear.styled";
import Draft from "../CalendarEdit/Components/YearCalendar";


class DraftYear extends React.Component {
  render(){
    return (
      <div>
        <div>
          <InsertFile>
            <InsertDriveFileOutlinedIcon />
          </InsertFile>
          <div>
            <div>
              {" "}
              Back
              <div>Save Changes</div>
            </div>
            <CalendarTodayOutlinedIcon />
          </div>
        </div>
        <DraftComponent>
        <Draft />
        </DraftComponent>
      </div>
    );
  }
};

export default DraftYear;
