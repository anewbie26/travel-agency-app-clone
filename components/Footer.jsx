import React from "react";

function Footer() {
  return (
    <div  className="flex justify-center">
      <div className="w-60">
        <div className="flex items-center">{/* logo */}
        <img src="/assets/logo.png" alt="" />
        <img src="/assets/logo-text.png" alt="" />
        
        </div>
        {/* text */}
        <p >Book your trip in minuts. get full Control for much longer</p>
      </div>
      <div className="w-52">{/* company */}
      <h1 className="font-bold mb-4">Company</h1>
      <h1>About</h1>
      <h1>Careers</h1>
      <h1>Mobile</h1>
      </div>
      <div className="w-60">{/* contace */}
      <h1 className="font-bold mb-4">Contact</h1>
      <h1>Help/FAQ</h1>
      <h1>Press</h1>
      <h1>Affiliate</h1>
      </div>
      <div className="w-60">{/* more */}
      <h1 className="font-bold mb-4">More</h1>
      <h1>Airlinefees</h1>
      <h1>Airline</h1>
      <h1>Low fare tips</h1>
      
      </div>
      <div className="w-60">
        {/* docial */}
        <div className="flex items-center">
            {/* social icons */}
            <img src="/assets/facebook.png" alt="" />
            <img src="/assets/insta.png" alt="" />
            <img src="/assets/twitter.png" alt="" />
        </div>
        <div>
            {/* text */}
            <h1>Discover our app</h1>
        </div>
        <div className="flex">
            {/* buttons */}
            <img src="/assets/Google-play.png" alt="" />
            <img src="/assets/play-store.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
