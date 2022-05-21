import React from "react";

function Subscribe() {
  return (
    <div className="relative my-32 font-poppins w-[100vw]">
    <div className="bg-[#DFD7F9] h-[407px] w-[90%] sm:w-[90vw] sm:h-[300px]  my-10 rounded-tl-[129px] rounded-xl relative ml-20 lg:ml-10 md:ml-10">
        <img className="absolute top-0 right-0 opacity-20" src="/assets/circle2.png" alt="" />
      <div
        className="h-[60px] w-[60px] bg-[#FF8C6C] flex items-center justify-center rounded-full absolute top-0 right-0 -mt-4 rotate-45 -mr-4
      "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-white h-[45px] w-[40px] mb-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      </div>
      <div className="">
      <h1 className=" text-center leading-[54px] text-[33px] font-semibold text-[#5E6282] sm:text-[25px]">
        Subscribe to get information, latest news and other {<br />} interesting
        offers about WindTravels
      </h1>
      </div>
      <div className="flex justify-center items-center mt-36 xl:mt-20 lg:mt-10 md:mt-14">
        <div className="flex bg-white relative z-50 w-[421px] h-[68px] items-center rounded-md lg:w-[380px] lg:h-[58px] md:w-[380px] md:h-[52px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-6 mr-2 text-slate-500 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <input className="bg-transparent outline-none p-2" type="email" placeholder="Your email"/>
        </div>
        <button className="py-[18px] font-semibold px-[60px] bg-[#FF8C6C] rounded-md ml-14 text-white text-2xl xl:px-[45px] lg:px-[30px] lg:py-[12px] lg:text-[20px] md:py-[9px] md:px-[25px]">Subscribe</button>
      </div>
      <div>
      <img className="absolute bottom-0 left-6 opacity-20" src="/assets/circle1.png" alt="" />
      </div>
    </div>
    <img src="/assets/decoreB.png" alt="" className="absolute -bottom-20 right-20 xl:-bottom-40 xl:right-12 lg:-bottom-38 lg:right-1 md:-bottom-[50px] md:w-[100px] md:right-1" />
    </div>
  );
}

export default Subscribe;
