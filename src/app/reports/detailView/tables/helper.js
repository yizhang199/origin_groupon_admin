export const getStyle = value => {
  if (value % 2 !== 0) {
    return { backgroundColor: "#f7dba185" };
  }
};

export const dynamicSort = (property, sortOrder) => {
  return function(a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};
