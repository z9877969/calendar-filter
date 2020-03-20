import React from "react";
import css from "./tableMonth.module.css";

const monthMap = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноярь",
  "Декабрь"
];

const TableMonth = ({ date, monthChange }) => {
  const [month, year] = date;
  return (
    <div className={css.container}>
      <button
        type="button"
        onClick={monthChange}
        data-action="back"
        className={`${css.arrowBtn} ${css.left}`}
      ></button>
      <div>
        <span className={css.month}>{monthMap[month]}</span>
        <span className={css.month}>, </span>
        <span className={css.month}>{year}</span>
      </div>
      <button
        type="button"
        data-action="forward"
        onClick={monthChange}
        className={`${css.arrowBtn} ${css.right}`}
      ></button>
    </div>
  );
};

export default TableMonth;
