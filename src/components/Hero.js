import React from "react";

const Hero = () => {
  return (
    <div className=" relative">
      <div className=" lg:py-20 lg:px-48 flex relative gap-10 w-full justify-center items-center opacity-25">
        <div className=" flex flex-col gap-8 ">
          <img src="/7-1.png" alt="pic-1" className=" w-36 h-36 rounded-lg" />
          <img
            src="/7-2.png"
            alt="pic-2"
            className=" w-36 h-36 rounded-lg object-cover"
          />
          <img
            src="/7-3.png"
            alt="pic-3"
            className=" w-36 h-36 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col gap-8 relative top-[-70px]">
          <img
            src="/6-1.png"
            alt="pic-1"
            className=" w-36 h-36 rounded-lg object-cover"
          />
          <img
            src="/6-2.png"
            alt="pic-2"
            className=" w-36 h-36 rounded-lg object-cover"
          />
          <img
            src="/6-3.png"
            alt="pic-3"
            className=" w-36 h-36 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col gap-8 ">
          <img
            src="/5-1.png"
            alt="pic-1"
            className=" w-36 h-36 rounded-lg object-cover"
          />
          <img
            src="/5-2.png"
            alt="pic-2"
            className=" w-36 h-36 rounded-lg object-cover"
          />
          <img
            src="/5-3.png"
            alt="pic-3"
            className=" w-36 h-36 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col gap-8 relative top-[-70px]">
          <img
            src="/4-1.png"
            alt="pic-1"
            className=" w-36 h-36 rounded-lg object-cover"
          />
          <img
            src="/4-2.png"
            alt="pic-2"
            className=" w-36 h-36 rounded-lg object-cover"
          />
          <img
            src="/4-3.png"
            alt="pic-3"
            className=" w-36 h-36 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col gap-8 ">
          <img
            src="/3-1.png"
            alt="pic-1"
            className=" w-36 h-36 rounded-lg object-cover"
          />
          <img
            src="/3-2.png"
            alt="pic-2"
            className=" w-36 h-36 rounded-lg object-cover"
          />
          <img
            src="/3-3.png"
            alt="pic-3"
            className=" w-36 h-36 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col gap-8 relative top-[-70px]">
          <img
            src="/2-1.png"
            alt="pic-1"
            className=" w-36 h-36 rounded-lg object-cover"
          />
          <img
            src="/2-2.png"
            alt="pic-2"
            className=" w-36 h-36 rounded-lg object-cover"
          />
          <img
            src="/2-3.png"
            alt="pic-3"
            className=" w-36 h-36 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col gap-8 ">
          <img
            src="/nutral-pic.png"
            alt="pic-1"
            className=" w-36 h-36 rounded-lg object-cover"
          />
          <img
            src="/nutral-pic-2.png"
            alt="pic-2"
            className=" w-36 h-36 rounded-lg object-cover"
          />
          <img
            src="/nutral-pic-3.png"
            alt="pic-3"
            className=" w-36 h-36 rounded-lg object-cover"
          />
        </div>
      </div>
      <div
        data-scroll
        data-scroll-speed=".2"
        className=" absolute w-full h-full top-0 flex justify-center items-center"
      >
        <h1 className=" text-5xl w-[55%] text-center">
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
