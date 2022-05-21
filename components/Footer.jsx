import React from "react";

function Footer() {
  return (
    <div className="flex mb-10 justify-center w-[100vw] lg:mt-56 ">
      <div className=" w-[75%] flex justify-between items-center md:w-[90%]">
        <div className="w-60 text-left ">
          <div className="flex items-center -ml-4 ">
            {/* logo */}
            <img src="/assets/logo.png" alt="" className="lg:h-[48px] "/>
            <img src="/assets/logo-text.png" alt="" className="lg:h-[22px] lg:w-[130px]"/>
          </div>
          {/* text */}
          <p className="text-[18px] font-normal lg:text-[15px]">
            Book your trip in minuts. get full Control for much longer
          </p>
        </div>
        <div className="w-52 pl-16">
          {/* company */}
          <h1 className="font-bold text-xl mb-4 lg:text-[18px]">Company</h1>
          <div className="text-[18px] font-normal lg:text-[15px]">
            <h1>About</h1>
            <h1 className="my-2">Careers</h1>
            <h1>Mobile</h1>
          </div>
        </div>
        <div className="w-60 pl-12">
          {/* contace */}
          <h1 className="font-bold mb-4 text-xl lg:text-[18px]">Contact</h1>
          <div className="text-[18px] font-normal lg:text-[15px]">
            {" "}
            <h1>Help/FAQ</h1>
            <h1 className="my-2">Press</h1>
            <h1>Affiliate</h1>
          </div>
        </div>
        <div className="w-60 ">
          {/* more */}
          <h1 className="font-bold mb-4 text-xl lg:text-[18px]">More</h1>
          <div  className="text-[18px] font-normal lg:text-[15px]">
          <h1>Airlinefees</h1>
          <h1 className="my-2">Airline</h1>
          <h1>Low fare tips</h1>
          </div>
        </div>
        <div className="w-60 -ml-12 xl:ml-0">
          {/* docial */}
          <div className="flex items-center">
            {/* social icons */}
            <img src="/assets/facebook.png" alt="" />
            <img src="/assets/insta.png" alt="" />
            <img src="/assets/twitter.png" alt="" />
          </div>
          <div className="text-[18px] font-normal">
            {/* text */}
            <h1 className="my-3 pl-4">Discover our app</h1>
          </div>
          <div className="flex pl-4">
            {/* buttons */}
            <img src="/assets/Google-play.png" alt="" className="mr-2 md:w-[75px] md:h-[30px]"/>
            <img src="/assets/play-store.png" alt=""  className=" md:w-[75px] md:h-[30px]"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
