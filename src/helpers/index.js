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
