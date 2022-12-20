import styled from 'styled-components'

export const AddContainer = styled.div`
    padding: 32px;
    border: 1px;
    background: #FCFCFC;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    width: 609px;
    height: 100%;
`

export const Header = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    color: #F57F17;
`

export const Title = styled.div`
    margin-top: -8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
`

export const SemesterTitle = styled(Title)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
`

export const CloseButton = styled.button`
    color: #F57F17;
    transform: scale(180%);
`

export const CreateButton = styled.input`
    padding: 5px 42px 5px 42px;
    display: flex;
    align-items: center;
    background-color: #F57F17;
    color: white;


`
export const AddForm = styled.form`
    display: grid;
    padding: 0px 50px;
    width: 100%;
`
export const FormInput = styled.input`
    width: 100%;
`

export const MonthInput = styled.select`
    width: 100%;
`

export const DateInput = styled.input`
    width: 100%;
`