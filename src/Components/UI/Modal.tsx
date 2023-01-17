import styled from "styled-components";

const BG = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
`

const Content = styled.div`
    margin: 0 auto;
    z-index: 10;
`

const Modal: React.FC<any> = ( props ) =>{
    return(
        <BG>
            <Content>
                {props.children}
            </Content>
        </BG>
    )

}

export default Modal;