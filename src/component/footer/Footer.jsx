import React from "react";
import Logo from "../../images/logo/logo.png";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <>
        <footer>
          <div className=" mb-2 mt-4 bg-gray-100 p-2">
            <div className=" container mx-auto mb-2 flex max-w-md items-center justify-center   ">
              <img src={Logo} alt={Logo} className=" p-2" />
            </div>
            <div className="container mx-auto flex max-w-md items-center justify-center">
              <p> &copy; Rohit.K.A {year}</p>
            </div>
            <div className=" p-4 text-center capitalize ">
              <p className=" mb-3 text-amber-950 ">
                Build with create react App,tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </>
    </>
  );
};

export default Footer;
