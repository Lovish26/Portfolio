import React from "react";
import logo from "../assets/logo.svg";

const AboutSection = () => {
  return (
    <>
      <div
        id="about"
        className="about-section-wrapper h-screen w-[1040px] flex items-center justify-center mx-auto gap-10"
      >
        <div className="basis-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"
            alt="unsplash img"
            className="w-[450px] h-[350px] rounded-2xl  "
          />
          <img
            className="h-[200px] w-[200px] absolute bottom-[-10%] right-0 animate-spin-slow z-20"
            src={logo}
            alt=""
          />
          <span className="text-[38px] absolute z-30 bottom-[45px] right-[75px]">
            👨‍💻
          </span>
        </div>
        <div className="basis-1/2">
          <h3 className="text-[#147efb] text-[17px] font-bold mb-3 uppercase">
            About me
          </h3>
          <h2 className="text-[#222] text-[25px] font-bold leading-[1.4] mb-5 ">
            A dedicated Full Stack Developer based in Haryana, India
          </h2>

          <p className="text-[#767676] text-[17px]  leading-[1.5] ">
            As a Full Stack Developer, I possess an impressive arsenal of skills
            in HTML, CSS, JavaScript, React, Tailwind, Nodejs, Expressjs,
            MongoDB and Mongoose. I excel in designing and maintaining
            responsive websites that offer a smooth user experience. My
            expertise lies mainly in Front-end but I can also do Back-end work.
            I am also a team player who thrives in collaborating with
            cross-functional teams to produce outstanding web applications.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
