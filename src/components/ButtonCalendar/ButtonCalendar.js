import React from "react";
import css from "./buttonCalendar.module.css";

const ButtonCalendar = ({ titleSet, markedDatesArr }) => {
  const [title, titleState] = titleSet;
  return (
    <button
      type="button"
      className={
        (titleState === "refresh" &&
          `${css.btnRefresh} ${markedDatesArr.length > 0 &&
            css.btnRefreshActive}`) ||
        (titleState === "esc" && `${css.btnEsc} `)
      }
    >
      {title}
    </button>
  );
};

export default ButtonCalendar;
