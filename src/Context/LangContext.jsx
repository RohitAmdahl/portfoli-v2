import React, { createContext, useState } from "react";

const AppContext = createContext();

export function LanguageProvider({ children }) {
  const [english, setEnglish] = useState(true);
  const [select, setSelect] = useState(true);

  return (
    <AppContext.Provider value={{ english, setEnglish, select, setSelect }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
