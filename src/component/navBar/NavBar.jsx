import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../images/logo/logo.png";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className=" mx-auto  flex items-center justify-center py-4 pt-14 font-poppins   ">
      <header className=" container fixed z-50 m-3 mx-auto flex max-w-4xl items-center justify-between rounded-full bg-white p-5 capitalize shadow-lg ">
        <a href="#home" className="logo text-accent text-2xl font-bold">
          <img src={Logo} alt="logo" className=" max-w-size" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:block  ">
          <ul className="flex justify-between px-4  ">
            <li className="px-4 text-green  hover:underline md:border-r-2  lg:border-r-2 ">
              <a href="#home">Home</a>
            </li>

            <li className="px-4 hover:text-green hover:underline  md:border-r-2 lg:border-r-2">
              <a href="#skills">skills</a>
            </li>
            <li className="px-4 hover:text-green hover:underline md:border-r-2 lg:border-r-2 ">
              <a href="#projects">Projects</a>
            </li>

            <li className="px-4 hover:text-green hover:underline ">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Nav */}
        <div className="flex items-center justify-center">
          <nav
            className={
              !toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0  "
            }
          >
            <ul className="container mx-auto max-w-lg ">
              <li className="flex items-center justify-center py-4 hover:underline ">
                <a href="#home">Home</a>
              </li>

              <li className="flex items-center justify-center py-4 hover:underline ">
                <a href="#skills">Skills</a>
              </li>
              <li className="flex items-center justify-center py-4 hover:underline ">
                <a href="#projects">Projects</a>
              </li>
              <li className="flex items-center justify-center py-4 hover:underline ">
                <a href="#contact">Contact</a>
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
