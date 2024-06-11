import { FaTiktok } from "react-icons/fa";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="px-10">
      <div className="flex gap-16 justify-center items-start h-64 overflow-hidden relative">
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
        <div className=" w-[80%] flex justify-between cursor-pointer items-center rounded-lg absolute bg-gradient-to-r from-[#8158b8] to-[#c85ec6] h-24 bottom-0 ">
          <h1 className=" text-5xl ml-12">Get Started</h1>
          <FaArrowRight className=" text-5xl mr-12" />
        </div>
      </div>
      <div className="flex justify-between items-center py-20">
        <div className=" w-[350px] text-xl">
          Dash dash terraUSD neo uniswap kadena helium avalanche polymath
          bancor.
        </div>
        <div className=" text-right">
          <div>Looking for help?</div>
          <div className=" mt-2">
            <input
              type="text"
              className=" border-2 bg-transparent rounded-md h-10 p-2"
              placeholder="Enter your email"
            />{" "}
            <button className="bg-gradient-to-r px-4 py-2 h-10 ml-1 rounded-md from-[#8158b8] to-[#c85ec6]">
              Submit
            </button>
          </div>
        </div>
      </div>
      <hr/>
      <div className=" flex justify-between items-center py-5">
        <div className=" text-xl tracking-widest">AI. GEN</div>
        <div className=" text-white flex gap-2">
          <FaTwitter />
          <FaLinkedin />
          <FaTiktok />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
