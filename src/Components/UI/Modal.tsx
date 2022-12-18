import styled from "styled-components";
import ExportPopUP from "../ExportPopUp";
import DayPopUp from "../DayPopUp";
import DuplicatePopUp from "../DuplicatePopUp";

const BG = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    margin: 0 auto;
`

function Modal() {
    let props = <DuplicatePopUp />;
    return(
        <BG>
            <Content>
                {props}
            </Content>
        </BG>
    )

}

export default Modal;