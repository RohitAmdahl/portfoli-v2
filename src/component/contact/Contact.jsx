import React from "react";
import profilePic from "../../images/91061651.jpg";
import ContactForm from "./ContactForm";
const ContactMe = () => {
  return (
    <>
      <div className=" font-serif font-thin ">
        <h1 className="py-3 pt-5 text-center text-5xl ">Contact Me</h1>
      </div>
      <div>
        <img
          src={profilePic}
          alt="profile pic"
          className="container mx-auto max-w-xs rounded-full p-10 md:p-4 lg:p-3 "
        />
      </div>
      <ContactForm />
    </>
  );
};

export default ContactMe;
