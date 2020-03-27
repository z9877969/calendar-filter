import React from "react";
import users from "../../constants/users.json";
import css from "./usersTable.module.css";

console.log("users", users);

const UsersTable = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <div className={css.filtersContainer}>
          <div className={css.selectContainer}>
            <label className={css.selectInput}>
              <input name="" value="За 1 день" />
              <button className={css.selectBtn}></button>
            </label>
          </div>
          <div className={css.selectContainer}>
            <label className={css.selectInput}>
              <input name="" value="Фильтр" />
              <button className={css.selectBtn}></button>
            </label>
          </div>
        </div>
        <div className={css.btnContainer}>
          <button className={css.btn} type="button">
            Выгрузить
          </button>
          <button type="button" className={css.btn}>
            Добавить контакты
          </button>
        </div>
      </header>
      <section className={css.table}>
        <header>
          <ul className={css.headerList}>
            <li>
              <p className={css.checkbox}></p>
              <input type="checkbox" />
            </li>
            <li>Пользователь</li>
            <li className={css.regDate}>Дата регистрации</li>
            <li>Последняя активность</li>
            <li>Последнее действие</li>
            <li>Продукт</li>
            <li>
              <label className={css.selectInputTable}>
                Отобразить
                <input name="" value="15" />
                <button className={css.selectBtn}></button>
              </label>
            </li>
          </ul>
        </header>
        <ul className={css.bodyList}>
          {users.map((user, idx) => (
            <li key={idx}>
              <ul className={css.bodyItem}>
                <li>
                  <p></p>
                  <input type="checkbox" />
                </li>
                <li>
                  <div className={idx === 6 && css.userContainer}>
                    {idx === 6 && <p className={css.lock}></p>}
                    <p
                      className={`${css.user} ${idx === 6 && css.inline}`}
                    >{`${user.user}${idx}`}</p>
                  </div>

                  <p className={css.email}>{user.email}</p>
                </li>
                <li className={`${css.li} ${idx === 6 && css.lockText}`}>
                  {user.registrDate}
                </li>
                <li className={`${css.li} ${idx === 6 && css.lockText}`}>
                  {user.lastActively}
                </li>
                <li className={`${css.li} ${idx === 6 && css.lockText}`}>
                  <p className={css.lastAction}>{user.lastAction}</p>
                </li>
                <li className={`${css.li} ${idx === 6 && css.lockText}`}>
                  <p className={css.product}>{user.product}</p>
                </li>
                <li className={css.li}>
                  <div className={css.btnContainer}>
                    <button type="button" className={css.tableItemBtn}></button>
                    <button type="button" className={css.tableItemBtn}></button>
                  </div>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default UsersTable;
