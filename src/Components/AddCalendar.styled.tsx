import styled from 'styled-components'

export const AddContainer = styled.div`
    padding-top: 12px;
    padding-left: 42px;
    padding-right: 21px;
    border: 1px;
    background: #FCFCFC;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    width: 509px;
    height: 300px;
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
`

export const CreateButton = styled.input`
    padding: 5px 42px 5px 42px;
    background-color: #F57F17;
    color: white;

`
export const AddForm = styled.form`
    margin-top: 5px;
    margin-left: 50px;
`
export const FormInput = styled.input`
    width: 80%;
`