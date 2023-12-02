/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { loginRequest } from "../api/request";

export const AuthContext = createContext();

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context) {
    throw new Error("No existe el contexto");
  }

  return context;
};

const AuthProvider = ({ children }) => {
  const [isAuht, setIsAuth] = useState(false);

  const isLogged = async (data) => {
    await loginRequest(data);
    if (data) {
      setIsAuth(true);
    }
  };
  <AuthContext.Provider value={{ isAuht, isLogged }}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
