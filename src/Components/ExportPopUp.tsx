import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import GlobalContext from "../GlobalContext/GlobalContext";
import { useContext } from "react";

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
            <p>ร่างปฏิทินการศึกษา</p>
            <DownloadIcon />
          </div>
          <div className="item">
            <p>สรุปวันหยุดและวันหยุดชดเชย</p>
            <DownloadIcon />
          </div>
        </Content>
      </PopUp>
    </Modal>
  );
};

export default ExportPopUp;