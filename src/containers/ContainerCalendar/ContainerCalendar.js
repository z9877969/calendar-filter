import React, { useState, useEffect } from "react";
// import moment from 'moment'
import SelectPeriod from "../../components/SelectPeriod/SelectPeriod";
import Calendar from "../../components/Calendar/Calendar";
import PeriodHeaderInfo from "../../components/PeriodHeaderInfo/PeriodHeaderInfo";
import {
  dateNow,
  daysInMonth,
  getDateObj,
  parseTwoDigitIdToDateArr,
  parseDateToTwoDigitId,
  changeIdToFullNumber,
  getDatesArr
} from "../../helpers/helperCalendar";
import css from "./containerCalendar.module.css";

const periodsMap = [
  ["all_time"],
  ["today", 0],
  ["yestarday", 1],
  ["last_7", 7],
  ["last_30", 30],
  ["now_month", 1 - dateNow[2]],
  ["last_month", null]
];

const ContainerCaledar = () => {
  const [period, setPeriod] = useState([]);
  const [markedDatesArr, setMarkedDatesArr] = useState([]);
  const [randomDates, setRandomDates] = useState([]);

  const getDatesPeriodArr = () => {
    const markedArr = [];
    if (period[0] === "all_time") return markedArr;
    if (period[0] === "last_month") {
      const firstDateLastMonth = [dateNow[0], dateNow[1] - 1, 1];
      for (
        let i = daysInMonth(firstDateLastMonth[0], firstDateLastMonth[1]);
        i >= firstDateLastMonth[2];
        i = i - 1
      ) {
        markedArr.push(
          getDateObj([firstDateLastMonth[0], firstDateLastMonth[1], i])
        );
      }
    } else if (randomDates.length === 2) {
      const arrDates = [...randomDates].sort(
        (a, b) => a.fullNumber - b.fullNumber
      );
      const first = arrDates[0];
      const last = arrDates[1];
      const period =
        1 +
        getDatesArr([dateNow[0], dateNow[1]]).findIndex(
          el => el[0].id === last.id
        ) -
        getDatesArr([dateNow[0], dateNow[1]]).findIndex(
          el => el[0].id === first.id
        );
      for (let i = 0; i < period; i = i + 1) {
        markedArr.push(
          getDateObj([last.date[0], last.date[1], last.date[2] - i])
        );
      }
    } else {
      for (let i = 0; i <= period[1]; i++) {
        markedArr.push(getDateObj([dateNow[0], dateNow[1], dateNow[2] - i]));
      }
    }
    console.log("markedArr", markedArr);
    return markedArr;
  };

  const handlePeriod = ({ target }) => {
    const { info } = target.dataset;
    setRandomDates([]);

    setPeriod(periodsMap.find(set => set[0] === info));
  };

  const getDate = id => {
    const date = {};
    date.id = id;
    date.date = parseTwoDigitIdToDateArr(id);
    date.fullNumber = changeIdToFullNumber(id);
    date.toggle = true;
    return date;
  };

  const handlePeriodDate = ({ target }) => {
    const { id } = target.dataset;
    setPeriod([]);
    if (
      randomDates.length > 0 &&
      randomDates.find(date => date.id === id && date.toggle)
    ) {
      randomDates
        .filter(date => date.id === id)
        .map(date => (date.toggle = !date.toggle));
      setRandomDates(randomDates.filter(date => date.toggle === true));
      return;
    }

    if (randomDates.length <= 1) {
      setRandomDates(prev => [getDate(id), ...prev]);
    }
  };

  useEffect(() => {
    setMarkedDatesArr(getDatesPeriodArr());
  }, [period, randomDates]);

  return (
    <>
      {/* <PeriodHeaderInfo /> */}
      <div className={css.container}>
        <SelectPeriod getPeriod={handlePeriod} />

        <Calendar
          markedDatesArr={markedDatesArr}
          randomDates={randomDates.length > 0 && randomDates}
          getPeriodDate={handlePeriodDate}
        />
      </div>
    </>
  );
};

export default ContainerCaledar;
