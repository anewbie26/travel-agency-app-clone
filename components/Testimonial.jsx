import React from "react";
import { useState } from "react";

const review = [
  {
    id: 1,
    text: "Quick assistance and tailor made plans for users. Will go to travel triangle for every trip going forward.",
    name: "la callin",
    location: "Phillipines",
  },
  {
    id: 2,
    text: "Services of travel agent was not that good. He promised alot of things but we're not up to the mark",
    name: "Ashfaque Ahmed",
    location: "India",
  },
  {
    id: 3,
    text: "One of the best enjoyable trip of Nepal, arranged by Ashirwad team. Our group was comprised of 14 people and had visited Nepal in mid of October19",
    name: "James Carter",
    location: "England",
  },
  {
    id: 4,
    text: "Quick assistance and tailor made plans for users. Will go to travel triangle for every trip going forward.",
    name: "Hulk Hogan",
    location: "WashingTon America",
  },
];

function Testimonial() {
  const [index, setIndex] = useState(0);
  const { id, text, name, location } = review[index];

  const checkNumber = (number) => {
    if (number > review.length - 1) {
      return 0;
    } else if (number < 0) {
      return review.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevePerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div className="flex items-center text-[#5E6282] my-16 ml-10">
      <div className="flex flex-col w-[37%] h-60 m-10">
        <h1 className="font-semibold text-[18px]">TESTIMONIAL</h1>
        <h1 className="text-[50px] font-bold mt-4 mb-12  ">
          What Poeple Say {<br />}About Us.
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </div>
      {/* Card section */}
      <div>
        {/* card div */}
        <div className="flex items-center">
          <div className="mt-20 rounded drop-shadow-xl h-[245px] w-[540px]  bg-white relative hover:scale-105 transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-10 -left-8 h-16 w-16  text-blue-200"
              viewBox="0 0 20 20 "
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="p-6 text-base font-medium text-[#5E6282]">
              {text.substring(0, 100) + "..."}
            </p>
            <h1 className="pl-6 font-bold text-lg text-[#5E6282]">{name}</h1>
            <p className="pl-6 pb-6 text-[#5E6282] font-medium">{location}</p>
          </div>
          {/* up and down arrow */}
          <div className="ml-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mb-10 hover:scale-125 transition-all duration-200 cursor-pointer hover:text-neutral-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              onClick={nextPerson}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 hover:scale-125 transition-all duration-200 cursor-pointer hover:text-neutral-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              onClick={prevePerson}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
