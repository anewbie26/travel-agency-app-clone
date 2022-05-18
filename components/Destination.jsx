function Destinaion({ img, title, svg, days, price }) {
  return (
    <div className="rounded-3xl shadow-lg h-[457px] w-[314px] relative z-50 bg-white hover:scale-105 transition-all duration-200">
      <div className="">
        <img
          src={img}
          alt=""
          className=" h-[350px] w-full object-cover rounded-t-3xl"
        />
        <div className="flex items-center justify-between my-3 text-[#023F76]">
          <h1 className="font-medium text-[18px] text-[#5E6282] mt-1 ml-6">{title}</h1>
          <h1 className="mr-6 mt-1 font-medium text-[18px] text-[#5E6282]">{price}</h1>
        </div>
        <div className="flex ml-6  items-center">
          {svg}
          <h3 className="ml-4 font-[16px] font-medium text-[#5E6282]">{days}</h3>
        </div>
      </div>
    </div>
  );
}

export default Destinaion;
// m-8 rounded-xl bg-white opacity-80 2div