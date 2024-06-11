import { motion } from "framer-motion";
import React from "react";

const Products = () => {
  return (
    <div className=" lg:p-10 p-5">
      <div className="flex lg:gap-8 gap-3 justify-center items-center">
        <div className=" bg-[#2a2728] w-[40%] lg:px-7 px-3 text-center lg:h-[500px] h-[160px] flex flex-col justify-between relative lg:rounded-3xl rounded-md">
          <h1 className=" lg:text-4xl text-sm lg:mt-10 mt-5">
            AI <br /> Outfits
          </h1>
          <div className=" bg-[#ec9294] rounded-t-xl lg:h-[45%] h-[30%] w-full ">
            <motion.img
              transition={{ duration: 2 }}
              whileInView={{ rotate: "-25deg" }}
              src="/red-shoe.png"
              alt="red-shoe"
              className=" lg:w-60 w-20 relative mx-auto lg:top-[-40px] top-[-30px] drop-shadow-2xl"
            />
          </div>
        </div>
        <div className=" bg-[#2a2728] w-[60%] lg:h-[500px] h-[160px] text-center flex flex-col justify-between lg:rounded-3xl rounded-md overflow-hidden">
          <h1 className=" lg:text-4xl text-sm lg:mt-10 mt-5">
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
      <div className="flex lg:gap-8 gap-3 justify-center lg:mt-10 mt-3 items-center">
        <div className=" bg-[#2a2728] w-[60%] text-center lg:h-[500px] h-[160px] flex flex-col justify-between lg:rounded-3xl rounded-md overflow-hidden">
          <h1 className=" lg:text-4xl text-sm lg:mt-10 mt-5">
            Generate or write your <br /> Script
          </h1>
          <div className=" bg-[#ec9294] h-[55%] w-full "></div>
        </div>
        <div className=" bg-[#2a2728] w-[40%] lg:h-[500px] h-[160px] text-center flex flex-col justify-between lg:rounded-3xl rounded-md overflow-hidden">
          <h1 className=" lg:text-4xl text-sm lg:mt-10 mt-5">
            AI Powered Voice <br /> Generator
          </h1>
          <motion.div
            initial={{ height: "50%" }}
            whileInView={{ height: "60%" }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className=" h-[60%]"
          >
            <img
              src="/Avatar-ai.png"
              className=" h-full w-full object-cover"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;
