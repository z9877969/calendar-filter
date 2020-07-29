import { getDateNow } from "../helpers/helperCalendar";

const dateNow = getDateNow();

export const experts = [
  { value: "expert-1", name: "Эксперт" },
  { value: "expert-2", name: "Эксперт-2" },
  { value: "expert-3", name: "Эксперт-3" },
  { value: "expert-4", name: "Эксперт-4" },
];

export const language = [
  { value: "Ru", name: "Ru" },
  { value: "Ua", name: "Ua" },
  { value: "En", name: "En" },
];

export const users = [
  { value: "userId-1", name: "Артем" },
  { value: "userId-2", name: "Артур" },
  { value: "userId-3", name: "Артемон" },
];

export const filter = [
  { value: "", name: "Фильтр" },
  { value: "byLastActivity", name: "по-дате последней активности" },
  { value: "bySignUp", name: "по-дате регистрации" },
  { value: "byUserName", name: "по имени пользователя" },
];

export const pagesValue = [
  { value: "20", name: "Отобразить 20" },
  { value: "15", name: "Отобразить 15" },
  { value: "10", name: "Отобразить 10" },
  { value: "5", name: "Отобразить 5" },
];

export const periodsMap = [
  ["all_time"],
  ["today", 0],
  ["yestarday", 1],
  ["last_7", 6],
  ["last_30", 30],
  ["now_month", dateNow[2] - 1],
  ["last_month", null],
];

export const periodNamesList = [
  { value: "Весь срок", name: "all_time" },
  { value: "Сегодня", name: "today" },
  { value: "Вчера", name: "yestarday" },
  { value: "Последние 7 дней", name: "last_7" },
  { value: "Последние 30 дней", name: "last_30" },
  { value: "В этом месяце", name: "now_month" },
  { value: "Прошлый месяц", name: "last_month" },
];

export const monthMap = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноярь",
  "Декабрь",
];
