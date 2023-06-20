import React from "react";
import profilePic from "../../images/91061651.jpg";

const ContactMe = () => {
  return (
    <div>
      <img
        src={profilePic}
        alt="profile pic"
        className="container mx-auto max-w-md rounded-full "
      />
    </div>
  );
};

export default ContactMe;
