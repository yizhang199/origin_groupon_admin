import { actionTypes } from "../actions";
// import { makeDate } from "../helpers";

const selectedShopReducer = (
  selectedShop = { open: { open_date: "", open_time: "", close_time: "" } },
  action
) => {
  // const checkOpenDates = newDate => {
  //   let flag = false;
  //   if (!selectedShop || !selectedShop.open) {
  //     return false;
  //   }
  //   selectedShop.open.map(element => {
  //     if (makeDate(element) === makeDate(newDate)) {
  //       flag = true;
  //       return;
  //     }
  //   });

  //   return flag;
  // };
  if (action.type === actionTypes.fetchSingleShop) {
    return action.payload;
  } else if (action.type === actionTypes.shopOpenDateChange) {
    const newDate = action.payload;
    // const isIncludes = checkOpenDates(newDate);
    //   if (isIncludes) {
    //     return {
    //       ...selectedShop,
    //       open: selectedShop.open.filter(
    //         element => makeDate(element) !== makeDate(newDate)
    //       )
    //     };
    //   } else {
    //     return {
    //       ...selectedShop,
    //       open: [...selectedShop.open, makeDate(newDate)]
    //     };
    //   }
    return { ...selectedShop, open: newDate };
  }
  return selectedShop;
};

export default selectedShopReducer;
