import * as userData from "../../json_data/userData";

export const login = (username, password, onCompletion) => {
  const response = loginService(username, password);
  if (response == "Succuss") {
    onCompletion(response);
    return {
      type: "LOGIN_SUCCUSS",
      payload: username
    };
  }

  if (response == "Error") {
    onCompletion(response);
    return {
      type: "LOGIN_FAILED",
      payload: null
    };
  }
};

function loginService(username, password) {
  if (
    username == userData.USER_DATA[0].username &&
    password == userData.USER_DATA[0].password
  ) {
    return "Succuss";
  } else {
    return "Error";
  }
}
