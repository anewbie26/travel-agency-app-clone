import React from "react";
import { Reveal, Slide } from "react-reveal";
import Fade from "react-reveal/Fade";

import Flash from "react-reveal/Flash";
import Card from "./Card";
import Search from "./Search";

function Hero() {
  return (
    <div className="relative font-hero w-[100vw]">
      <div className="flex w-full lg:justify-between md:justify-evenly text-white p-7 md:py-0 xl:p-4">
        <div className="flex items-center md:w-auto">
          <img
            src="../assets/logo.png"
            alt=""
            className="md:h-14 md:w-[50px]"
          />

          <img
            src="../assets/logo-text.png"
            alt=""
            className="md:h-8 md:w-[300px] xl:w-56 xl:h-[30px]"
          />
        </div>
        <div className="flex text-white text-[20px] font-bold lg:text-lg sm:invisible xl:visible lg:visible ">
          <h5 className="p-5 lg:pr-2 xl:ml-6">Home</h5>
          <h5 className="p-5 lg:pr-2 xl:ml-6">About Us</h5>
          <h5 className="p-5 lg:pr-2 xl:ml-6">Blogs</h5>
          <h5 className="p-5 lg:pr-2 xl:ml-6">Premiums</h5>
          <button className=" border-2 font-bold rounded-xl h-14 w-36 mt-2 lg:h-10 lg:w-28 lg:mt-4  xl:-mr-16 xl:ml-4 lg:-mr-20 lg:ml-4 xl:h-14 xl:w-36 xl:mt-2">
            Book Now
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mt-3 lg:invisible sm:visible sm:mt-[25px] sm:mr-[50px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      {/* <h3 classNameName=" mx-10 mt-16 mb-4 font-medium font-[16px] xl:font-medium xl:-mb-10">
        MOUNTAINS | PLAINS | BEACHES
      </h3> */}
      <Flash>
        <h1 className="text-white text-[47px] mx-10 font-bold leading-[57px] lg:text-[34px] xl:font-bold xl:text-[43px]  md:mr-0 xl:mt-28">
          Spend your vacation <br />
          with our activities
        </h1>
      </Flash>
      <Slide left>
        <img
          src="/assets/plane.png"
          alt=""
          className="absolute top-60 left-[420px] lg:left-[350px] lg:top-60 sm:top-64 sm:left-[460px] xl:left-[430px] xl:top-56"
        />
      </Slide>
      <div className="flex text-white w-1/2 justify-between mx-10 mt-10">
        <h1 className="text-[24px] font-[600] lg:text-[20px]">MOST POPULAR</h1>
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-16 lg:-mr-16 xl:mr-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
       
      </div>
      
        <div className="flex mx-2 md:">
        <Flash count={0.5}>
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
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            }
            people="31 people going"
          />
          </Flash>
          <Flash delay={80} count={0.5}>
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
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            }
            people="27 people going"
          />
            </Flash>
            <Flash count={0.5} delay={160}>
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
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            }
            people="20 people going"
          />
          </Flash>
        </div>
     
      <div className="flex justify-center md:justify-start md:ml-10">
        <div className="h-[144px] w-[95%] rounded-xl bg-white opacity-40 relative lg:h-[120px] sm:h-[120px] sm:mr-[22px] md:h-[180px] md:w-[90%] xl:w-[95%]"></div>
      </div>
      <Search />
    </div>
  );
}

export default Hero;
