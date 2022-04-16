import { createContext, useState } from "react";


export const LoginContext = createContext();


function LoginContextProvider({ children }) {
  const [login, setLogin] = useState(false);

  function handelLogin() {
    setLogin(!login);
  }

  return <LoginContext.Provider value={{login, handelLogin}}>{children}</LoginContext.Provider>;
}

export {LoginContextProvider}