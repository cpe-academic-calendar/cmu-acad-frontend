import dayjs from 'dayjs'

interface DateFromDayjs{
    day: dayjs.Dayjs[][];
  }

const Day:React.FC<DateFromDayjs> = (day) => {
    return ( <div>
    </div> );
}
 
export default Day;