function Search() {
  return (
    <div className="  flex items-center justify-center absolute top-[750px] left-[75px] font-poppins sm:top-[775px] sm:left-[43px] xl:top-[715px] xl:left-[75px] lg:top-[730px] lg:left-[54px] md:flex-col md:top-[715px] md:left-[70px] lg:flex-row xl:flex-row 2xl:flex-row">
      <div className="flex rounded-xl bg-white w-[75vw] h-[72px] sm:w-[70vw] sm:h-[60px] xl:w-[75vw] xl:h-[68px] md:w-[80vw]">
        <div className="flex items-center w-[37%] border-r-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-4 h-5 w-5 text-[#3E4958]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <div className="ml-2 sm:ml-0">
            <h3 className="text-sm font-normal sm:text-[10px] xl:text-sm md:text-[12px]">Accomodation</h3>
            <h1 className="text-base font-bold sm:text-[12px] xl:text-base md:text-[13px]">Aklam,Bacaracy</h1>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" ml-24 h-5 w-4 text-[#3E4958] lg:ml-16 sm:ml-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="flex justify-evenly w-1/5  items-center border-r-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-5 w-5 text-[#3E4958]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <div className="">
            <h3 className="text-sm font-normal sm:text-[10px]  xl:text-sm md:text-[12px]">Check-In</h3>
            <h1 className="text-base font-bold sm:text-[12px] xl:text-base md:text-[13px]">04.12.2021</h1>
          </div>
         
        </div>
        <div className="flex items-center justify-evenly  w-1/5 border-r-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-5 w-5 text-[#3E4958]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <div className="">
            <h3 className="text-sm font-normal sm:text-[10px] xl:text-sm md:text-[12px]">Check-Out</h3>
            <h1 className="text-base font-bold sm:text-[12px] xl:text-base md:text-[13px]">05.12.2021</h1>
          </div>
          
        </div>
        <div className="flex items-center justify-evenly w-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-6 w-6 text-[#3E4958]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <div >
            <h3 className="text-sm font-normal sm:text-[10px] xl:text-sm md:text-[12px]">Guests</h3>
            <h1 className="text-base font-bold sm:text-[12px] xl:text-base md:text-[13px]">2 sdults</h1>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-5 w-5 text-[#3E4958]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <button className="border ml-6 bg-[#E7AC72] px-10 py-2  rounded-xl h-[72px] w-[175px] text-lg font-bold text-white sm:h-[60px] sm:w-[160px] xl:h-[66px] lg:w-[150px] md:h-[50px] md:mt-4 xl:mt-0">
        Search
      </button>
    </div>
  );
}

export default Search;
