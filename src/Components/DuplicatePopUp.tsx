import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';

const DuplicatePopUp :React.FC = () => {
    return ( <PopUp>
        <Exit>
            <CloseIcon />
        </Exit>
        <Title>Duplicate</Title>
    </PopUp> );
}

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
`

// const Row = styled.div`
//     display: flex;
//     justify-content: space-between;
// `

const Exit = styled.div`
    color: var(--primary-color);
    width: 100%;
    justify-content: center;
`

const Title = styled.h1`
    color: var(--primary-color);
`

export default DuplicatePopUp;