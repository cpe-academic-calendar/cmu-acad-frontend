import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import RestoreIcon from '@mui/icons-material/Restore';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

import GlobalContext from "../../GlobalContext/GlobalContext";

import dayjs from "dayjs";

import LoadingModal from "../Loading/LoadingModal";

const RecentlyDeleted = () => {
  const [data, setData] = useState<any[]>([]);
  const { loading, setLoading } = useContext(GlobalContext)
  const [name,setName] = useState('')
 
  useEffect(() => {
    const getData = async () => {
        try {
            // const res = await axios.get(`https://cmu-acad-backend-production.up.https.app/calendar/findDeleted/{id}`)
            const res = await axios.get(`http://localhost:4000/calendar/findDeleted?name=${name}`)
            setData(res.data.filter((card: any) => card.delete_at).map((card: any) => card))
        //     res.data.map((card: any) => {
        //       if(card.delete_at)
        //         {
        //           setData((prev) => [...prev, card])
        //         }
        //     })
        }catch(error){
            return error
        }        
    }
    getData()
}, [name])

  const restoreHandle = (calendar: any) => {
    try{
      // axios.put(`https://cmu-acad-backend-production.up.https.app/calendar/restore/${calendar.id}`, calendar).then(
      axios.put(`http://localhost:4000/calendar/restore/${calendar.id}`).then(
        (res) => {
          const newItems = data.filter((cal) => cal.id !== calendar.id);
          setData(newItems);
          setLoading(false);
      })
    }catch(err){
      return err
    }
  }

  const deleteHandle = (calendar: any) => {
    setLoading(true)
    try{
      // axios.delete(`https://cmu-acad-backend-production.up.https.app/calendar/delete-real/${calendar.id}`, calendar).then(
      axios.delete(`http://localhost:4000/calendar/delete-real/${calendar.id}`, calendar).then(
        (res) => {
          const newItems = data.filter((cal) => cal.id !== calendar.id);
          setData(newItems);
          setLoading(false);
      })
    }catch(err){
      return err
    }}

  return (
    <Container>
      { loading? <LoadingModal /> : null }
        <Count>
          <a href="/">
            <BackButton>
                <ArrowBackIosIcon />
                <p>กลับหน้าหลัก</p>
            </BackButton>
            </a>
            <TableSort>
                <TableName>
                <p>ถังขยะ</p>
                </TableName>
                    <input type="text" placeholder="ค้นหาปฏิทิน" onChange={(e) => setName(e.target.value)} />
            </TableSort>
            <table>
                <tr>
                    <th>No.</th>
                    <th>ชื่อปฏิทิน</th>
                    <th>ปีการศึกษา</th>
                    <th>ลบล่าสุด</th>
                    <th>กู้คืน</th>
                    <th>ลบ</th>
                </tr>
                {
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
                }
            </table>
        </Count>
    </Container>
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

export default RecentlyDeleted;
