import dayjs from "dayjs";

export function getMonth(month = dayjs().month(), year = dayjs().year()) {
    month = Math.floor(month)
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCount = 0 - firstDayOfTheMonth;
    const daysMatrix = new Array(70).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
        currentMonthCount++;
        console.log(new Date(year,month,currentMonthCount))
        return dayjs(new Date(year, month, currentMonthCount));
        });
    });
    return daysMatrix;
}