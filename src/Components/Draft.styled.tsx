import styled from "styled-components";

export const DraftContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
margin: 149px 50px 14px 250px;
grid-gap: 100px 10px;
`;

export const CalendarContainer = styled.div`
  .date-button {
    background-color: white;
    border: none;
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  width: 25px;
`;

export const Calendar = styled.div``;

export const CalendarMonth = styled.div``;

export const LabelHeader = styled.div`
  width: (100%/7);
`;

export const MonthComponent = styled.div`
  color: #F57F17;
`;
