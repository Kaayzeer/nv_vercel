import { useState } from "react";

//hooks
import { useAuthContext } from "./useAuthContext";

// firebase imports
import { auth } from "../firebase/firebaseSetup";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const { dispatch } = useAuthContext();

  //login user
  const login = (email: string, password: string) => {
    setError(null);

    //password sign in
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        //send to useReducer in AuthContext
        dispatch({ type: "LOGIN", payload: res.user });
        console.log("success");
      })
      .catch((err) => {
        console.error("login gick inte igenom");
        setError(err.message);
      });
  };

  //forgot password, send to user email
  const sendPasswordReset = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("password sent to email");
    } catch (err: any) {
      console.error(err);
      setMessage(err.message);
    }
  };

  return { error, login, sendPasswordReset, message };
};
