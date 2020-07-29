import moment from "moment";

export const getDateNow = () =>
  moment(Date.now())
    .format("YYYY,MM,D")
    .split(",")
    .map((el, idx) => (idx === 1 ? +el - 1 : +el));

export const parseDateToTwoDigitId = ([year, month, date]) => {
  const monthId = month < 10 ? `0${month}` : `${month}`;
  const dateId = date < 10 ? `0${date}` : `${date}`;
  return `${year}_${monthId}_${dateId}`;
};

export const changeIdToFullNumber = id => Number(id.split("_").join(""));

export const parseTwoDigitIdToDateArr = id =>
  id.split("_").map(el => Number(el));

// return id, Y, M, W, d - obj
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

export const getDaysInMonth = (iYear, iMonth) => {
  return 32 - new Date(iYear, iMonth, 32).getDate();
};

// return period displaing table , monthActiveArr = [iYear, iMonth]
export const getDatesArr = monthActiveArr => {
  const firstDate = getDateObj([...monthActiveArr]);
  const daysInMonth = getDaysInMonth(...monthActiveArr);

  const datesArr = [];
  for (
    let i = 1 - firstDate.weekDay;
    i <= daysInMonth + (7 - ((Math.abs(-firstDate.weekDay) + daysInMonth) % 7));
    i++
  ) {
    datesArr.push({
      dateObj: getDateObj([...monthActiveArr, i]),
      // add value for not active month days into table
      isThisMonth: i < 1 || i > daysInMonth ? false : true
    });
  }
  return datesArr;
};

// return displaing table
export const getTableMonthDatas = datesArr => {
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

// return full info dateObj
export const getDateForMarked = id => {
  const date = {};
  date.id = id;
  date.date = parseTwoDigitIdToDateArr(id);
  date.fullNumber = changeIdToFullNumber(id);
  date.toggle = true;
  return date;
};

// return checked period dates, args: [Y, M, d]
export const getAllMarkedDates = (minD, maxD) => {
  // console.log("period_befor", minD, maxD);
  if (minD && !minD.find((el, idx) => el !== maxD[idx])) {
    const date = getDateForMarked(parseDateToTwoDigitId(maxD));
    return [date, date];
  }
  if (minD) {
    const daysInLastMonth = getDaysInMonth(maxD[0], maxD[1] - 1);
    console.log("period_into", minD, maxD);
    const valueDates =
      maxD[1] === minD[1]
        ? maxD[2] - minD[2]
        : maxD[1] + (1 + daysInLastMonth - minD[0]);
    const [year, month, day] = minD;
    const periodDates = [];
    for (let i = 0; i <= valueDates; i++) {
      let dateObj = getDateObj([year, month, day + i]);
      let date = getDateForMarked(dateObj.id);
      date.toggle = i === 0 || i === valueDates ? true : false;
      periodDates.push(date);
    }
    return periodDates;
  }
};
