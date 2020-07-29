import React from "react";
import css from "./buttonCalendar.module.css";

const ButtonCalendar = ({ titleSet, markedDatesArr, handler }) => {
  const [title, titleState] = titleSet;

  return (
    <button
      name="close-modal"
      type="button"
      className={
        (titleState === "refresh" &&
          `${css.btnRefresh} ${
            markedDatesArr.length > 0 && css.btnRefreshActive
          }`) ||
        (titleState === "close-modal" && `${css.btnEsc} `)
      }
      onClick={handler}
    >
      {title}
    </button>
  );
};

export default ButtonCalendar;
