export const makeDate = value => {
  const dt = new Date(value);
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
  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();
  const formatDay = day > 9 ? day : `0${day}`;
  const formatMonth = months[month];

  return `${formatDay} ${formatMonth}, ${year}`;
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
