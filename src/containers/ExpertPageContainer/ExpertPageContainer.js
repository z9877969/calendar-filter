import React from "react";
import ExpertMenu from "../../components/ExpertMenu/ExpertMenu";
import UsersTable from "../../components/UsersTable/UsersTable";
import css from "./expertPageContainer.module.css";

const ExpertPageContainer = () => {
  return (
    <div className={css.container}>
      <ExpertMenu />
      <UsersTable />
    </div>
  );
};

export default ExpertPageContainer;
