import React from "react";
import { periodNamesList } from "../../constants/constants";
import css from "./selectPeriod.module.scss";

const SelectPeriod = () => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {[...periodNamesList].map((name) => (
          <li className={css.item} key={"selected-period_" + name.name}>
            <button className={css.btn} type="button" data-info={name.name}>
              {name.value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectPeriod;
