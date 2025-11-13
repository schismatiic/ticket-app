import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [globalID, setGlobalID] = useState(null);

  return (
    <GlobalContext.Provider value={{ globalID, setGlobalID }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
//chas gpt no entendi como funciona el use context pero quedan 16 horas para la presentacion
