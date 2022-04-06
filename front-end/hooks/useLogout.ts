import {useState} from 'react';
import { useAuthContext } from "./useAuthContext";
//firebase imports
import { auth } from '../firebaseSetup';
import { signOut } from "firebase/auth";

export const useLogout = () => {
    const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        console.log("utloggad");
      })
      .catch((err) => {
          setError(err.message)
          console.log("utloggad");
        });
  };
  return { logout, error };
};