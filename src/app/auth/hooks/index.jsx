import { history } from "../../../_helpers";

export const checkLogin = () => {
  const user = JSON.parse(localStorage.getItem("guoli_groupon_user"));

  // *if user not exist OR user is not a staff return to login page
  if (!user || parseInt(user.user_group_id) !== 3) {
    history.push(`${process.env.PUBLIC_URL}/login`);
  } else {
    // * if there is a logged in user, call api to further check,and also fetch the role based access information for this user
    history.push(`${process.env.PUBLIC_URL}/products`);
  }
};
