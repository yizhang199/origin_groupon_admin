const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const weeks = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

export const makeDate = value => {
  const dt = new Date(value);

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();
  // const hours = dt.getHours();
  // const minutes = dt.getMinutes();

  const formatDay = day > 9 ? day : `0${day}`;
  const formatMonth = months[month];
  // const formatHours = hours > 9 ? hours : `0${hours}`;
  // const formatMinutes = minutes > 9 ? minutes : `0${minutes}`;

  return `${formatDay} ${formatMonth}, ${year}`;
};
export const makeShopOpenDate = value => {
  const dt = new Date(value);

  const day = dt.getDate();
  const month = dt.getMonth();
  const week = dt.getDay();

  const formatDay = day > 9 ? day : `0${day}`;
  const formatMonth = months[month];
  const formatWeek = weeks[week];

  return `${formatDay} ${formatMonth}, ${formatWeek}`;
};
export const makeType = value => {
  switch (value) {
    case "radio":
      return "单选";
    case "checkbox":
      return "多选";
    default:
      return "";
  }
};
export const getStyle = value => {
  if (value % 2 !== 0) {
    return { backgroundColor: "#f7dba185" };
  }
};
