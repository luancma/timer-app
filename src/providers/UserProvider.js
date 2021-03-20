import React from "react";
import { useHistory } from "react-router-dom";
import { INITIAL_STATE, loginReducer, TYPES } from "../reducers/loginReducer";

export const UserContext = React.createContext({});

export function UserProvider({ children }) {
  const history = useHistory();
  const [state, dispatch] = React.useReducer(loginReducer, INITIAL_STATE);

  const signInUser = () => {
    dispatch({ type: TYPES.SIGN_IN });
    localStorage.setItem("loged", true);
    history.push("/logado");
  };

  const signOutUser = () => {
    dispatch({ type: TYPES.SIGN_OUT });
    localStorage.clear();
  };
  const userProviderValue = {
    state,
    signInUser,
    signOutUser
  };

  return (
    <UserContext.Provider value={userProviderValue}>
      {children}
    </UserContext.Provider>
  );
}
