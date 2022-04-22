import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  // throw error if trying to access outside of context provider
  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  return context;
};
