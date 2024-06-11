import { motion } from "framer-motion";
import React from "react";
const Footer = () => {
  return (
    <div className="">
      <div className="flex gap-16 justify-center items-start h-64 overflow-hidden">
        <div whileInView={{ y: "-100%" }} className=" flex flex-col gap-8 ">
          <img src="/7-1.png" alt="pic-1" className=" w-36 h-36 rounded-lg" />
          <img
            src="/7-2.png"
            alt="pic-2"
            className=" w-36 h-36 rounded-lg object-cover"
          />
          <img
            src="/7-3.png"
            alt="pic-3"
            className=" w-36 h-36 rounded-lg object-cover relative"
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
    </div>
  );
};

export default Footer;
