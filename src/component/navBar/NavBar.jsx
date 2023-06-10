import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../images/logo/logo.png";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className="  py-4 max-w-4xl container mx-auto  w-full font-poppins">
      <header className=" flex justify-between items-center max-w-4xl shadow-lg m-3 rounded-full p-3">
        <a href="#home" className="logo text-2xl font-bold text-accent">
          <img src={Logo} alt="logo" className=" max-w-size" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:block  ">
          <ul className="flex justify-between px-4 ">
            <li className="px-4 ">
              <a href="#about">About</a>
            </li>
            <li className="px-4 ">
              <a href="#projects">Projects</a>
            </li>
            <li className="px-4 ">
              <a href="#skills">skills</a>
            </li>
            <li className="px-4 ">
              <a href="#skills">skills</a>
            </li>
            <li className="px-4 ">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Nav */}
        <div className="flex justify-center items-center">
          <nav
            className={
              !toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0  "
            }
          >
            <ul className="container max-w-lg mx-auto ">
              <li className="py-4 flex justify-center items-center">
                <a href="/#about">About</a>
              </li>
              <li className="py-4 flex justify-center items-center">
                <a href="/#projects">Projects</a>
              </li>
              <li className="py-4 flex justify-center items-center">
                <a href="/#blog">Blog</a>
              </li>
              <li className="py-4 flex justify-center items-center">
                <a href="/#contact">Contact</a>
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

export default NavBar;
