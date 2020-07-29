import React from "react";
import shortid from "shortid";
import {
  getTableMonthDatas,
  getAllMarkedDates,
} from "../../helpers/helperCalendar";
import css from "./tableDays.module.css";

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const TableDays = ({ datesArr, checkedDates, randomDates }) => {
  const tableDates = getTableMonthDatas(datesArr);
  const markedDatesArr =
    checkedDates.length > 0 ? getAllMarkedDates(...checkedDates) : checkedDates;
  const getMarkedDates = () => {
    const markedArr = markedDatesArr
      .filter((markedDate) =>
        datesArr.find((date) => markedDate.id === date.dateObj.id)
      )
      .map((date) => date.id);

    const setObj = {};
    setObj.markedArr = markedArr;
    setObj.firstMarkedId = markedDatesArr.length > 0 && markedDatesArr[0].id;
    setObj.lastMarkedId =
      markedDatesArr.length > 0 && markedDatesArr[markedDatesArr.length - 1].id;
    return setObj;
  };

  const setPeriod = checkedDates && getMarkedDates();
  return (
    <div className={css.container}>
      <ul
        className={
          tableDates.length < 6 ? css.listWeekDaysLess : css.listWeekDaysMore
        }
      >
        {[...weekDays].map((day) => (
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
        {[...tableDates].map((weekDates) => (
          <li key={shortid.generate()}>
            <ul className={css.weekDates}>
              {[...weekDates].map((date) => {
                const { dateObj, isThisMonth } = date;
                const [first, last] = randomDates;
                return (
                  <li
                    className={`${css.date} ${
                      !isThisMonth && css.dateNotMonth
                    } ${
                      dateObj.id === setPeriod.lastMarkedId &&
                      css.dateActiveFirst
                    } ${
                      dateObj.id === setPeriod.firstMarkedId &&
                      css.dateActiveLast
                    }
                    ${
                      setPeriod.markedArr.includes(dateObj.id) && css.dateMarked
                    }
                      ${
                        (first &&
                          first.id === dateObj.id &&
                          first.toggle &&
                          css.dateRandom) ||
                        (last &&
                          last.id === dateObj.id &&
                          last.toggle &&
                          css.dateRandom)
                      }
                      `}
                    data-id={dateObj.id}
                    data-info="date"
                    key={dateObj.id}
                  >
                    {dateObj.monthDay}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableDays;
