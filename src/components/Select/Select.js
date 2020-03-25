import React from "react";
import css from "./select.module.css";

const Select = ({ value }) => {
  return (
    <div className={css.selectContainer}>
      <label className={css.selectInput}>
        <input name="" value={value} />
        <button className={css.selectBtn}></button>
      </label>
    </div>
  );
};

export default Select;
