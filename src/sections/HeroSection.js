import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import html from "../assets/html5-logo.svg";
import css from "../assets/css3-logo.svg";
import javascript from "../assets/javascript-logo.svg";
import react from "../assets/react-logo.svg";
import tailwind from "../assets/tailwind-logo.svg";
import nodejs from "../assets/nodejs-logo.svg";
import express from "../assets/express-logo.svg";
import mongodb from "../assets/mongodb-logo.svg";

const HeroSection = () => {
  return (
    <div className="bg-gray-50">
      <div className="hero-section-wrapper h-screen w-[1040px] flex flex-col justify-center mx-auto gap-20">
        <div className="flex items-center justify-center px-8 gap-24 ">
          <div className="basis-2/3 ">
            <h1 className="text-[58px] my-4 font-bold text-[#222]  leading-[1.1]  tracking-[2px] ">
              Full Stack Web Developer 💻
            </h1>
            <p className="text-[18px] text-[#777]">
              Hi, I'm Lovish Kamboj. A passionate Full-stack Web Developer based
              in Haryana, India.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <a href="https://www.linkedin.com/in/lovish-kamboj-7537bb180/">
                <BsLinkedin className="w-[30px] h-[30px] text-[#222] hover:text-[#147efb] transition duration-200 " />{" "}
              </a>
              <a href="https://github.com/Lovish26">
                <BsGithub className="w-[30px] h-[30px] text-[#222] hover:text-[#147efb] transition duration-200 " />
              </a>
            </div>
          </div>
          <div className="hero-img"></div>
        </div>

        <div className="hero-tech-wrapper px-8 flex items-center ">
          <h6 className="text-[18px] font-medium">Tech Stack</h6>

          <div className="flex gap-5 ml-10 flex-wrap justify-center">
            <img
              className="p-3 shadow-lg cursor-pointer rounded-full "
              src={html}
              alt="html5-logo"
              title="HTML5"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            />
            <img
              className="p-3 shadow-lg cursor-pointer rounded-full "
              src={css}
              alt="css3-logo"
              title="CSS3"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            />
            <img
              className="p-3 shadow-lg cursor-pointer rounded-full "
              src={javascript}
              alt="javascript-logo"
              title="Javascript"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            />
            <img
              className="p-3 shadow-lg cursor-pointer rounded-full w-[72px] h-[72px]"
              src={react}
              alt="react-logo"
              title="React JS"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            />
            <img
              className="p-3 shadow-lg cursor-pointer rounded-full w-[72px] h-[72px]"
              src={tailwind}
              alt="tailwind-logo"
              title="Tailwind"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            />
            <img
              className="p-3 shadow-lg cursor-pointer rounded-full w-[72px] h-[72px]"
              src={nodejs}
              alt="nodejs-logo"
              title="Node JS"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            />
            <img
              className="p-3 shadow-lg cursor-pointer rounded-full w-[72px] h-[72px]"
              src={express}
              alt="express-logo"
              title="Express JS"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            />
            <img
              className="p-3 shadow-lg cursor-pointer rounded-full w-[72px] h-[72px]"
              src={mongodb}
              alt="mongodb-logo"
              title="MongoDB"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
