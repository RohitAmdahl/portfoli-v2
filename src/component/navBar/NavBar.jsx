import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../images/logo/logo.png";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  return (
    <header>
      <div className="flex justify-between items-center px-4 py-4 container max-w-4xl mx-auto  ">
        <div>
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        {/* desktop bar */}
        <nav className="">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#skill">Skill</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>
        {/* desktop nav */}
      </div>
      {/* Toggle button */}
    </header>
  );
};

export default NavBar;
