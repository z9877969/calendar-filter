import React from "react";
import { monthMap } from "../../constants/constants";
import css from "./tableMonth.module.scss";

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
