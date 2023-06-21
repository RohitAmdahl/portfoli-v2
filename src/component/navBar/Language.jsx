import React, { useContext } from "react";
import norway from "../../images/icons/norway.png";
import england from "../../images/icons/england.png";
import AppContext from "../../Context/LangContext";
const Language = () => {
  const { english, setEnglish } = useContext(AppContext);
  const changeLanguage = (e) => {
    if (e.target.value === "en") {
      setEnglish(true);
    }
    if (e.target.value === "no") {
      setEnglish(false);
    }
  };
  return (
    <div className="flex items-center justify-center gap-2">
      <div>
        {english ? (
          <img src={england} alt="england flag" className="w-10" />
        ) : (
          <img src={norway} alt="norway flag" className="w-10" />
        )}
      </div>
      <select
        className=" flex gap-2 border-none  bg-transparent outline-1 "
        onChange={changeLanguage}
      >
        <option value="en">EN</option>
        <option value="no">NO</option>
      </select>
    </div>
  );
};

export default Language;
