import React from "react";
import ContainerCalendar from "../ContainerCalendar/ContainerCalendar";
import ExpertPageContainer from "../ExpertPageContainer/ExpertPageContainer";
import css from "./App.module.css";

const App = () => (
  <div className={css.container}>
    <ContainerCalendar />
    <ExpertPageContainer />
  </div>
);

export default App;
