function Card({img,title,svg,people}) {
  return (
    <div>
      <div className="h-[230px] w-[176px] m-8 py-4 rounded-xl bg-white opacity-80">
        <img
          src={img}
          alt=""
          className="m-auto h-[154px] w-[156px] rounded"
        />
        <div className="flex flex-col  text-[#023F76]">
        <h1 className="font-medium text-[16px] mt-1 ml-3">{title}</h1>
        <div className="flex ml-3 mt- items-center">
          {svg}
          <h3 className=" font-[12px] font-light">{people}</h3>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
