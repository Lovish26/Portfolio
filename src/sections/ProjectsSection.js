import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import blogly from "../assets/blogly.jpg";
import natours from "../assets/natours.jpg";
import forkify from "../assets/forkify.jpg";
import omnifood from "../assets/omnifood.jpg";

const ProjectsSection = () => {
  return (
    <div id="projects" className="bg-gray-50">
      <div className="projects-section-wrapper w-[1040px] mx-auto py-40">
        <div>
          <h3 className="text-[#147efb] text-[17px] font-bold mb-3 uppercase">
            Projects
          </h3>
          <h2 className="text-[#222] text-[25px] font-bold leading-[1.4] mb-16">
            Each project is a unique piece of development 🧩
          </h2>

          <div className="projects-card-container flex flex-col gap-20 ">
            {/*  ***********  */}
            {/*  PROJECT ITEM */}
            {/*  ***********  */}
            <div
              className="p-5  rounded-xl flex justify-between items-center gap-10"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}
            >
              <div
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.06) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                }}
                className="w-[530px] h-[340px] basis-1/2 overflow-hidden rounded-xl"
              >
                <a href="https://blogly.netlify.app/">
                  <img
                    src={blogly}
                    alt="Blogly"
                    className="  shadow-md  object-cover object-top transition-all duration-[12s] hover:-translate-y-[75%] ease-in-out overflow-hidden "
                  />
                </a>
              </div>
              <div className="basis-1/2">
                <h3 className="text-[#222] text-[17px] mb-5 uppercase font-bold text-center ">
                  Blogly 📝
                </h3>
                <p className="text-[#767676] text-[17px] font-medium text-center mb-4">
                  Blogly website is an online platform that allows anyone to
                  write personal blogs. The website provides an interface for
                  creating, editing and deleting blogs with user authentication
                  functionality.
                </p>
                <div className="flex gap-3 justify-center mb-8 flex-wrap">
                  <span
                    className="px-3 py-1 text-[17px] text-black font-semibold"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    MERN
                  </span>
                  <span
                    className="px-3 py-1 text-[17px] text-black font-semibold"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    Tailwind
                  </span>
                  <span
                    className="px-3 py-1 text-[17px] text-black font-semibold"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    AWS S3 Bucket
                  </span>
                </div>
                <div className="flex gap-5 items-center justify-center">
                  <a
                    className="text-[#222] text-[17px] font-medium flex items-center  gap-1 transition-all hover:text-[#147efb] duration-200"
                    href="https://github.com/Lovish26/Blogly-prod-backend"
                  >
                    Code <BsGithub className="w-7 h-7" />
                  </a>
                  <a
                    className="text-[#222] text-[17px] font-medium flex items-center  gap-1 transition-all hover:text-[#147efb] duration-200"
                    href="https://blogly.netlify.app/"
                  >
                    Live Demo <BiLinkExternal className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
            {/*  ***********  */}
            {/*  PROJECT ITEM */}
            {/*  ***********  */}
            <div
              className="p-5  rounded-xl flex justify-between items-center gap-10"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}
            >
              <div
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.06) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                }}
                className="w-[530px] h-[340px] basis-1/2 overflow-hidden rounded-xl"
              >
                <a href="https://natours-5yic.onrender.com/">
                  <img
                    src={natours}
                    alt="Natours"
                    className="  shadow-md  object-cover object-top transition-all duration-[12s] hover:-translate-y-[68%] ease-in-out overflow-hidden "
                  />
                </a>
              </div>
              <div className="basis-1/2">
                <h3 className="text-[#222] text-[17px] mb-5 uppercase font-bold text-center ">
                  Natours 🚀
                </h3>
                <p className="text-[#767676] text-[17px] font-medium text-center mb-4 px-2">
                  Natours is a tour booking web application that allows users to
                  book tours. For fake payment test, use a card number '4242
                  4242 4242 4242', valid future date, such as '12/34' and any
                  three-digit CVC.
                </p>
                <div className="flex gap-3 justify-center mb-8 flex-wrap ">
                  <span
                    className="px-3 py-1 text-[17px] text-black font-semibold"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    Node JS
                  </span>

                  <span
                    className="px-3 py-1 text-[17px] text-black font-semibold"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    MongoDB
                  </span>
                  <span
                    className="px-3 py-1 text-[17px] text-black font-semibold"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    Pug
                  </span>
                  <span
                    className="px-3 py-1 text-[17px] text-black font-semibold"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    Stripe
                  </span>
                </div>
                <div className="flex gap-5 items-center justify-center">
                  <a
                    className="text-[#222] text-[17px] font-medium flex items-center  gap-1 transition-all hover:text-[#147efb] duration-200"
                    href="https://github.com/Lovish26/natours"
                  >
                    Code <BsGithub className="w-7 h-7" />
                  </a>
                  <a
                    className="text-[#222] text-[17px] font-medium flex items-center  gap-1 transition-all hover:text-[#147efb] duration-200"
                    href="https://natours-5yic.onrender.com/"
                  >
                    Live Demo <BiLinkExternal className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
            {/*  ***********  */}
            {/*  PROJECT ITEM */}
            {/*  ***********  */}
            <div
              className="p-5  rounded-xl flex justify-between items-center gap-10"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}
            >
              <div
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.06) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                }}
                className="w-[530px] h-[340px] basis-1/2 overflow-hidden rounded-xl"
              >
                <a href="https://forkify-lovish.netlify.app/">
                  <img
                    src={forkify}
                    alt="forkify"
                    className="  shadow-md  object-cover object-top transition-all duration-[12s] hover:-translate-y-[22%] ease-in-out overflow-hidden "
                  />
                </a>
              </div>
              <div className="basis-1/2">
                <h3 className="text-[#222] text-[17px] mb-5 uppercase font-bold text-center ">
                  Forkify 🍔
                </h3>
                <p className="text-[#767676] text-[17px] font-medium text-center mb-4 px-2">
                  Forkify is a recipe web application where user can look up for
                  recipes and compile their own cookbook. User interface
                  provides user to adjust amount of servings and save them as
                  bookmark.
                </p>
                <div className="flex gap-3 justify-center mb-8 flex-wrap ">
                  <span
                    className="px-3 py-1 text-[17px] text-black font-semibold"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    HTML
                  </span>

                  <span
                    className="px-3 py-1 text-[17px] text-black font-semibold"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    CSS
                  </span>
                  <span
                    className="px-3 py-1 text-[17px] text-black font-semibold"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    JavaScript
                  </span>
                  <span
                    className="px-3 py-1 text-[17px] text-black font-semibold"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    API
                  </span>
                </div>
                <div className="flex gap-5 items-center justify-center">
                  <a
                    className="text-[#222] text-[17px] font-medium flex items-center  gap-1 transition-all hover:text-[#147efb] duration-200"
                    href="https://github.com/Lovish26/forkify"
                  >
                    Code <BsGithub className="w-7 h-7" />
                  </a>
                  <a
                    className="text-[#222] text-[17px] font-medium flex items-center  gap-1 transition-all hover:text-[#147efb] duration-200"
                    href="https://forkify-lovish.netlify.app/"
                  >
                    Live Demo <BiLinkExternal className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
            {/*  ***********  */}
            {/*  PROJECT ITEM */}
            {/*  ***********  */}
            <div
              className="p-5  rounded-xl flex justify-between items-center gap-10"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}
            >
              <div
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.06) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                }}
                className="w-[530px] h-[340px] basis-1/2 overflow-hidden rounded-xl"
              >
                <a href="https://omnifood-lovish.netlify.app/">
                  <img
                    src={omnifood}
                    alt="omnifood"
                    className="  shadow-md  object-cover object-top transition-all duration-[12s] hover:-translate-y-[83%] ease-in-out overflow-hidden "
                  />
                </a>
              </div>
              <div className="basis-1/2">
                <h3 className="text-[#222] text-[17px] mb-5 uppercase font-bold text-center ">
                  Omnifood 🚚
                </h3>
                <p className="text-[#767676] text-[17px] font-medium text-center mb-4 px-2">
                  Omnifood is a responsive one-page landing website featuring
                  fake food delivery company. I made this project to test my
                  front-end skills.
                </p>
                <div className="flex gap-3 justify-center mb-8 flex-wrap ">
                  <span
                    className="px-3 py-1 text-[17px] text-black font-semibold"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    HTML
                  </span>

                  <span
                    className="px-3 py-1 text-[17px] text-black font-semibold"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    CSS
                  </span>
                  <span
                    className="px-3 py-1 text-[17px] text-black font-semibold"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    JavaScript
                  </span>
                </div>
                <div className="flex gap-5 items-center justify-center">
                  <a
                    className="text-[#222] text-[17px] font-medium flex items-center  gap-1 transition-all hover:text-[#147efb] duration-200"
                    href="https://github.com/Lovish26/omnifood"
                  >
                    Code <BsGithub className="w-7 h-7" />
                  </a>
                  <a
                    className="text-[#222] text-[17px] font-medium flex items-center  gap-1 transition-all hover:text-[#147efb] duration-200"
                    href="https://omnifood-lovish.netlify.app/"
                  >
                    Live Demo <BiLinkExternal className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
