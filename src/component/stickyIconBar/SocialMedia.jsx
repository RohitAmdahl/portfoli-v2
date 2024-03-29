import React from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className=" hidden md:block lg:block ">
      <div className="fixed mt-24 p-4  text-black lg:mt-10  ">
        <ul className=" flex cursor-pointer flex-col justify-center gap-3 py-10 lg:py-5">
          <li className="cursor-pointer  py-2 hover:animate-bounce ">
            <a href="https://www.facebook.com/" className="text-blue-600">
              <FaFacebook size={20} className="hover:text-blue-600" />
            </a>
          </li>
          <li className="cursor-pointer py-2 hover:animate-bounce ">
            <a href="https://www.linkedin.com/in/rohit-kumar-amdahl-308047140/">
              <FaLinkedinIn size={20} className="text-blue-600" />
            </a>
          </li>
          <li className="cursor-pointer py-2 hover:animate-bounce ">
            <a href="https://github.com/RohitAmdahl" className="">
              <FaGithub size={20} className=" hover:text-black" />
            </a>
          </li>
          <li className="cursor-pointer py-2 hover:animate-bounce ">
            <a href="https://www.instagram.com/" className="  ">
              <FaInstagram
                size={20}
                className=" text-red-600 hover:text-red-800  "
              />
            </a>
          </li>
        </ul>
        <div className=" mx-auto h-20 w-0.5  bg-green"></div>
      </div>
    </div>
  );
};

export default SocialMedia;
