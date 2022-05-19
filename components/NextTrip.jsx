function NextTrip() {
  return (
    <div className="flex text-[#5E6282] w-[]">
      <div
        className="flex flex-col ml-16
      "
      >
        <h4 className="font-semibold text-[18px] my-6">Easy and Fast</h4>
        <h1 className="text-[50px] leading-[57px] font-bold font-volk sm:text-[35px]">
          Book Your Next Trip {<br />} In 3 Easy Steps
        </h1>
        <div className="flex flex-col mt-16 w-[80%] font-poppins">
          <div className="flex mb-16 ">
            <img className="h-14 w-14 " src="/assets/Rectangle.png" alt="" />
            <img
              className=" h-8 w-8 -ml-11 mt-3"
              src="/assets/Vector.png"
              alt=""
            />
            <div className="ml-10 -mt-1.5">
              <h2 className="font-bold">Choose Destination</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                exercitationem sunt dolor ipsum id ducimus labore dolorem,{" "}
              </p>
            </div>
          </div>
          <div className="flex mb-16">
            <img className="h-14 w-14" src="/assets/Rectangle2.png" alt="" />
            <img
              className=" h-8 w-8 -ml-11 mt-3"
              src="/assets/water-sport.png"
              alt=""
            />
            <div className="ml-10 -mt-1.5">
              <h2 className="font-bold">Make Payments</h2>
              <p className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                exercitationem sunt dolor ipsum id ducimus labore dolorem,
              </p>
            </div>
          </div>
          <div className="flex">
            <img className="h-14 w-14" src="/assets/Rectangle3.png" alt="" />
            <img
              className=" h-8 w-8 -ml-11 mt-3"
              src="/assets/Vector-car.png"
              alt=""
            />
            <div className="ml-10 -mt-1.5">
              <h2 className="font-bold">Reach Airport on Selected Date</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                exercitationem sunt dolor ipsum id ducimus labore dolorem,{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="h-80 w-80 rounded-full bg-[#59B1E6] filter blur-3xl absolute top-48 left-24 z-10 sm:h-56 sm:w-56 sm:top-64"></div>
      </div>
      <div className="w-[50vw] flex justify-center relative z-50  mt-56 sm:w-[40vw]">
        <div className=" shadow-lg mr-56 sm:mr-20 rounded-2xl h-[400px] w-[370px] sm:h-[300px] sm:w-[330px] group bg-white m-auto hover:scale-105 transition-all duration-200">
          <img
            className="m-auto pt-6 sm:pt-0 sm:rounded-t-2xl"
            src="/assets/Rectangle-next-trip.jpg"
            alt=""
          />
          <h1 className="font-bold ml-8 mt-6 sm:mt-3 sm:ml-4 sm:text-sm">Trip To Boracay</h1>
          <p className="ml-8 mt-2 sm:mt-1 sm:ml-4 sm:text-xs">14-29 June| by Lei Britz</p>
          <div className="relative">
            <div className="flex w-36 ml-8 mt-4 justify-between sm:ml-4 sm:w-28">
              <img src="/assets/LEAF.png" alt="" className="sm:h-[25px]"/>
              <img src="/assets/map.png" alt=""className="sm:h-[25px]"/>
              <img src="/assets/send.png" alt="" className="sm:h-[25px]"/>
            </div>

            <div className="flex mt-6 ml-6 sm:mt-2 sm:ml-4">
              <img className="mx-4 sm:mx-1 sm:mr-3" src="/assets/group.png" alt="" />
              <p className="sm:text-xs">24 people going</p>
              <img className="ml-32 sm:ml-20 " src="/assets/heart.png" alt="" />
            </div>
            <div className="hidden group-hover:block hover:scale-105 transition-all duration-200">
              <div className=" absolute bottom-8 left-52 bg-white h-[130px] w-[263px] flex rounded-2xl shadow-xl sm:h-[100px] sm:w-[220px] sm:left-48">
                <div>
                  <img
                    src="/assets/sea.png"
                    alt=""
                    className="h-14 w-14 rounded-full ml-4 mt-4 sm:h-10 sm:w-10"
                  />
                </div>
                <div className="flex flex-col mx-4 mt-4">
                  <p className="sm:text-xs">Ongoing</p>
                  <h1 className="mb-3 font-bold sm:text-sm sm:mb-1">Trip to Baguio</h1>
                  <p className="font-bold sm:text-sm">
                    <span className="font-normal sm:text-sm text-purple-700">40%</span>{" "}
                    completed
                  </p>
                  <img src="/assets/progress.png" alt="" className="mt-2 sm:mt-1 sm:w-[120px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextTrip;
