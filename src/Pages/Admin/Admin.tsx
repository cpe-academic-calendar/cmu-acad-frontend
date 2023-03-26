import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { CalendarPath } from "../path";
import { useNavigate } from "react-router-dom";

interface accProps {
  id: number;
  cmuitaccount: string;
}

const Admin = () => {
  const nav = useNavigate();

  const [data, setData] = useState([
    {
      id: 0,
      cmuitaccount: "",
    },
  ]);
  const [addModal, setAddModal] = useState(false);
  const [newUser, setNewUser] = useState("");
  const [status, setStatus] = useState("Admin");
  const [errorMessage, setErrorMessage] = useState(false);
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    axios
      .get(`${CalendarPath.local}/permission/findAll`)
      .then((res) => setData(res.data));
  }, []);

  let error_message = null;

  const handleDelete = (item: number) => {
    axios
      .delete(`${CalendarPath.local}/permission/removePermission/${item}`)
      .then((res) => {
        axios
          .get(`${CalendarPath.local}/permission/findAll`)
          .then((res) => setData(res.data));
      });
  };

  const handleAddUser = (e: any) => {
    e.preventDefault();
    if (newUser === "") {
      setErrorMessage(true);
    } else {
      const user = {
        cmuitaccount: newUser,
        status: status,
      };
      axios
        .post(`${CalendarPath.local}/permission/setEdit`, user)
        .then((res) => {
          axios
            .get(`${CalendarPath.local}/permission/findAll`)
            .then((res) => setData(res.data));
          setErrorMessage(false);
          setAddModal((prev) => !prev);
        });
    }
  };

  if (errorMessage) {
    error_message = <p>จำเป็นต้องกรอก</p>;
  }

  return (
    <>
      {addModal ? (
        <PopUp>
          <MenuBar>
            <Heading>
              <h1>Add user</h1>
              <p>เพิ่มผู้ใช้ใหม่</p>
            </Heading>
            <div onClick={() => setAddModal((prev) => !prev)}>
              <CloseIcon />
            </div>
          </MenuBar>
          <Inputs>
            <input
              type="text"
              placeholder="อีเมลผู้ใช้ใหม่"
              value={newUser}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewUser(e.target.value)
              }
            />
            {error_message}
          </Inputs>
          <Inputs>
            <button onClick={handleAddUser}>เพิ่มผู้ใช้</button>
          </Inputs>
        </PopUp>
      ) : null}
      <Container>
        <Count>
          <BackButton onClick={() => nav(-1)}>
            <ArrowBackIosIcon />
            <p>กลับหน้าหลัก</p>
          </BackButton>
          <TableSort>
            <TableName>
              <p>จัดการบัญชีผู้ใช้</p>
            </TableName>
            <Inputs>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setAddModal((prev) => !prev);
                }}
              >
                <AddIcon />
                เพิ่มบัญชีผู้ใช้
              </button>
            </Inputs>
          </TableSort>
          <table>
            <tr>
              <th>ID</th>
              <th>Cmu account</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
            {data.map((acc) => (
              <tr>
                <td>{acc.id}</td>
                <td>{acc.cmuitaccount}</td>
                <td>
                  <select
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Admin">แอดมิน</option>
                    <option value="User">ผู้แก้ไข</option>
                  </select>
                </td>
                <td>
                  <div onClick={() => setValidate((prev) => !prev)}>
                    <DeleteIcon />
                    {validate ? (
                      <PopUp>
                        <MenuBar>
                          <Heading>
                            <h1>Warning</h1>
                            <p>ยืนยันลบผู้ใช้</p>
                          </Heading>
                        </MenuBar>
                        <Inputs>
                          <button onClick={() => handleDelete(acc.id)}>
                            ลบผู้ใช้
                          </button>
                        </Inputs>
                        <Inputs onClick={() => setValidate((prev) => !prev)}>
                          <button>
                            ยังก่อน
                          </button>
                        </Inputs>
                      </PopUp>
                    ) : null}
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </Count>
      </Container>
    </>
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
  p {
    margin-right: 8px;
  }
  margin-bottom: 32px;
`;

const Modal = styled.div`
  padding: 48px;
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
`;

const PopUp = styled.div`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 40;
  left: 25%;
  top: 20%;
  width: 50%;
  height: 40%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 100vw;
  overflow: auto;
  border-radius: 10px;
  background-color: #fff;
  padding: 4vh;
  align-items: center;
`;

const MenuBar = styled.div`
  display: flex;
  color: var(--primary-color);
  width: 100%;
  justify-content: space-between;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: var(--primary-color);
    font-size: x-large;
    font-weight: 600;
  }
  p {
    color: #000;
  }
`;

const Inputs = styled.div`
  input {
    border-radius: 30px;
    padding: 8px;
    border: 1px solid var(--stroke);
    margin-bottom: 2vh;
  }
  input:hover {
    border: 1px solid var(--primary-color);
  }
  button {
    background-color: var(--primary-color);
    color: var(--background);
    border-radius: 30px;
    padding: 12px 14px;
    display: flex;
    justify-content: space-between;
  }
  p {
    color: var(--error);
  }
`;

export default Admin;
