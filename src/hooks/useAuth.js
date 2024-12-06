import { useContext } from "react";
import { authContext } from "../context/AuthContext";

const useAuth = () => {
  const { user, token, role, dispatch } = useContext(authContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.clear();
  };

  return { user, token, role, logout, dispatch };
};

export default useAuth;
