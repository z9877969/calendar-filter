import React from "react";
import Select from "../Select/Select";
import css from "./expertMenu.module.css";

const ExpertMenu = () => {
  return (
    <div className={css.container}>
      <div className={css.selectContainer}>
        <label className={css.selectInput}>
          <input name="expert" value="Эксперт" />
          <button className={css.selectBtn}></button>
        </label>
      </div>
      {/* <Select value="Эксперт" /> */}
      <div className={css.expertMenu}>
        <ul className={css.menuList}>
          <li className={css.menuItem}>
            <span>Аналитика</span>
          </li>
          <li className={css.menuItem}>
            <span>Продукт</span>
          </li>
          <li className={css.menuItem}>
            <span>Пользователи</span>
          </li>
          <li className={css.menuItem}>
            <span>Констурктор сайта</span>
          </li>
          <li className={css.menuItem}>
            <span>Трансляции</span>
          </li>
          <li className={css.menuItem}>
            <span>Рассылка</span>
          </li>
          <li className={css.menuItem}>
            <span>Маркетинг</span>
          </li>
          <li className={css.menuItem}>
            <span>Платежи</span>
          </li>
          <li className={css.menuItem}>
            <span>Настройки</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExpertMenu;
// {

// <svg class="icon">
//   <use xlink:href="#mailing"></use>
// </svg>
// <svg class="icon">
//   <use xlink:href="#marketing"></use>
// </svg>
// <svg class="icon">
//   <use xlink:href="#payments"></use>
// </svg>
// <svg class="icon">
//   <use xlink:href="#product"></use>
// </svg>
// <svg class="icon">
//   <use xlink:href="#settings"></use>
// </svg>
// <svg class="icon">
//   <use xlink:href="#site-constructor"></use>
// </svg>
// <svg class="icon">
//   <use xlink:href="#translations"></use>
// </svg>
// <svg class="icon">
//   <use xlink:href="#users"></use>
// </svg>
// }
