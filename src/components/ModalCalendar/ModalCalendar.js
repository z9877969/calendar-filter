import React, { useState, useEffect } from "react";
import SelectPeriod from "../SelectPeriod/SelectPeriod";
import Calendar from "../Calendar/Calendar";
import {
  getDateNow,
  getDateObj,
  getDatesArr,
} from "../../helpers/helperCalendar";
import css from "./modalCalendar.module.scss";

const ModalCaledar = (props) => {
  // props
  const {
    randomDates,
    month,
    handleDisplayCalendar,
    handleMonthChange,
    handlePeriod,
    handleActivePeriod,
    handleSetMonth,
    checkedDates,
  } = props;

  const dateNow = getDateNow();

  // state
  const [year, setYear] = useState(getDateObj(dateNow).year);
  const [datesArr, setDatesArr] = useState(getDatesArr([year, month]));

  // effects
  useEffect(() => {
    if (month > 11) {
      handleSetMonth(0);
      setYear((prev) => prev + 1);
    } else if (month < 0) {
      handleSetMonth(11);
      setYear((prev) => prev - 1);
    }
    setDatesArr(getDatesArr([year, month]));
  }, [month]);

  return (
    <div
      id="modal-calendar"
      className={css.wrapper}
      onClick={handleDisplayCalendar}
    >
      <div onClick={handlePeriod} className={css.container}>
        <SelectPeriod getPeriod={handlePeriod} />

        <Calendar
          handleMonthChange={handleMonthChange}
          handleActivePeriod={handleActivePeriod}
          datesArr={datesArr}
          activeMonth={[year, month]}
          randomDates={randomDates}
          checkedDates={checkedDates}
        />
      </div>
    </div>
  );
};

export default ModalCaledar;
