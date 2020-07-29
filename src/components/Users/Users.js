import React from "react";
import UsersToolBar from "../UsersToolBar/UsersToolBar";
import UsersTable from "../UsersTable/UsersTable";
import users from "../../constants/users.json";
import css from "./users.module.scss";

const Users = (props) => {
  const {
    periodName,
    handleDisplayCalendar,
    periodInfo,
    handleClosePeriod,
  } = props;

  return (
    <div className={css.container}>
      <UsersToolBar
        periodName={periodName}
        periodInfo={periodInfo}
        handleDisplayCalendar={handleDisplayCalendar}
        periodInfoClose={handleClosePeriod}
      />
      <UsersTable users={users} />
    </div>
  );
};

export default Users;
