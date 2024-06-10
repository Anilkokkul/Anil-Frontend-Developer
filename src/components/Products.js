import { motion } from "framer-motion";
import React from "react";

const Products = () => {
  return (
    <div className=" p-10">
      <div className="flex gap-8 justify-center items-center">
        <div className=" bg-[#2a2728] w-[35%] px-7 text-center h-[500px] flex flex-col justify-between relative rounded-3xl">
          <h1 className=" text-4xl mt-10">
            AI <br /> Outfits
          </h1>
          <div className=" bg-[#ec9294] rounded-t-xl h-[45%] w-full ">
            <motion.img
              transition={{ duration: 2 }}
              whileInView={{ rotate: "-25deg" }}
              src="/red-shoe.png"
              alt="red-shoe"
              className=" w-60 relative mx-auto top-[-40px] drop-shadow-2xl"
            />
          </div>
        </div>
        <div className=" bg-[#2a2728] w-[55%] h-[500px] text-center flex flex-col justify-between rounded-3xl overflow-hidden">
          <h1 className=" text-4xl mt-10">
            Realistic AI
            <br /> Avatar
          </h1>
          <div className=" h-[60%]">
            <img
              src="/Avatar-ai.png"
              className=" h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex gap-8 justify-center mt-10 items-center">
        <div className=" bg-[#2a2728] w-[55%] text-center h-[500px] flex flex-col justify-between rounded-3xl overflow-hidden">
          <h1 className=" text-4xl mt-10">
            Generate or write your <br /> Script
          </h1>
          <div className=" bg-[#ec9294] h-[55%] w-full "></div>
        </div>
        <div className=" bg-[#2a2728] w-[35%] h-[500px] text-center flex flex-col justify-between rounded-3xl overflow-hidden">
          <h1 className=" text-4xl mt-10">
            AI Powered Voice <br /> Generator
          </h1>
          <div className=" h-[60%]">
            <img
              src="/Avatar-ai.png"
              className=" h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
