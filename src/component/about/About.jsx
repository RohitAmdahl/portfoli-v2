import SocialMedia from "../stickyIconBar/SocialMedia";
const About = () => {
  return (
    <>
      <SocialMedia />
      <div className="mt-8 items-center px-10 lg:px-0  ">
        <div className="container m-10 mx-auto flex max-w-5xl items-center justify-center">
          <div
            className=" flex max-w-lg items-center justify-center p-4 md:mx-auto md:flex md:max-w-lg md:flex-col
         md:flex-wrap lg:max-w-xl"
          >
            <div className="flex flex-col  justify-center">
              <h1 className=" font-serif text-2xl font-bold capitalize text-black lg:text-3xl ">
                rohit kumar amdahl
              </h1>
              <h2 className=" pt-2 font-serif text-xl font-normal text-black ">
                Frontend developer
              </h2>
              <p className="pt-2 font-serif">
                Check out my projects, find more on my GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-5 mx-auto max-w-xl border-t-2 border-gray-300 p-5">
        <h2 className=" container mx-auto text-center font-serif text-2xl font-semibold">
          My Projects
        </h2>
      </div>
    </>
  );
};

export default About;
