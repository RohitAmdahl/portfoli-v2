import React, { useContext, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../images/logo/logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Language from "./Language";
import AppContext from "../../Context/LangContext";
// import { RxMoon } from "react-icons/rx";
// import { FiSun } from "react-icons/fi";
const Header = () => {
  const { english } = useContext(AppContext);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <div className="  mx-auto flex items-center justify-center py-4  font-poppins">
      <header className="  container  m-3 mx-auto flex max-w-4xl items-center justify-between rounded-full bg-gray-100 p-5 capitalize shadow-lg">
        <Link to="/" className="logo text-accent text-2xl font-bold">
          <img src={Logo} alt="logo" className=" max-w-mdSize " />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block ">
          <ul className="flex justify-between px-4 ">
            <li className="px-4  hover:underline md:border-r-2 lg:border-r-2 ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : "notActive"
                }
              >
                {english ? "Home" : "Hjem"}
              </NavLink>
            </li>

            <li className="px-4 hover:text-green hover:underline md:border-r-2 lg:border-r-2">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? "active" : "notActive"
                }
              >
                {english ? "skills" : "Ferdigheter"}
              </NavLink>
            </li>
            <li className="px-4 hover:text-green hover:underline md:border-r-2 lg:border-r-2 ">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "active" : "notActive"
                }
              >
                {english ? "Project" : "Prosjekter"}
              </NavLink>
            </li>

            <li className="px-4 hover:text-green hover:underline ">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active" : "notActive"
                }
              >
                {english ? "Contact" : "Kontakt"}
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-center ">
          <div className="z-30 flex cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-green p-1">
            <Language />
          </div>
        </div>
        {/* Mobile Nav */}
        <div className="flex items-center justify-center ">
          <nav
            className={
              !toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0  "
            }
          >
            <ul className="container mx-auto max-w-lg   ">
              <li
                onClick={handleToggle}
                className="flex items-center justify-center py-4 duration-100  ease-out hover:text-green hover:underline"
              >
                <NavLink to="/"> {english ? "Home" : "Hjem"}</NavLink>
              </li>

              <li
                onClick={handleToggle}
                className="flex items-center justify-center py-4 duration-100 ease-out hover:text-green hover:underline "
              >
                <NavLink to="/skills">
                  {english ? "skills" : "Ferdigheter"}
                </NavLink>
              </li>
              <li
                onClick={handleToggle}
                className="flex items-center justify-center py-4 duration-100 ease-out hover:text-green hover:underline "
              >
                <NavLink to="/projects">
                  {english ? "Project" : "Prosjekter"}
                </NavLink>
              </li>
              <li
                onClick={handleToggle}
                className="flex items-center justify-center py-4 duration-100 ease-out hover:text-green hover:underline "
              >
                <NavLink to="/contact">
                  {english ? "Contact" : "Kontakt"}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Toggle button */}
        <button
          onClick={handleToggle}
          className="block rounded-full shadow-lg shadow-gray-400 md:hidden"
        >
          {!toggle ? (
            <AiOutlineMenu size={30} className=" p-1" />
          ) : (
            <AiOutlineClose size={30} />
          )}
        </button>
      </header>
    </div>
  );
};

export default Header;
