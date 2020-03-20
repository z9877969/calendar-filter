import moment from "moment";

export const dateNow = moment(Date.now())
  .format("YYYY,MM,D")
  .split(",")
  .map(el => +el);
dateNow[1] = dateNow[1] - 1;

export const parseDateToTwoDigitId = ([year, month, date]) => {
  const monthId = month < 10 ? `0${month}` : `${month}`;
  const dateId = date < 10 ? `0${date}` : `${date}`;
  return `${year}_${monthId}_${dateId}`;
};

export const changeIdToFullNumber = id => Number(id.split("_").join(""));

export const parseTwoDigitIdToDateArr = id =>
  id.split("_").map(el => Number(el));

export const getDateObj = dateArr => {
  const date = new Date(...dateArr);

  const year = moment(date).get("year");
  const month = moment(date).get("month");
  const weekDay = moment(date).get("day");
  const monthDay = moment(date).get("date");
  const id = parseDateToTwoDigitId([year, month, monthDay]);
  const dateObj = {
    id,
    year,
    month,
    weekDay: weekDay === 0 ? 6 : weekDay - 1,
    monthDay
  };
  return dateObj;
};

export const daysInMonth = (iYear, iMonth) => {
  return 32 - new Date(iYear, iMonth, 32).getDate();
};

export const getDatesArr = monthActiveArr => {
  const firstDate = getDateObj([...monthActiveArr]);

  const datesArr = [];
  for (
    let i = 1 - firstDate.weekDay;
    i <=
    daysInMonth(...monthActiveArr) +
      (7 -
        ((Math.abs(-firstDate.weekDay) + daysInMonth(...monthActiveArr)) % 7));
    i++
  ) {
    datesArr.push([
      getDateObj([...monthActiveArr, i]),
      i < 1 || i > daysInMonth(...monthActiveArr) ? false : true
    ]);
  }
  return datesArr;
};

export const getTableMonthData = (monthActiveArr, datesArr) => {
  const tableArr = [];

  for (let i = 0; i < datesArr.length / 7; i++) {
    const datesWeekArr = [];
    for (let j = 0; j < 7; j++) {
      datesWeekArr.push(datesArr[i * 7 + j]);
    }
    tableArr.push(datesWeekArr);
  }
  return tableArr;
};
