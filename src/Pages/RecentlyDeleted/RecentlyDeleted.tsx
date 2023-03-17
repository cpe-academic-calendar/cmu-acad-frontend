import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DeleteIcon from '@mui/icons-material/Delete';

const RecentlyDeleted = () => {
  return (
    <Container>
        <Count>
          <a href="/">
            <BackButton>
                <ArrowBackIosIcon />
                <p>กลับหน้าหลัก</p>
            </BackButton>
            </a>
            <TableSort>
                <TableName>
                <p>ประวัติการลบ</p>
                </TableName>
                    <input type="text" placeholder="ค้นหาปฏิทิน" />
            </TableSort>
            <table>
                <tr>
                    <th>No.</th>
                    <th>ชื่อปฏิทิน</th>
                    <th>ปีการศึกษา</th>
                    <th>ลบล่าสุด</th>
                    <th>ลบ</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td><DeleteIcon /></td>
                </tr>
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
