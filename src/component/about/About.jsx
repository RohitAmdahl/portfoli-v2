import SocialMedia from "../stickyIconBar/SocialMedia";
const About = () => {
  return (
    <>
      <SocialMedia />
      <div className="container m-10 mx-auto flex max-w-2xl flex-col justify-center p-4 ">
        <h1 className=" font-serif text-2xl font-bold capitalize text-black lg:text-3xl ">
          rohit kumar amdahl
        </h1>
        <h2 className=" pt-2 font-serif text-xl font-normal text-black ">
          Junior Frontend Developer, Noroff graduate, passionate about creating
          exceptional web experiences.
        </h2>
        <p className="pt-2 font-serif">
          Check out my projects, find more on my GitHub.
        </p>
      </div>
    </>
  );
};

export default About;
