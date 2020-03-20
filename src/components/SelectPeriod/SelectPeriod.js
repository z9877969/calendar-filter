import React from "react";
import css from "./selectPeriod.module.css";

const periodNamesList = [
  ["Весь срок", "all_time"],
  ["Сегодня", "today"],
  ["Вчера", "yestarday"],
  ["Последние 7 дней", "last_7"],
  ["Последние 30 дней", "last_30"],
  ["В этом месяце", "now_month"],
  ["Прошлый месяц", "last_month"]
];

const SelectPeriod = ({ getPeriod }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {[...periodNamesList].map(name => (
          <li className={css.item} key={"selected-period_" + name[1]}>
            <button
              className={css.btn}
              onClick={getPeriod}
              type="button"
              data-info={name[1]}
            >
              {name[0]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectPeriod;
