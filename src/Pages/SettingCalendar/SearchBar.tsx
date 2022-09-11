import MoreVertIcon from "@mui/icons-material/MoreVert";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import React from "react";
import {
  NavButton,
  NavBarSt,
  ButtonSave,
  BackButton,
  SettingTable,
  Table,
  TableHead,
  Head1,
  Head2,
  SettingDate,
  Setting1,
  Setting2,
  Setting3,
  Setting4,
  Setting5,
  Setting6,
  Setting7,
  Setting8,
  Setting9,
  Setting10,
  SettingName,
  AdjustDate,
  ButtonSelect,
  ButtonChange,
  HeadName,
  HeadName2,
  HeadName3,
  AdvanceButton,
  AdvanceSelet,
  AdjustButton,
  HeadTag,
  CalendarIcon,
  SettingDay,
} from "./SearchBar.styled";

const SearchBar: React.FC = () => {
  return (
    <div>
      <NavBarSt>
        <NavButton>
          <BackButton> Back</BackButton>
          <ButtonSave>Save Changes</ButtonSave>
        </NavButton>
      </NavBarSt>
      <HeadName>
        <CalendarIcon >
        <CalendarTodayIcon />
        </CalendarIcon>
        <HeadTag>
          <HeadName2>Holiday Settings</HeadName2>
          <HeadName3>วันหยุดราชการ/ วันหยุดราชกิจจานุเบกษา</HeadName3>
        </HeadTag>
      </HeadName>
      <SettingTable>
        <Table>
          <TableHead>
            <Head1>ชื่อวันหยุด</Head1>
            <Head2>วันที่เริ่มวันหยุด</Head2>
          </TableHead>
          <Setting1>
            <SettingDay>
            <SettingName>วันขึ้นปีใหม่</SettingName>
            </SettingDay>
            <SettingDate>
              <AdjustDate>
                <span>1</span>
                <span>มกราคม</span>
                <span>1 วัน </span>
                <AdjustButton>
                  <MoreVertIcon />
                </AdjustButton>
              </AdjustDate>
            </SettingDate>
          </Setting1>
          <Setting2>
            <SettingName> วันจักรี</SettingName>
            <SettingDate>
              <AdjustDate>
                <span>1</span>
                <span>มกราคม </span>
                <span>1 วัน </span>
                <AdjustButton>
                  <MoreVertIcon />
                </AdjustButton>
              </AdjustDate>
            </SettingDate>
          </Setting2>
          <Setting3>
            <SettingName> วันสงกรานต์</SettingName>
            <SettingDate>
              <AdjustDate>
                <span>1</span>
                <span>มกราคม</span>
                <span>1 วัน </span>
                <AdjustButton>
                  <MoreVertIcon />
                </AdjustButton>
              </AdjustDate>
            </SettingDate>
          </Setting3>
          <Setting4>
            <SettingName> วันฉัตรมงคล</SettingName>
            <SettingDate>
              <AdjustDate>
                <span>1</span>
                <span>มกราคม</span>
                <span>1 วัน </span>
                <AdjustButton>
                  <MoreVertIcon />
                </AdjustButton>
              </AdjustDate>
            </SettingDate>
          </Setting4>
          <Setting5>
            <SettingName>
              วันเฉลิมพระชนมพรรษาสมเด็จพระนางเจ้าฯ พระบรมราชินี
            </SettingName>
            <SettingDate>
              <AdjustDate>
                <span>1</span>
                <span>มกราคม</span>
                <span>1 วัน </span>
                <AdjustButton>
                  <MoreVertIcon />
                </AdjustButton>
              </AdjustDate>
            </SettingDate>
          </Setting5>
          <Setting6>
            <SettingName> วันเข้าพรรษา</SettingName>
            <SettingDate>
              <AdjustDate>
                <span>1</span>
                <span>มกราคม</span>
                <span>1 วัน </span>
                <AdjustButton>
                  <MoreVertIcon />
                </AdjustButton>
              </AdjustDate>
            </SettingDate>
          </Setting6>
          <Setting7>
            <SettingName> วันเฉลิมพระชนมพรรษา ร.10</SettingName>
            <SettingDate>
              <AdjustDate>
                <span>1</span>
                <span>มกราคม</span>
                <span>1 วัน </span>
                <AdjustButton>
                  <MoreVertIcon />
                </AdjustButton>
              </AdjustDate>
            </SettingDate>
          </Setting7>
          <Setting8>
            <SettingName> วันแม่แห่งชาติ</SettingName>
            <SettingDate>
              <AdjustDate>
                <span>1</span>
                <span>มกราคม</span>
                <span>1 วัน </span>
                <AdjustButton>
                  <MoreVertIcon />
                </AdjustButton>
              </AdjustDate>
            </SettingDate>
          </Setting8>
          <Setting9>
            <SettingName> วันคล้ายวันสวรรคต ร.9</SettingName>
            <SettingDate>
              <AdjustDate>
                <span>1</span>
                <span>มกราคม</span>
                <span>1 วัน </span>
                <AdjustButton>
                  <MoreVertIcon />
                </AdjustButton>
              </AdjustDate>
            </SettingDate>
          </Setting9>
          <Setting10>
            <SettingName> วันปิยมหาราช</SettingName>
            <SettingDate>
              <AdjustDate>
                <span>1</span>
                <span>มกราคม</span>
                <span>1 วัน </span>
                <AdjustButton>
                  <MoreVertIcon />
                </AdjustButton>
              </AdjustDate>
            </SettingDate>
          </Setting10>
          <ButtonChange>
            <ButtonSelect>เพิ่มวันหยุดใหม่ +</ButtonSelect>
          </ButtonChange>
          <AdvanceSelet>
            <AdvanceButton>Advance</AdvanceButton>
          </AdvanceSelet>
        </Table>
      </SettingTable>
    </div>
  );
};

export default SearchBar;
