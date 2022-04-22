import { useState } from "react";

//hooks
import { useAuthContext } from "./useAuthContext";
//firebase imports
import { auth } from "../firebase/firebaseSetup";
import { signOut } from "firebase/auth";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  //logout user
  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        console.log("utloggad");
      })
      .catch((err) => {
        setError(err.message);
        console.log("utloggad");
      });
  };
  return { logout, error };
};
