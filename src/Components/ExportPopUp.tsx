import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';

const PopUp = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    width: 30vw;
    overflow: auto;
`

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
`

const Content = styled.div`
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 26px;
    padding-bottom: 26px;
    background-color: #fff;
    .item{
        color: #111;
        font-size: large;
        display: flex;
        flex-direction: column;
        text-align: center;
        img{
            width: 80px;
            margin-bottom: 12px;
        }
    }
`

function ExportPopUp() {
    return ( 
        <PopUp>
            <MenuBar>
                <p>นำออกเป็นไฟล์</p>
                <CloseIcon />
            </MenuBar>
            <Content>
                <div className="item">
                    <img src="/Images/Excel-Transparent-Background.png" alt="Excel" />
                    <p>Excel</p>
                </div>
                <div className="item">
                    <img src="/Images/ics.png" alt="ICS" />
                    <p>ICS</p>
                </div>
                <div className="item">
                    <img src="/Images/pngwing.com.png" alt="Excel" />
                    <p>PDF</p>
                </div>
            </Content>
        </PopUp>);
}

export default ExportPopUp;