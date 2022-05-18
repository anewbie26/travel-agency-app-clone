import Image from "next/image";

function NextTrip() {
  return (
    <div className="flex bg-orange-200">
      <div className="flex flex-col ml-10
      ">
        <h4 className="font-bold my-6">Easy and Fast</h4>
        <h1 className="text-xl font-bold">Book Your Next Trip {<br />} In 3 Easy Steps</h1>
        <div className="flex flex-col mt-16 w-1/2">
          <div className="flex mb-16">
            <img className="h-14 w-14" src="/assets/Rectangle.png" alt="" />
            <img
              className=" h-8 w-8 -ml-11 mt-3"
              src="/assets/Vector.png"
              alt=""
            />
            <div className="ml-10">
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
            <div className="ml-10">
              <h2 className="font-bold">Make Payments</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                exercitationem sunt dolor ipsum id ducimus labore dolorem,{" "}
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
            <div className="ml-10">
              <h2 className="font-bold">Reach Airport on Selected Date</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                exercitationem sunt dolor ipsum id ducimus labore dolorem,{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>back blur</div> */}
      <div className="w-96 drop-shadow-md rounded-xl bg-white h-96 m-auto">
        <img
          className="m-auto pt-6"
          src="/assets/Rectangle-next-trip.jpg"
          alt=""
        />
        <h1 className="font-bold ml-8 mt-6">Trip To Boracay</h1>
        <p className="ml-8 mt-2">14-29 June| by Lei Britz</p>
        <div className="flex w-36 ml-8 mt-4 justify-between">
          <img src="/assets/LEAF.png" alt="" />
          <img src="/assets/map.png" alt="" />
          <img src="/assets/send.png" alt="" />
        </div>

        <div className="flex mt-6 ml-6">
          <img className="mx-4" src="/assets/group.png" alt="" />
          <p>24 people going</p>
          <img className="ml-36" src="/assets/heart.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default NextTrip;
