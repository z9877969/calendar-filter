import React from "react";
import TableMonth from "../TableMonth/TableMonth";
import TableDays from "../TableDays/TableDays";
import ButtonCalendar from "../ButtonCalendar/ButtonCalendar";
import css from "./calendar.module.css";

const Calendar = ({
  handleMonthChange,
  datesArr,
  activeMonth,
  markedDatesArr,
  getPeriodDate,
  randomDates
}) => {
  return (
    <div className={css.container}>
      <TableMonth
        date={[activeMonth[1], activeMonth[0]]}
        monthChange={handleMonthChange}
      />
      {datesArr && datesArr.length > 0 && (
        <TableDays
          datesArr={datesArr}
          activeMonth={activeMonth}
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
