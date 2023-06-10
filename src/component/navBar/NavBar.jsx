import React from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../images/logo/logo.png";
const NavBar = () => {
  return (
    <header>
      <div className="flex justify-between items-center px-4 py-4 container max-w-4xl mx-auto  ">
        <div>
          <a href="/">
            <img src={Logo} alt="logo" className="" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
