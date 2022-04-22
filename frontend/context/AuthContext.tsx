import React, { createContext, useReducer, useEffect, ReactNode } from "react";

//firebase imports
import { auth } from "../firebase/firebaseSetup";
import { onAuthStateChanged } from "firebase/auth";

type User = {
  firstname: string;
  surname: string;
  email: string;
  phone: string;
} | null;

// create context
export const AuthContext = createContext<any>(null);

// context types from useReducer
export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

interface Props {
  children?: ReactNode;
}

//Provide firebase auth to context API
export const AuthContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
