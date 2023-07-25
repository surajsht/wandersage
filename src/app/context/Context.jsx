"use client";

import { createContext, useContext } from "react";
import { useState } from "react";

const GlobalContext = createContext();

const Context = ({ children }) => {
  let [offcanvas, setOffcanvas] = useState(false);

  let openOffcanvas = () => {
    setOffcanvas(true);
  };

  let closeOffcanvas = () => {
    setOffcanvas(false);
  };

  const contextValue = { offcanvas, openOffcanvas, closeOffcanvas };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

const CustomContext = () => {
  return useContext(GlobalContext);
};

export default Context;
export { CustomContext };
