function Testimonial() {
  return (
    <div className="flex items-center">
      <div className="flex flex-col w-1/2 h-60 m-10">
        <h1 className="font-semibold">TESTIMONIAL</h1>
        <h1 className="text-3xl font-bold mt-4 mb-12  ">
          What Poeple Say {<br />}About Us.
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
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
          <div className=" rounded drop-shadow-xl h-auto w-3/5 ml-10 my-10 bg-white relative">
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
            <p className="p-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              aliquid adipisci mollitia rem molestiae voluptatem totam.
            </p>
            <h1 className="pl-6">Lei Britz</h1>
            <p className="pl-6 pb-6">Laguan Phillippines</p>
          </div>
          {/* up and down arrow */}
          <div className="ml-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mb-10 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
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
