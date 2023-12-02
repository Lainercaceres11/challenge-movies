import { createContext, useContext, useState } from "react";
import { loginRequest, logoutRequest, registerRequest } from "../api/request";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("No existe el contexto");
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null)

  console.log(user);

  const login = async (user) => {
    try {
      const res = await loginRequest(user);
      setIsAuth(true);
      setUser(res.user.nombre);
      console.log(res.user.nombre)
      setToken(res.session.token)
      console.log(res.session.token)
      localStorage.setItem("token", res.session.token)
    } catch (error) {
      console.log(error);
    }
  };

  const registerApp = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res)
      setIsAuth(true);
      setUser(user.nombre)
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async (token) => {
    try {
      const res = await logoutRequest(token);
      console.log(res)
      localStorage.getItem("token", JSON.stringify(token))
      setIsAuth(false);
      setUser(null)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ login, registerApp, logout, isAuth, user, token }}>
      {children}
    </AuthContext.Provider>
  );
};
