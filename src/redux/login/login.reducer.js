
const INITIAL_STATE = {
  isLogin: false,
  userName: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCUSS":
      return {
        ...state,
        isLogin: true,
        userName: action.payload,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        isLogin: false,
        userName: '',
      };
    default:
      return state;
  }
};

export default loginReducer;
