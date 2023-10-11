import React, { useState } from "react";
import Logo from "../../images/logo/logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <div className=" mx-auto  flex items-center justify-around py-4  font-poppins">
      <header className="  container  m-3 mx-auto flex max-w-4xl justify-around rounded-lg bg-gray-200 p-5 capitalize">
        <Link to="/" className="logo text-accent text-2xl font-bold">
          <img src={Logo} alt="logo" className=" w-28 lg:max-w-size " />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block ">
          <ul className="flex justify-around px-4 ">
            <li className="px-4  hover:underline md:border-r-2 lg:border-r-2 ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : "notActive"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="px-4 hover:text-green hover:underline md:border-r-2 lg:border-r-2">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? "active" : "notActive"
                }
              >
                Skills
              </NavLink>
            </li>

            <li className="px-4 hover:text-green hover:underline ">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active" : "notActive"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* <div className=" flex items-center justify-center rounded-full  "></div> */}
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
                <NavLink to="/"> Home</NavLink>
              </li>

              <li
                onClick={handleToggle}
                className="flex items-center justify-center py-4 duration-100 ease-out hover:text-green hover:underline "
              >
                <NavLink to="/skills">Skills</NavLink>
              </li>

              <li
                onClick={handleToggle}
                className="flex items-center justify-center py-4 duration-100 ease-out hover:text-green hover:underline "
              >
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Toggle button */}
        <button
          onClick={handleToggle}
          className="block rounded-xl bg-emerald-300 px-3 py-1  md:hidden"
        >
          {!toggle ? (
            <span className=" flex items-center justify-center text-lg">
              {" "}
              <BiMenuAltRight size={20} /> Menu
            </span>
          ) : (
            <span className=" flex items-center justify-center text-lg">
              {" "}
              <GrFormClose size={25} /> Close
            </span>
          )}
        </button>
      </header>
    </div>
  );
};

export default Header;
