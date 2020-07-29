import moment from "moment";

export const now = () =>
  moment()
    .endOf("day")
    .format("YYYY, M, D");
export const yestarday = () =>
  moment()
    .add("-1", "days")
    .format("YYYY, M, D");
export const getDateByLastPeriod = period =>
  moment()
    .add(`${-period}`, "days")
    .format("YYYY, M, D");
export const getLastMonthFirstDate = () =>
  moment()
    .add("-1", "month")
    .startOf("month")
    .format("YYYY, M, D");
export const getLastMonthLastDate = () =>
  moment()
    .add("-1", "month")
    .startOf("month")
    .format("YYYY, M, D");
export const getDaysInMonth = monthNumber =>
  moment()
    .month(`${monthNumber - 1}`)
    .endOf("month")
    .format("YYYY, M, D");
