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
  const calendar = useParams()
  useEffect(() => {
    const getData = async () => {
      await axios.get(`https://cmu-acad-backend-production.up.railway.app/calendar/findHoliday/${calendar.id}`)
        .then((res) => {
          setEvent(res.data[0].events)
        })
    }
    const getEvent = async () => {
      await axios.get(`https://cmu-acad-backend-production.up.railway.app/calendar/findEvent/${calendar.id}`)
        .then((res) => {
          setScheduleData(res.data[0].events)
        })
    }
    getEvent()
    getData()
  }, [])

  const headers = [
    { label: "วัน", key: "day" },
    { label: "ชื่อวันหยุด", key: "holidayName" },
  ];

  const headers2 = [
    {
      label: 'ชื่อวัน', key: 'eventName'
    },
    {
      label: 'วัน', key: "eventDate"
    }
  ]

  useEffect(() => {
    event.forEach((ed, idx) => {
      data.push({
        "holidayName": ed.event_name, "day": new Date(`${ed.date}`).toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
        })
      })
    })

    scheduleData.forEach((ed, idx) => {
      calendar_ev.push({
        "eventName": ed.event_name, "eventDate": `${new Date(ed.date).toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long',
        })} - ${new Date(ed.end_date).toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long'
        })}`
      })
    })
    setSchedule(calendar_ev)
    seteventData(data)

  }, [event,scheduleData])


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
          <div className="item">
            <p>โครงร่างปฏิทินการศึกษา</p>
            <DownloadIcon />
          </div>
          <div className="item">
            <p>สรุประยะเวลาที่ใช้สำหรับการเรียนการสอน</p>
            <DownloadIcon />
          </div>
          <div className="item">
            <CSVLink filename='ร่างปฏิทิน' data={schedule} headers={headers2}>
              <p>ร่างปฏิทินการศึกษา</p>
            </CSVLink>
            <DownloadIcon />
          </div>
          <div className="item" >
            <CSVLink filename='สรุปวันหยุด' data={eventData} headers={headers}>
              สรุปวันหยุดและวันหยุดชดเชย
            </CSVLink>
            <DownloadIcon />
          </div>
        </Content>
      </PopUp>
    </Modal>
  );
};

export default ExportPopUp;
