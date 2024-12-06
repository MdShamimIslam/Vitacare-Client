import { createContext, useEffect, useReducer } from "react";
import { jwtDecode } from "jwt-decode";

const initialState = {
  user:
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  role: localStorage.getItem("role") || null,
  token: localStorage.getItem("token") || null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        role: null,
        token: null,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
      };

    case "LOGOUT":
      return {
        user: null,
        role: null,
        token: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    let logoutTimer;

    if (state.token) {
      try {
        const decodedToken = jwtDecode(state.token);
        const currentTime = Date.now() / 1000;
        const timeLeft = decodedToken.exp - currentTime;

        if (timeLeft <= 0) {
          dispatch({ type: "LOGOUT" });
          localStorage.clear();
        } else {
          logoutTimer = setTimeout(() => {
            dispatch({ type: "LOGOUT" });
            localStorage.clear();
          }, timeLeft * 1000);
        }
      } catch (error) {
        dispatch({ type: "LOGOUT" });
        localStorage.clear();
      }
    }

    return () => {
      clearTimeout(logoutTimer);
    };
  }, [state.token]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", state.token);
    localStorage.setItem("role", state.role);
  }, [state]);

  return (
    <authContext.Provider
      value={{
        user: state.user,
        token: state.token,
        role: state.role,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
