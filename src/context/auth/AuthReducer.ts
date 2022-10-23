import { Auth, User } from "../../interfaces/Context";

type UserAction = {
  type: "SUCCESSFUL_LOGIN" | "LOGOUT";
  payload: User | null;
}

const AuthReducer = (state: Auth, action: UserAction ): Auth => {
  switch (action.type) {
    case "SUCCESSFUL_LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload?.userName));
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
