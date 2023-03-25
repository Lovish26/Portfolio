import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-zinc-900">
      <div className="footer-wrapper w-[1040px] mx-auto h-[20vh] flex items-center justify-between">
        <p className="text-white font-bold">
          Copyright © 2023. All rights are reserved
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/lovish-kamboj-7537bb180/">
            <BsLinkedin className="text-white w-[25px] h-[25px] hover:scale-125 transition duration-200 " />{" "}
          </a>
          <a href="https://github.com/Lovish26">
            <BsGithub className="text-white w-[25px] h-[25px]  hover:scale-125 transition duration-200 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
