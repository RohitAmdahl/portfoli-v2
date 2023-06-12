import React from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div>
      <div className="fixed mt-24 p-4 pt-14 text-black lg:mt-56  ">
        <ul className=" flex flex-col justify-center gap-3 py-10 lg:py-5">
          <li className="cursor-pointer  py-2 hover:animate-bounce ">
            <a href="https://www.facebook.com/" className="hover:text-blue-600">
              <FaFacebook size={20} />
            </a>
          </li>
          <li className="cursor-pointer py-2 hover:animate-bounce ">
            <a
              href="https://www.linkedin.com/in/rohit-kumar-amdahl-308047140/"
              className="hover:text-blue-600"
            >
              <FaLinkedinIn size={20} />
            </a>
          </li>
          <li className="cursor-pointer py-2 hover:animate-bounce ">
            <a
              href="https://github.com/RohitAmdahl"
              className="hover:text-blue-600"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li className="cursor-pointer py-2 hover:animate-bounce ">
            <a
              href="https://www.instagram.com/"
              className="hover:text-red-600   "
            >
              <FaInstagram size={20} />
            </a>
          </li>
        </ul>
        <div className=" mx-auto h-20 w-0.5  bg-green"></div>
      </div>
    </div>
  );
};

export default SocialMedia;
