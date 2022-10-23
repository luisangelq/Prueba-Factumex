import { useReducer } from "react";
import { Auth, Props, User } from "../../interfaces/Context";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

const AuthState = (props) => {
  const userStored = JSON.parse(localStorage.getItem("user"));

  const initialState = {
    user: userStored ? userStored : null,
    isAuthenticated: userStored ? true : false,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState );

  const loginUser = (user) => {
    dispatch({
      type: "SUCCESSFUL_LOGIN",
      payload: user,
    });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loginUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
