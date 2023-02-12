import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';

// type buttonProps = {
//     closeHandle: () => void;
// }

const DuplicatePopUp :React.FC = ( {} ) => {
    return ( 
    <Modal>
        <PopUp>
            <MenuBar>
                <Heading>
                    <h1>Duplicate</h1>
                    <p>ทำซ้ำปฏิทินเดิม</p>
                </Heading>
                <CloseIcon />
            </MenuBar>
            <CalendarName>
                <input placeholder="ชื่อปฏิทินใหม่" />
                <button>Duplicate</button>
            </CalendarName>
        </PopUp>
    </Modal>
    );
}

const Modal = styled.div`
    padding: 48px;
    position: absolute;
    z-index: 99;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,0.4);
    width: 100vw;
    height: 100vh;
`

const PopUp = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    width: 40vw;
    overflow: auto;
    border-radius: 10px;
    display: flex;
    background-color: #fff;
    padding: 4vh;
    align-items: center;
`

const MenuBar = styled.div`
    display: flex;
    color: var(--primary-color);
    width: 100%;
    justify-content: space-between;
`

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        color: var(--primary-color);
        font-size: x-large;
        font-weight: 600;
    }
    p{
        color: #000;
    }
`

const CalendarName = styled.form`
    max-width: fit-content;
    display: flex;
    flex-direction: column;
    padding-left: 2vh;
    padding-right: 2vh;
    input{
        border-radius: 30px;
        padding: 8px;
        border: 1px solid var(--stroke);
        margin-bottom: 2vh;
    }
    input:hover{
        border: 1px solid var(--primary-color);
    }
    button{
        background-color: var(--primary-color);
        color: var(--background);
        border-radius: 30px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: auto;
        padding-right: auto;
    }
`

export default DuplicatePopUp;