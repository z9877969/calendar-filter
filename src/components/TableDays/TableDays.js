import React from "react";
import shortid from "shortid";
import { getTableMonthData, getDateObj } from "../../helpers/helperCalendar";
import css from "./tableDays.module.css";

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const TableDays = ({
  datesArr,
  activeMonth,
  markedDatesArr,
  randomDates,
  getPeriodDate
}) => {
  const tableDates = getTableMonthData(activeMonth, datesArr);
  const getMarkedDates = () => {
    const markedArr = markedDatesArr
      .filter(markedDate => datesArr.find(date => markedDate.id === date[0].id))
      .map(date => date.id);

    const setObj = {};
    setObj.markedArr = markedArr;
    setObj.firstDate = markedDatesArr.length > 0 && markedDatesArr[0].id;
    setObj.lastDate =
      markedDatesArr.length > 0 && markedDatesArr[markedDatesArr.length - 1].id;
    return setObj;
  };

  const setPeriod = getMarkedDates();
  return (
    <div className={css.container}>
      <ul
        className={
          tableDates.length < 6 ? css.listWeekDaysLess : css.listWeekDaysMore
        }
      >
        {[...weekDays].map(day => (
          <li key={shortid.generate()} className={css.weekDay}>
            {day}
          </li>
        ))}
      </ul>
      <ul
        className={
          tableDates.length < 6 ? css.listMonthDaysLess : css.listMonthDaysMore
        }
      >
        {[...tableDates].map(weekDates => (
          <li key={shortid.generate()}>
            <ul className={css.weekDates}>
              {[...weekDates].map(date => (
                <li
                  className={`${css.date} ${!date[1] &&
                    css.dateNotMonth} ${date[0].id === setPeriod.firstDate &&
                    css.dateActiveFirst} ${date[0].id === setPeriod.lastDate &&
                    css.dateActiveLast}
                    ${setPeriod.markedArr.includes(date[0].id) &&
                      css.dateMarked}
                      ${(randomDates.length > 0 &&
                        randomDates[0].id === date[0].id &&
                        randomDates[0].toggle &&
                        css.dateRandom) ||
                        (randomDates.length > 1 &&
                          randomDates[1].id === date[0].id &&
                          randomDates[1].toggle &&
                          css.dateRandom)}
                      `}
                  onClick={getPeriodDate}
                  data-id={date[0].id}
                  key={date[0].id}
                >
                  {date[0].monthDay}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableDays;
