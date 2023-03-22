import React, { useContext, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../../GlobalContext/GlobalContext";
import LoadingModal from "../Loading/LoadingModal";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";

const SettingCalendar: React.FC = () => {
  const { loading } = useContext(GlobalContext)
  const navigate = useNavigate()

  const [view, setView] = useState('holiday')

  return (
    <div>
    <Container>
      { loading? <LoadingModal /> : null }
        <Count>
            <BackButton onClick={() => {navigate(-1)}}>
                <ArrowBackIosIcon />
                <p>กลับหน้าหลัก</p>
            </BackButton>
            <TableSort>
                <TableName>
                <p>ถังขยะ</p>
                </TableName>
                    <Items>
            <select id="display" value={view} onChange={(e) => (e.target.value)}>
                <option value="holiday">วันหยุดตามราชกิจจานุเบกษา</option>
                <option value="events">วันที่มีเงื่อนไขเกี่ยวข้องกัน</option>
            </select>
            </Items>
            </TableSort>
            <table>
                <tr>
                    <th>No.</th>
                    <th>ชื่อวันหยุด</th>
                    <th>วันที่เริ่มต้นหยุด</th>
                    <th>เดือนที่เริ่มต้นหยุด</th>
                    <th>วันที่สิ้นสุดหยุด</th>
                    <th>เดือนที่สิ้นสุดหยุด</th>
                </tr>
                {/* {
                  data.map((calendar: any, idx) => (
                  <tr key={idx}>
                      <td>{idx}</td>
                      <td>{calendar.name}</td>
                      <td>{Number(dayjs(calendar.start_semester).format("YYYY"))+543}</td>
                      <td>{calendar.delete_at}</td>
                      <td>
                        <div className="icon" 
                        onClick={() => {
                          restoreHandle(calendar)
                        }}
                        >
                          <RestoreIcon />
                        </div>
                      </td>
                      <td>
                        <div className="icon" onClick={() => deleteHandle(calendar)}>
                          <DeleteIcon />
                        </div>
                      </td>
                  </tr>
                  ))
                } */}
            </table>
        </Count>
    </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-top: 64px;
`;

const Count = styled.div`
  height: 12vh;
  th {
    font-weight: 600;
    color: var(--default-holiday-color);
  }
  table {
    align-items: center;
  }
  td,
  th {
    border: 1px solid var(--stroke);
    text-align: center;
    padding: 20px 40px;
  }
  .icon{
    cursor: pointer;
  }
`;

const TableName = styled.div`
  p {
    font-size: 22px;
    font-weight: 600;
    color: var(--primary-color);
  }
  margin-bottom: 24px;
`;

const TableSort = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  input {
    margin-bottom: 12px;
    padding: 8px 12px;
    border: 1px solid var(--stroke);
    border-radius: 30px;
    background-color: white;
  }
`;

const BackButton = styled.div`
    display: flex;
    cursor: pointer;
    color: var(--yellow);
    p{
        margin-right: 8px;
    }
    margin-bottom: 32px;
`

const Items = styled.div`
    display: flex;
    max-width: 100%;
    color: var(--primary-color);
    align-items: center;
    .files{
        display: flex;
        align-items: center;
        margin-right: 16px;
    }
    .static{
        display: flex;
        align-items: center;
        margin-right: 16px;
        p{
            font-size: 16px;
            font-weight: 600;
            color: var(--primary-color);
        }
    }
    select{
        border-radius: 8px;
        border-color: var(--primary-color);
        border-width: 2px;
        border-style: solid;
        padding: 8px;
        font-weight: 700;
    }
`

export default SettingCalendar;
