import React from "react";
import profilePic from "../../images/91061651.jpg";
import ContactForm from "./ContactForm";
const ContactMe = () => {
  return (
    <>
      <div className=" font-serif font-thin ">
        <h1 className="py-3 pt-5 text-center text-5xl ">"Let's Connect!</h1>
        <p className="text-center font-sans text-2xl font-bold">
          +47 405 38 464
        </p>
      </div>
      <div className="py-15 container m-4 mx-auto max-w-5xl items-center justify-center p-8 lg:flex  ">
        <div>
          <img
            src={profilePic}
            alt="profile pic"
            className="container mx-auto max-w-xs rounded-full p-10 md:p-4 lg:p-3 "
          />
          <p className="text-center text-lg text-black ">
            Looking forward to connecting with you!" feel free to reach out.
          </p>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactMe;
