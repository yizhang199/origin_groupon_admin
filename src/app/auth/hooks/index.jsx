import { history } from "../../../_helpers";
import { kidsnparty } from "../../../_apis";
export const checkLogin = () => {
  const user = JSON.parse(localStorage.getItem("guoli_groupon_user"));

  //if user not exist OR user is not a staff return to login page
  if (!user || parseInt(user.user_group_id) !== 3) {
    history.push(`${process.env.PUBLIC_URL}/login`);
  } else {
    //if there is a logged in user, call api to further check,and also fetch the role based access information for this user
    history.push(`${process.env.PUBLIC_URL}/products`);
  }
};

export const userLogin = async (phone, password, setUser) => {
  const response = await kidsnparty.post("user/login", { phone, password });
  if (
    response.data.success &&
    parseInt(response.data.data.user_group_id) === 3
  ) {
    localStorage.setItem(
      "guoli_groupon_user",
      JSON.stringify(response.data.data)
    );
    setUser(response.data.data);
    history.push(`${process.env.PUBLIC_URL}/products`);
  } else if (!response.data.success) {
    alert("login fail, password or phone No. incorrect.");
  } else {
    alert("login fail, you are not authorized user.");
  }
};
