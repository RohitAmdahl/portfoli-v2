import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../images/logo/logo.png";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className=" py-4  font-poppins mx-auto flex justify-center items-center pt-14  ">
      <header className=" z-50 fixed max-w-4xl mx-auto container bg-white flex justify-between items-center shadow-lg p-5 m-3 rounded-full capitalize ">
        <a href="#home" className="logo text-2xl font-bold text-accent">
          <img src={Logo} alt="logo" className=" max-w-size" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:block  ">
          <ul className="flex justify-between px-4  ">
            <li className="px-4 text-green  hover:underline lg:border-r-2  md:border-r-2 ">
              <a href="#home">Home</a>
            </li>

            <li className="px-4 hover:text-green hover:underline  lg:border-r-2 md:border-r-2">
              <a href="#skills">skills</a>
            </li>
            <li className="px-4 hover:text-green hover:underline lg:border-r-2 md:border-r-2 ">
              <a href="#projects">Projects</a>
            </li>

            <li className="px-4 hover:text-green hover:underline ">
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
              <li className="py-4 flex justify-center items-center hover:underline ">
                <a href="#home">Home</a>
              </li>

              <li className="py-4 flex justify-center items-center hover:underline ">
                <a href="#skills">Skills</a>
              </li>
              <li className="py-4 flex justify-center items-center hover:underline ">
                <a href="#projects">Projects</a>
              </li>
              <li className="py-4 flex justify-center items-center hover:underline ">
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
