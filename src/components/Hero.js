import React from "react";

const Hero = () => {
  return (
    <div className=" relative">
      <div className=" lg:py-20 lg:px-48 flex relative lg:gap-10 gap-5 w-full justify-center items-center opacity-25">
        <div className=" flex flex-col lg:gap-8 gap-5 ">
          <img
            src="/7-1.png"
            alt="pic-1"
            className=" lg:w-36 lg:h-36 w-10 h-10rounded-lg"
          />
          <img
            src="/7-2.png"
            alt="pic-2"
            className=" lg:w-36 lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
          <img
            src="/7-3.png"
            alt="pic-3"
            className="lg:w-36 lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col lg:gap-8 gap-5 relative lg:top-[-70px] top-[-30px]">
          <img
            src="/6-1.png"
            alt="pic-1"
            className=" lg:w-36  lg:h-36 w-10 h-10  rounded-lg object-cover"
          />
          <img
            src="/6-2.png"
            alt="pic-2"
            className=" lg:w-36  lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
          <img
            src="/6-3.png"
            alt="pic-3"
            className=" lg:w-36  lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col lg:gap-8 gap-5 ">
          <img
            src="/5-1.png"
            alt="pic-1"
            className=" lg:w-36  lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
          <img
            src="/5-2.png"
            alt="pic-2"
            className=" lg:w-36  lg:h-36 w-10 h-10  rounded-lg object-cover"
          />
          <img
            src="/5-3.png"
            alt="pic-3"
            className=" lg:w-36  lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col lg:gap-8 gap-5 relative lg:top-[-70px] top-[-30px]">
          <img
            src="/4-1.png"
            alt="pic-1"
            className=" lg:w-36  lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
          <img
            src="/4-2.png"
            alt="pic-2"
            className=" lg:w-36  lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
          <img
            src="/4-3.png"
            alt="pic-3"
            className=" lg:w-36 lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col lg:gap-8 gap-5">
          <img
            src="/3-1.png"
            alt="pic-1"
            className=" lg:w-36 lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
          <img
            src="/3-2.png"
            alt="pic-2"
            className=" lg:w-36 lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
          <img
            src="/3-3.png"
            alt="pic-3"
            className=" lg:w-36 lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col lg:gap-8 gap-5 relative lg:top-[-70px] top-[-30px]">
          <img
            src="/2-1.png"
            alt="pic-1"
            className=" lg:w-36 lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
          <img
            src="/2-2.png"
            alt="pic-2"
            className=" lg:w-36 lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
          <img
            src="/2-3.png"
            alt="pic-3"
            className=" lg:w-36 lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col lg:gap-8 gap-5 ">
          <img
            src="/nutral-pic.png"
            alt="pic-1"
            className=" lg:w-36 lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
          <img
            src="/nutral-pic-2.png"
            alt="pic-2"
            className=" lg:w-36 lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
          <img
            src="/nutral-pic-3.png"
            alt="pic-3"
            className=" lg:w-36 lg:h-36 w-10 h-10 rounded-lg object-cover"
          />
        </div>
      </div>
      <div
        data-scroll
        data-scroll-speed=".2"
        className=" absolute w-full h-full top-0 flex justify-center items-center"
      >
        <h1 className=" lg:text-5xl lg:w-[55%] w-[70%] text-center">
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#fac96b] to-[#fe9c9a]">
            Create, customize, and publish
          </span>{" "}
          your digital persona to life effortlessly.
        </h1>
      </div>
    </div>
  );
};

export default Hero;
