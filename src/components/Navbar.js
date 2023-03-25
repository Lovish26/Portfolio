import React, { useState } from "react";

const Navbar = () => {
  const [openNavBar, setOpenNavBar] = useState(false);

  return (
    <div
      className="bg-white h-20 flex items-center justify-between px-16 fixed inset-0  z-[999]  "
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
    >
      <a className="text-[#111] text-[20px] font-bold " href="/">
        Lovish.dev
      </a>
      <ul className="nav-links flex items-center gap-8 font-medium text-[18px]">
        <li>
          <a
            className="hover:text-[#147efb] transition-all duration-200"
            href="#"
          >
            {" "}
            Home
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#147efb] transition-all duration-200"
            href="#about"
          >
            {" "}
            About
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#147efb] transition-all duration-200"
            href="#projects"
          >
            {" "}
            Projects
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#147efb] transition-all duration-200"
            href="#contact"
          >
            {" "}
            Contact
          </a>
        </li>
      </ul>
      <button onClick={() => setOpenNavBar(true)} className="small-nav-menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {openNavBar && (
        <div className="small-nav-container">
          <ul className="small-nav-links flex items-center gap-8 font-medium text-[18px]">
            <li>
              <a onClick={() => setOpenNavBar(false)} href="#">
                {" "}
                Home
              </a>
            </li>
            <li>
              <a onClick={() => setOpenNavBar(false)} href="#about">
                {" "}
                About
              </a>
            </li>
            <li>
              <a onClick={() => setOpenNavBar(false)} href="#projects">
                {" "}
                Projects
              </a>
            </li>
            <li>
              <a onClick={() => setOpenNavBar(false)} href="#contact">
                {" "}
                Contact
              </a>
            </li>
            <button
              onClick={() => setOpenNavBar(false)}
              className="small-nav-close-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
