import { useState } from "react";

//next
import { useRouter } from "next/router";

//hooks
import { useAuthContext } from "./useAuthContext";

// firebase imports
import { auth } from "../firebase/firebaseSetup";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const { dispatch } = useAuthContext();
  const router = useRouter();

  //login user
  const login = (email: string, password: string) => {
    setError(null);

    //password sign in
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        //send to useReducer in AuthContext
        dispatch({ type: "LOGIN", payload: res.user });
        console.log("success login in :", res);

        //Route to AccountPage
        router.push(`/login/${res.user.uid}`);
      })
      .catch((err) => {
        console.log("error while tryin to log in :", err.message);

        setError("Wrong password or username");
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
