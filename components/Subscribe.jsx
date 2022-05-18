import React from "react";

function Subscribe() {
  return (
    <div className="bg-purple-200 mx-10 my-10">
        <img className="ml-96" src="/assets/circle2.png" alt="" />
      <div
        className="h-8 w-8 bg-orange-500 flex items-center justify-center rounded-full
      "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-white h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      </div>
      <h1>
        Subscribe to get information, latest news and other {<br />} interesting
        offers about WindTravels
      </h1>
      <div className="flex justify-around ">
        <div className="flex bg-white w-72 items-center rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <input className="bg-transparent outline-none p-2" type="email" placeholder="Your email"/>
        </div>
        <button className="py-2 px-4 bg-orange-500 rounded">Subscribe</button>
      </div>
      <img className="absolute" src="/assets/circle1.png" alt="" />
    </div>
  );
}

export default Subscribe;
