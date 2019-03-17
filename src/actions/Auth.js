import types from "./actionTypes";
import { kidsnparty } from "../apis";
import { history } from "../history";
const login = () => async (dispatch, getState) => {
  const requestBody = getState().form.loginForm.values;

  const response = await kidsnparty.post("user/login", requestBody);

  if (response.data.success) {
    localStorage.setItem(
      "beautifulfruit_admin_user",
      JSON.stringify(response.data.data)
    );
    dispatch({ type: types.userLogin, payload: response.data.data });
    history.push(`${process.env.PUBLIC_URL}/products`);
  } else {
    alert("login fail, password or phone No. incorrect.");
  }
};

export default { login };
