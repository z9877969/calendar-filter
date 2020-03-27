import React from "react";
// import Select from "../Select/Select";
import css from "./expertMenu.module.css";
import Svg from "../Svg/Svg";

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
            <Svg width="24" height="24" className={css.icon} />
            {/* <svg
              // className="analitycs"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.8 23.8H1C0.4 23.8 0 23.4 0 22.8V1C0 0.4 0.4 0 1 0C1.6 0 2 0.4 2 1V21.8H22.8C23.4 21.8 23.8 22.2 23.8 22.8C23.8 23.4 23.4 23.8 22.8 23.8Z"
                fill="black"
              />
              <path
                d="M7.00018 19.6C5.20018 19.6 3.7002 18.1 3.7002 16.3C3.7002 14.5 5.20018 13 7.00018 13C8.80018 13 10.3002 14.5 10.3002 16.3C10.3002 18.1 8.80018 19.6 7.00018 19.6ZM7.00018 15C6.30018 15 5.7002 15.6 5.7002 16.3C5.7002 17 6.30018 17.6 7.00018 17.6C7.70018 17.6 8.3002 17 8.3002 16.3C8.3002 15.6 7.70018 15 7.00018 15Z"
                fill="black"
              />
              <path
                d="M19.8 17.3C18 17.3 16.5 15.8 16.5 14C16.5 12.2 18 10.7 19.8 10.7C21.6 10.7 23.1 12.2 23.1 14C23.1 15.8 21.6 17.3 19.8 17.3ZM19.8 12.6C19.1 12.6 18.5 13.2 18.5 13.9C18.5 14.6 19.1 15.2 19.8 15.2C20.5 15.2 21.1 14.6 21.1 13.9C21.1 13.2 20.5 12.6 19.8 12.6Z"
                fill="black"
              />
              <path
                d="M12.3 9.79999C10.5 9.79999 9 8.3 9 6.5C9 4.7 10.5 3.20001 12.3 3.20001C14.1 3.20001 15.6 4.7 15.6 6.5C15.6 8.3 14.1 9.79999 12.3 9.79999ZM12.3 5.09998C11.6 5.09998 11 5.69996 11 6.39996C11 7.09996 11.6 7.70001 12.3 7.70001C13 7.70001 13.6 7.09996 13.6 6.39996C13.6 5.69996 13 5.09998 12.3 5.09998Z"
                fill="black"
              />
              <path
                d="M8.20013 14.8C8.00013 14.8 7.90013 14.8 7.70013 14.7C7.20013 14.4 7.00014 13.8 7.30014 13.3L10.2001 8.09995C10.5001 7.59995 11.1001 7.39998 11.6001 7.69998C12.1001 7.99998 12.3001 8.59995 12.0001 9.09995L9.10012 14.3C8.90012 14.6 8.60013 14.8 8.20013 14.8Z"
                fill="black"
              />
              <path
                d="M18.3002 13.1C18.1002 13.1 17.8002 13 17.6002 12.8L13.3002 8.79998C12.9002 8.39998 12.9002 7.79995 13.2002 7.39995C13.6002 6.99995 14.2002 6.99998 14.6002 7.29998L18.9002 11.3C19.3002 11.7 19.3002 12.3 19.0002 12.7C18.8002 13 18.6002 13.1 18.3002 13.1Z"
                fill="black"
              />
            </svg> */}
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
