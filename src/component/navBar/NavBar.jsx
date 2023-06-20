import React, { useContext, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../images/logo/logo.png";
import { Link } from "react-router-dom";
import { RxMoon } from "react-icons/rx";
import { AppLanguage } from "../../contextApi/languageContext";

const Header = () => {
  const { toggleLanguage, isEng } = useContext(AppLanguage);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className="  mx-auto flex items-center justify-center py-4  font-poppins">
      <header className="  container  m-3 mx-auto flex max-w-4xl items-center justify-between rounded-full bg-gray-100 p-5 capitalize shadow-lg">
        <Link to="/" className="logo text-accent text-2xl font-bold">
          <img src={Logo} alt="logo" className=" max-w-mdSize p-3" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block ">
          <ul className="flex justify-between px-4 ">
            <li className="px-4 text-green hover:underline md:border-r-2 lg:border-r-2 ">
              <Link to="/">Home</Link>
            </li>

            <li className="px-4 hover:text-green hover:underline md:border-r-2 lg:border-r-2">
              <Link to="/skills">skills</Link>
            </li>
            <li className="px-4 hover:text-green hover:underline md:border-r-2 lg:border-r-2 ">
              <Link to="/projects">Project</Link>
            </li>

            <li className="px-4 hover:text-green hover:underline ">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-center gap-4">
          <div className="z-30 cursor-pointer rounded-full border-4 border-amber-400 p-1">
            <RxMoon />
          </div>
          <label
            className="relative inline-flex cursor-pointer items-center"
            onClick={toggleLanguage}
          >
            <input type="checkbox" value="" className="peer sr-only" />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {isEng}
            </span>
          </label>
        </div>
        {/* Mobile Nav */}
        <div className="flex items-center justify-center">
          <nav
            className={
              !toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0  "
            }
          >
            <ul className="container mx-auto max-w-lg ">
              <li className="flex items-center justify-center py-4 hover:underline">
                <Link to="/">Home</Link>
              </li>

              <li className="flex items-center justify-center py-4 hover:underline ">
                <Link to="/skills">skills</Link>
              </li>
              <li className="flex items-center justify-center py-4 hover:underline ">
                <Link to="/projects">Project</Link>
              </li>
              <li className="flex items-center justify-center py-4 hover:underline ">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Toggle button */}
        <button onClick={handleToggle} className="block md:hidden">
          {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </button>
      </header>
    </div>
  );
};

export default Header;
