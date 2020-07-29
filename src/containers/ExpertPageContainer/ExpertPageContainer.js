import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Users from "../../components/Users/Users";
import ModalCalendar from "../../components/ModalCalendar/ModalCalendar";
import {
  getDateNow,
  getDaysInMonth,
  getDateObj,
  getDateForMarked,
} from "../../helpers/helperCalendar";
import { periodNamesList } from "../../constants/constants";
import css from "./expertPageContainer.module.css";

const ExpertPageContainer = () => {
  const dateNow = getDateNow();

  // state
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [month, setMonth] = useState(getDateObj(dateNow).month);
  const [periodName, setPeriodName] = useState("today");
  const [randomDates, setRandomDates] = useState([]);
  const [checkedDates, setCheckedDates] = useState([]);
  const [periodInfo, setPeriodInfo] = useState({ btn: "", period: [] });

  // helpers
  const getDatesPeriodArr = (periodName) => {
    const dates = [];

    switch (periodName) {
      case "all_time":
        return;
      case "yestarday":
        dates[0] = [...dateNow].map((el, idx) => (idx === 2 ? el - 1 : el));
        dates[1] = [...dates[0]];

        return dates;
      case "last_month":
        dates[0] = [...dateNow].map((el, idx) =>
          idx === 1 ? el - 1 : idx === 2 ? 1 : el
        );
        const daysInLastMonth = getDaysInMonth(dates[0][0], dates[0][1]);
        dates[1] = [...dates[0]].map((el, idx) =>
          idx === 2 ? daysInLastMonth : el
        );
        return [dates[0], dates[1]];
      case "last_7":
        dates[1] = [...dateNow];
        dates[0] = [...dates[1]].map((el, idx) => (idx === 2 ? el - 7 : el));

        return [dates[0], dates[1]];
      case "last_30":
        dates[1] = [...dateNow];
        dates[0] = [...dates[1]].map((el, idx) => (idx === 2 ? el - 30 : el));

        return [dates[0], dates[1]];
      case "now_month":
        dates[0] = [...dateNow].map((el, idx) => (idx === 2 ? 1 : el));
        dates[1] = [...dateNow];

        return [dates[0], dates[1]];
      case "random_date":
        const arr = randomDates.sort((a, b) => a.fullNumber - b.fullNumber);
        dates[0] = arr[0]["date"];
        dates[1] = arr[1]["date"];
        return [dates[0], dates[1]];

      case "today":
        return [dateNow, dateNow];
      default:
        return [];
    }
  };

  const getPeriodRandom = (target) => {
    const { id } = target.dataset;

    periodName !== "random_date" && setPeriodName("");

    if (
      // switchOff toggled date
      randomDates.length > 0 &&
      randomDates.find((date) => date.id === id && date.toggle)
    ) {
      setPeriodName("");
      randomDates
        .filter((date) => date.id === id)
        .map((date) => (date.toggle = !date.toggle));
      setRandomDates(randomDates.filter((date) => date.toggle === true));

      return;
    }
    if (randomDates.length <= 1) {
      setRandomDates((prev) => [getDateForMarked(id), ...prev]);
      if (randomDates.length === 1) {
        setPeriodName("random_date");
      }
    }
  };

  // handlers
  const handleDisplayCalendar = (e) => {
    const { name, id } = e.target;

    name === "btn-select-period"
      ? setIsCalendarOpen(true)
      : (name === "close-modal" && setIsCalendarOpen(false)) ||
        (id === "modal-calendar" && setIsCalendarOpen(false));
  };

  const handleMonthChange = ({ target }) => {
    const { action } = target.dataset;
    action === "back" && setMonth((prev) => prev - 1);
    action === "forward" && setMonth((prev) => prev + 1);
  };

  const handlePeriod = ({ target }) => {
    const { info } = target.dataset;
    info && info !== "date" && setRandomDates([]);

    const periodName =
      info && info !== "date"
        ? periodNamesList.find((set) => set.name === info).name
        : info === "date"
        ? getPeriodRandom(target)
        : "";

    periodName && setPeriodName(periodName);
  };

  const handleActivePeriod = () => {
    setPeriodInfo({ btn: periodName, period: checkedDates });
  };

  const handleSetMonth = (month) => setMonth(month);

  const handleClosePeriod = () => {
    setPeriodName("today");
    setPeriodInfo({ btn: "", period: [] });
  };

  useEffect(() => {
    !randomDates.length && !periodName && setPeriodName("today");
    setCheckedDates(getDatesPeriodArr(periodName));
  }, [periodName, randomDates]);

  return (
    <>
      {isCalendarOpen && (
        <ModalCalendar
          periodName={periodName}
          checkedDates={checkedDates}
          randomDates={randomDates}
          month={month}
          handleDisplayCalendar={handleDisplayCalendar}
          handleMonthChange={handleMonthChange}
          handlePeriod={handlePeriod}
          handleSetMonth={handleSetMonth}
          handleActivePeriod={handleActivePeriod}
        />
      )}
      <Header />
      <div className={css.container}>
        <Navigation />
        <Users
          checkedDates={checkedDates}
          periodName={periodName}
          periodInfo={periodInfo}
          handleDisplayCalendar={handleDisplayCalendar}
          handleClosePeriod={handleClosePeriod}
        />
      </div>
    </>
  );
};

export default ExpertPageContainer;
