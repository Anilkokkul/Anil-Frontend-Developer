import { motion } from "framer-motion";
import React from "react";

const Tools = () => {
  return (
    <div className=" py-20">
      <motion.div
        initial={{ x: 0 }}
        whileInView={{ x: "-10%" }}
        transition={{ duration: 1.5 }}
        className=" flex md:gap-6 gap-3 justify-center items-center"
      >
        <span className=" rounded-md md:text-4xl text-sm min-w-max  bg-gradient-to-r from-[#284453] to-[#303335] px-4 py-2 ">
          Avatar
        </span>
        <span className=" rounded-md md:text-4xl text-sm min-w-max bg-gradient-to-r from-[#5a2459] to-[#303335] px-4 py-2 ">
          Technology
        </span>
        <span className=" rounded-md md:text-4xl text-sm min-w-max bg-gradient-to-r from-[#5a2459] to-[#303335] px-4 py-2 ">
          Design
        </span>
        <span className=" rounded-md md:text-4xl text-sm min-w-max bg-gradient-to-r from-[#284453] to-[#303335] px-4 py-2 ">
          Artificial Intelligence
        </span>
        <span className=" rounded-md md:text-4xl text-sm min-w-max bg-gradient-to-r from-[#5a2459] to-[#303335] px-4 py-2 ">
          AI Chat Bot
        </span>
        <span className=" rounded-md md:text-4xl text-sm min-w-max bg-gradient-to-r from-[#284453] to-[#303335] px-4 py-2 ">
          Customizable
        </span>
        <span className=" rounded-md md:text-4xl text-sm min-w-max bg-gradient-to-r from-[#5a2459] to-[#303335] px-4 py-2 ">
          3D Model
        </span>
        <span className=" rounded-md md:text-4xl text-sm min-w-max bg-gradient-to-r from-[#284453] to-[#303335] px-4 py-2 ">
          Engineering
        </span>
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        whileInView={{ x: "10%" }}
        transition={{ duration: 1.5 }}
        className=" flex md:gap-6 gap-3 justify-center items-center mt-5"
      >
        <span className=" rounded-md md:text-4xl text-sm min-w-max  bg-gradient-to-r from-[#284453] to-[#303335] px-4 py-2 ">
          Artificial Intelligence
        </span>
        <span className=" rounded-md md:text-4xl text-sm min-w-max bg-gradient-to-r from-[#5a2459] to-[#303335] px-4 py-2 ">
          People
        </span>
        <span className=" rounded-md md:text-4xl text-sm min-w-max bg-gradient-to-r from-[#5a2459] to-[#303335] px-4 py-2 ">
          Create Videos
        </span>
        <span className=" rounded-md md:text-4xl text-sm min-w-max bg-gradient-to-r from-[#284453] to-[#303335] px-4 py-2 ">
          Analyze
        </span>
        <span className=" rounded-md md:text-4xl text-sm min-w-max bg-gradient-to-r from-[#5a2459] to-[#303335] px-4 py-2 ">
          Outfits
        </span>
        <span className=" rounded-md md:text-4xl text-sm min-w-max bg-gradient-to-r from-[#284453] to-[#303335] px-4 py-2 ">
          3d Model
        </span>
        <span className=" rounded-md md:text-4xl text-sm min-w-max bg-gradient-to-r from-[#5a2459] to-[#303335] px-4 py-2 ">
          Voice Chat
        </span>
        <span className=" rounded-md md:text-4xl text-sm min-w-max bg-gradient-to-r from-[#284453] to-[#303335] px-4 py-2 ">
          Marketing
        </span>
        <span className=" rounded-md md:text-4xl text-sm min-w-max bg-gradient-to-r from-[#284453] to-[#303335] px-4 py-2 ">
          Realistic
        </span>
      </motion.div>
    </div>
  );
};

export default Tools;
