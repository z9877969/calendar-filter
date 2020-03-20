import React, { useState, useEffect } from "react";
import TableMonth from "../TableMonth/TableMonth";
import TableDays from "../TableDays/TableDays";
import ButtonCalendar from "../ButtonCalendar/ButtonCalendar";
import { dateNow, getDateObj, getDatesArr } from "../../helpers/helperCalendar";
import css from "./calendar.module.css";

const Calendar = ({ markedDatesArr, getPeriodDate, randomDates }) => {
  const [month, setMonth] = useState(getDateObj(dateNow).month);
  const [year, setYear] = useState(getDateObj(dateNow).year);
  const [datesArr, setDatesArr] = useState(getDatesArr([year, month]));

  const handleMonthChange = ({ target }) => {
    const { action } = target.dataset;
    action === "back" && setMonth(prev => prev - 1);
    action === "forward" && setMonth(prev => prev + 1);
  };

  useEffect(() => {
    if (month > 11) {
      setMonth(0);
      setYear(prev => prev + 1);
    } else if (month < 0) {
      setMonth(11);
      setYear(prev => prev - 1);
    }
    setDatesArr(getDatesArr([year, month]));
  }, [month]);

  return (
    <div className={css.container}>
      <TableMonth date={[month, year]} monthChange={handleMonthChange} />
      {datesArr && datesArr.length > 0 && (
        <TableDays
          datesArr={datesArr}
          activeMonth={[year, month]}
          markedDatesArr={markedDatesArr}
          randomDates={randomDates}
          getPeriodDate={getPeriodDate}
        />
      )}
      <div className={css.btnContainer}>
        <ButtonCalendar titleSet={["Отмена", "esc"]} />
        <ButtonCalendar
          titleSet={["Обновить", "refresh"]}
          markedDatesArr={markedDatesArr}
        />
      </div>
    </div>
  );
};

export default Calendar;
