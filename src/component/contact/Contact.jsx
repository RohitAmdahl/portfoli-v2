import React, { useContext } from "react";
import profilePic from "../../images/91061651.jpg";
import ContactForm from "./ContactForm";

import {
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
const ContactMe = () => {
  return (
    <>
      <div className=" font-serif font-thin ">
        <h1 className="py-3 pt-5 text-center text-5xl  ">Let's Connect!</h1>
        <p className="py-4 text-center font-sans text-xl font-bold">
          +47 405 38 464
        </p>
        <ul className=" mx-auto flex max-w-sm cursor-pointer justify-between gap-3 p-4 py-10 lg:py-5">
          <li className="cursor-pointer  rounded-full bg-gray-200  p-3 py-2 shadow-lg   ">
            <a href="https://www.facebook.com/">
              <FaFacebook size={20} className="hover:text-blue-600" />
            </a>
          </li>
          <li className=" cursor-pointer rounded-full bg-gray-200 p-3 py-2 shadow-lg ">
            <a href="https://www.linkedin.com/in/rohit-kumar-amdahl-308047140/">
              <FaLinkedinIn size={20} className="hover:text-blue-600" />
            </a>
          </li>
          <li className="cursor-pointer rounded-full bg-gray-200  p-3 py-2 shadow-lg ">
            <a href="https://github.com/RohitAmdahl">
              <FaGithub size={20} className=" hover:text-black" />
            </a>
          </li>
          <li className="cursor-pointer rounded-full bg-gray-200  p-3 py-2 shadow-lg ">
            <a href="https://www.instagram.com/">
              <FaInstagram
                size={20}
                className=" text-red-600 hover:text-red-800 "
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="py-15 container m-4 mx-auto max-w-5xl items-center justify-center p-8 lg:flex  ">
        <div>
          <img
            src={profilePic}
            alt="profile pic"
            className="container mx-auto max-w-xs rounded-full p-10 md:p-4 lg:p-3 "
          />
          <p className="text-center text-lg text-black ">
            Looking forward to connecting with you! Feel free to reach out
          </p>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactMe;
