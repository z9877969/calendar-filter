import React from "react";
import css from "./expertMenuHeader.module.css";

const ExpertMenuHeader = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <span></span>
        <span>Beta</span>
      </div>
      <div className={css.userSet}>
        <p className={css.bell}></p>
        <div className={css.userSelect}>
          <p className={css.userName}>Артем</p>
          <button type="button" className={css.btnSelect}></button>
        </div>
        <p className={css.search}></p>
        <div className={css.language}>
          <p className={css.languageName}>Ru</p>
          <button type="button" className={css.btnSelect}></button>
        </div>
      </div>
    </div>
  );
};

export default ExpertMenuHeader;
