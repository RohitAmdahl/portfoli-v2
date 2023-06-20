import React from "react";
import profilePic from "../../images/91061651.jpg";
import ContactForm from "./ContactForm";
const ContactMe = () => {
  return (
    <>
      <div>
        <img
          src={profilePic}
          alt="profile pic"
          className="container mx-auto max-w-md rounded-full p-10 md:p-4 lg:p-3 "
        />
      </div>
      <ContactForm />
    </>
  );
};

export default ContactMe;
