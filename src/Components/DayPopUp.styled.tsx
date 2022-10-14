import styled from "styled-components";

export const PopUpContainer = styled.div`
  margin-left: 200px;
  margin-top: 200px;
  width: 263px;
  height: 108px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: space-between ;
`;

export const PopUP = styled.div`
    display: flex;
    margin-left: 100px;
`

export const DayInfo = styled.div`
  display: flex-box;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 16px;
`;

export const Header = styled.div`
    display: flex;
    margin-left: 20px;
`
export const HeaderInfo = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #000000;
`;

export const CloseButton = styled.button`
    margin-right: 15px ;
    margin-bottom:86px ;
    margin-top: 15px;
    margin-left:60px;
    color: #F57F17;
`

export const Day = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  /* Primary */

  color: #f57f17;
`;
export const Month = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  /* Text/ Text50 */

  color: rgba(0, 0, 0, 0.5);
`;
export const EventInfo = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  /* Text /Text85 */

  color: rgba(0, 0, 0, 0.85);
`;
