function Category({ icon, title, desc }) {
  return (
    <div className="relative group">
      <div className="group hover:shadow-xl hover:scale-105 transition-all duration-200 relative bg-white rounded-3xl h-[314px] w-[267px] hover:z-50">
        <div className="flex flex-col h-64 w-60 rounded-xl items-center justify-center">
          <div className="my-6 flex items-center justify-center">
            <img src={icon} alt="" className="h-[75px] w-[88px] " />
            {/* <div className="h-10 w-10 bg-orange-500 rounded"></div> */}
          </div>
          <h2 className=" text-xl font-semibold mb-4">{title}</h2>
          <p className="text-center text-base font-medium w-5/6">{desc}</p>
        </div>
      </div>
      <img
        src="/assets/offer-bottom.png"
        alt=""
        className="absolute -bottom-10 -left-10 hidden group-hover:-z-10  group-hover:block animate-bounce"
      />
    </div>
  );
}

export default Category;
