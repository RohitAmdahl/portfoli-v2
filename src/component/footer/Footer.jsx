import React from "react";
import picture from "../../images/myself.png";
import Logo from "../../images/logo/logo.png";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className=" mx-auto mt-9 w-1/2 border-t-2 pt-5">
      <div className=" mb-2 mt-4  p-2">
        <div className="container mx-auto max-w-lg  ">
          <div className=" container mx-auto mb-2 flex max-w-md items-center justify-center   ">
            <img src={Logo} alt={Logo} className=" max-w-size p-2" />
          </div>

          <div className="flex max-w-xl items-center justify-center ">
            <img
              src={picture}
              alt={picture}
              className="max-w-small rounded-full
                  p-1 "
            />
            <p className=" text-center"> &copy; Rohit.K.A {year}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
