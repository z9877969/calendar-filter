import React from "react";
import TableMonth from "../TableMonth/TableMonth";
import TableDays from "../TableDays/TableDays";
import ButtonCalendar from "../ButtonCalendar/ButtonCalendar";
import css from "./calendar.module.css";

const Calendar = ({
  handleMonthChange,
  handlePeriodInfo,
  datesArr,
  checkedDates,
  activeMonth,
  handleActivePeriod,
  getPeriodDate,
  randomDates,
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
          checkedDates={checkedDates}
          activeMonth={activeMonth}
          // markedDatesArr={markedDatesArr}
          randomDates={randomDates}
        />
      )}
      <div className={css.btnContainer}>
        <ButtonCalendar titleSet={["Отмена", "close-modal"]} />
        <ButtonCalendar
          titleSet={["Обновить", "refresh"]}
          markedDatesArr={checkedDates}
          handler={handleActivePeriod}
        />
      </div>
    </div>
  );
};

export default Calendar;
