import React, { useState } from "react";
import { createContext } from "react";

export const AppLanguage = createContext();

const LanguageProvider = ({ children }) => {
  const [isEng, setIsEng] = useState("false");

  // to set language
  function toggleLanguage() {
    if (isEng === "english") {
      setIsEng("norwegian");
    } else {
      setIsEng("english");
    }
  }

  return (
    <AppLanguage.Provider value={{ toggleLanguage }}>
      {children}
    </AppLanguage.Provider>
  );
};

export default LanguageProvider;
