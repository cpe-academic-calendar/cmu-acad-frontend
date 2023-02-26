import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
    month = Math.floor(month)
    //This year is current year
    const year = dayjs().year(); //definetly change up to input
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCount = 0 - firstDayOfTheMonth;
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
        currentMonthCount++;
        return dayjs(new Date(year, month, currentMonthCount));
        });
    });
    return daysMatrix;
}