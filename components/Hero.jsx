import React from "react";
import Card from "./Card";
import Search from "./Search";

function Hero() {
  return (
    <div className="relative font-hero w-[100vw]">
      <div className="flex w-full lg:justify-between  text-white p-7">
        <div className="flex items-center">
          <img src="../assets/logo.png" alt="" className="" />

          <img src="../assets/logo-text.png" alt="" />
        </div>
        <div className="flex text-white text-[20px] font-bold lg:text-lg sm:invisible">
          <h5 className="p-5 lg:pr-2">Home</h5>
          <h5 className="p-5 lg:pr-2">About Us</h5>
          <h5 className="p-5 lg:pr-2">Blogs</h5>
          <h5 className="p-5 lg:pr-2">Premiums</h5>
          <button className=" border-2 font-bold rounded-xl h-14 w-36 mt-2 lg:h-10 lg:w-28 lg:mt-4 ">
            Book Now
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 mt-3 lg:invisible sm:visible sm:mt-[25px] sm:mr-[50px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-white mx-10 mt-16 mb-4 font-medium font-[16px]">
        MOUNTAINS | PLAINS | BEACHES
      </h3>
      <h1 className="text-white text-[47px] mx-10 font-bold leading-[57px] lg:text-[38px]">
        Spend your vacation <br />
        with our activities
        <img
          src="/assets/plane.png"
          alt=""
          className="absolute top-60 left-[420px] lg:left-[370px] sm:top-64 sm:left-[460px]"
        />
      </h1>
      <div className="flex text-white w-1/2 justify-between mx-10 mt-10">
        <h1 className="text-[24px] font-[600] lg:text-[20px]">MOST POPULAR</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mr-16 lg:-mr-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <div className="flex mx-2">
        <Card
          img="/assets/card1.jpg"
          title="Trip To Palawan"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          }
          people="31 people going"
        />
        <Card
          img="/assets/card2.jpg"
          title="Trip To Baguio"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          }
          people="27 people going"
        />
        <Card
          img="/assets/card1.jpg"
          title="Trip To Baracay"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          }
          people="20 people going"
        />
      </div>
      <div className="flex justify-center">
        <div className="h-[144px] w-[95%] rounded-xl bg-white opacity-40 relative lg:h-[120px] sm:h-[120px] sm:mr-[22px]"></div>
      </div>
      <Search />
    </div>
  );
}

export default Hero;
