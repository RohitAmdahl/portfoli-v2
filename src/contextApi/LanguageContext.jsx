import React, { useState } from "react";
import { createContext } from "react";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [isEng, setIsEng] = useState("english");

  // to set language
  function toggleLanguage() {
    if (isEng === "english") {
      setIsEng("norwegian");
    } else {
      setIsEng("english");
    }
  }

  return (
    <LanguageContext.Provider value={{ toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
