import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import GlobalContext from "../GlobalContext/GlobalContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
import { useParams } from "react-router-dom";

const PopUp = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  width: 28vw;
  margin-top: 26vh;
  overflow: auto;
`;

const MenuBar = styled.div`
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: var(--primary-color);
  color: #fff;
`;

const Content = styled.div`
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 26px;
  padding-bottom: 26px;
  background-color: #fff;
  .header {
    color: #808080;
    display: flex;
    align-items: center;
    img {
      width: 32px;
      margin-right: 16px;
    }
    margin-bottom: 16px;
  }
  .item {
    display: flex;
    padding: 8px;
    margin-bottom: 16px;
    &:hover {
      background-color: var(--hover);
      cursor: pointer;
      border-radius: 30px;
    }
    p {
      margin-right: 8px;
      font-size: 16px;
    }
  }
`;

const Modal = styled.div`
  z-index: 999;
    position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
`;

const ExportPopUp: React.FC = () => {
  const { setExportModal } = useContext(GlobalContext)
  const [event, setEvent] = useState<any[]>([])
  const [eventData, seteventData] = useState<any[]>([])
  const [scheduleData, setScheduleData] = useState<any[]>([])
  const [schedule, setSchedule] = useState<any[]>([])

  let data: any[] = []
  let calendar_ev: any[] = []
  const {id} = useParams()

  const handleConExport = () => {
    // window.location.href = `https://cmu-acad-backend-production.up.railway.app/calendar/exportStudy${id}`;
    // axios.get(`https://cmu-acad-backend-production.up.railway.app/calendar/exportStudy${id}`).then((res)=>{
      window.location.href = `https://cmu-acad-backend-production.up.railway.app/calendar/exportStudy/${id}`;
      axios.get(`https://cmu-acad-backend-production.up.railway.app/calendar/exportStudy/${id}`).then((res)=>{
      return res.data
    })
  }

  const handleCalendarDraft = () => {
    window.location.href = `https://cmu-acad-backend-production.up.railway.app/calendar/exportEvent/${id}`;
    axios.get(`https://cmu-acad-backend-production.up.railway.app/calendar/exportEvent/${id}`).then((res)=>{
      return res.data
    })
  }

  const handleSummarize = () => {
    window.location.href = `https://cmu-acad-backend-production.up.railway.app/calendar/exportHoliday/${id}`;
    axios.get(`https://cmu-acad-backend-production.up.railway.app/calendar/exportHoliday/${id}`).then((res)=>{
      return res.data
    })
  }

  return (
    <Modal>
      <PopUp>
        <MenuBar>
          <p>นำออก</p>
          <div onClick={() => setExportModal(false)}>
            <CloseIcon />
          </div>
        </MenuBar>
        <Content>
          <div className="header">
            <img src="/Images/Excel-Transparent-Background.png" alt="Excel" />
            <p>ไฟล์สกุล .xlsx</p>
          </div>
          <div className="item" onClick={handleConExport}>
            <p>สรุประยะเวลาที่ใช้สำหรับการเรียนการสอน</p>
            <DownloadIcon />
          </div>
          <div className="item">
            <div onClick={handleCalendarDraft}>
              <p>ร่างปฏิทินการศึกษา</p>
            </div>
            <DownloadIcon />
          </div>
          <div className="item" >
            <div onClick={handleSummarize}>
              สรุปวันหยุดและวันหยุดชดเชย
            </div>
            <DownloadIcon />
          </div>
        </Content>
      </PopUp>
    </Modal>
  );
};

export default ExportPopUp;