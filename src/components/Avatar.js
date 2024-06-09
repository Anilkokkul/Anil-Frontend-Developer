import React from "react";

const Avatar = () => {
  return (
    <div className=" md:flex justify-start items-center gap-10 p-5 relative md:left-[-150px]">
      <div className="md:w-[60%] md:rounded-r-lg rounded-lg overflow-hidden">
        <img src="/Avatar-ai.png" alt="avatar-ai" className="overflow-hidden" />
      </div>
      <div className="">
        <h1 className=" md:text-7xl text-3xl mt-5 font-semibold">
          How it works
        </h1>
        <p className=" text-teal-500 text-5xl mt-10">Select an Avatar</p>
        <p className=" text-4xl mt-3 text-slate-500 ">
          Create or Generate Script
        </p>
        <p className=" text-4xl mt-3 text-slate-500 ">Select AI Voices</p>
        <p className=" text-4xl mt-3 text-slate-500 ">Piblish</p>
      </div>
    </div>
  );
};

export default Avatar;
