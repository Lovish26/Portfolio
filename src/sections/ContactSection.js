import React from "react";

const ContactSection = () => {
  return (
    <>
      <div
        id="contact"
        className="contact-section-wrapper w-[1040px] mx-auto h-[70vh] flex items-center"
      >
        <div className="w-full">
          <h3 className="text-[#147efb] text-[17px] font-bold mb-3 uppercase">
            Contact me
          </h3>
          <h2 className="text-[#222] text-[25px] font-bold leading-[1.4] mb-5 ">
            Don't be shy! Hit me up! 👇
          </h2>

          <div className="flex items-center gap-28  mt-20">
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-20 h-20 text-[#147efb] py-4 rounded-full"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <div>
                <h4 className="text-[#222] text-[17px] font-bold">Location</h4>
                <p className="text-[#797979] text-[17px]">Haryana, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-20 h-20 text-[#147efb] py-4 rounded-full"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <div>
                <h4 className="text-[#222] text-[17px] font-bold">Mail</h4>
                <p className="text-[#797979] text-[17px]">
                  <a href="mailto:coc2610199914@gmail.com">
                    coc2610199914@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
