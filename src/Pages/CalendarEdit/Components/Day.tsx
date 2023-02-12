import dayjs from 'dayjs'
import styled from 'styled-components';

interface DateFromDayjs{
    day: dayjs.Dayjs;
  }

const Day:React.FC<DateFromDayjs> = ({day}) => {
  return (
    <div>
      <LiteralDay>
        {day.format("D")}
          { day.format('D') === "1" && (
            <div>
              {day.format("MMM")}
            </div>
          )}
        </LiteralDay>

    </div>
  )
}

const LiteralDay = styled.div`
  display: flex;
  height: 100%;
  padding: 14px 14px;
  border-color: var(--stroke);
  border-width: 0px 0px 1px 1px;
  border-style: solid;
  .work-day{
    background: #FFFFFF;
  }
`
 
export default Day;