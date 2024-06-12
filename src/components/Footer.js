import { FaTiktok } from "react-icons/fa";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="lg:px-10 px-5">
      <div className="lg:py-20 flex relative lg:gap-20 gap-5 w-full justify-center items-center lg:h-64 h-32 overflow-hidden">
        <div className=" flex flex-col lg:gap-8 gap-5 ">
          <img
            src="/7-1.png"
            alt="pic-1"
            className=" lg:w-36 lg:h-36 w-16 h-16 rounded-lg"
          />
          <img
            src="/7-2.png"
            alt="pic-2"
            className=" lg:w-36 lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
          <img
            src="/7-3.png"
            alt="pic-3"
            className="lg:w-36 lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col lg:gap-8 gap-5 relative lg:top-[-70px] top-[-30px]">
          <img
            src="/6-1.png"
            alt="pic-1"
            className=" lg:w-36  lg:h-36 w-10 h-16  rounded-lg object-cover"
          />
          <img
            src="/6-2.png"
            alt="pic-2"
            className=" lg:w-36  lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
          <img
            src="/6-3.png"
            alt="pic-3"
            className=" lg:w-36  lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col lg:gap-8 gap-5 ">
          <img
            src="/5-1.png"
            alt="pic-1"
            className=" lg:w-36  lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
          <img
            src="/5-2.png"
            alt="pic-2"
            className=" lg:w-36  lg:h-36 w-16 h-16  rounded-lg object-cover"
          />
          <img
            src="/5-3.png"
            alt="pic-3"
            className=" lg:w-36  lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col lg:gap-8 gap-5 relative lg:top-[-70px] top-[-30px]">
          <img
            src="/4-1.png"
            alt="pic-1"
            className=" lg:w-36  lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
          <img
            src="/4-2.png"
            alt="pic-2"
            className=" lg:w-36  lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
          <img
            src="/4-3.png"
            alt="pic-3"
            className=" lg:w-36 lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col lg:gap-8 gap-5">
          <img
            src="/3-1.png"
            alt="pic-1"
            className=" lg:w-36 lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
          <img
            src="/3-2.png"
            alt="pic-2"
            className=" lg:w-36 lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
          <img
            src="/3-3.png"
            alt="pic-3"
            className=" lg:w-36 lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col lg:gap-8 gap-5 relative lg:top-[-70px] top-[-30px]">
          <img
            src="/2-1.png"
            alt="pic-1"
            className=" lg:w-36 lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
          <img
            src="/2-2.png"
            alt="pic-2"
            className=" lg:w-36 lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
          <img
            src="/2-3.png"
            alt="pic-3"
            className=" lg:w-36 lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
        </div>
        <div className=" flex flex-col lg:gap-8 gap-5 ">
          <img
            src="/nutral-pic.png"
            alt="pic-1"
            className=" lg:w-36 lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
          <img
            src="/nutral-pic-2.png"
            alt="pic-2"
            className=" lg:w-36 lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
          <img
            src="/nutral-pic-3.png"
            alt="pic-3"
            className=" lg:w-36 lg:h-36 w-16 h-16 rounded-lg object-cover"
          />
        </div>
        <div className=" w-[80%] flex justify-between cursor-pointer items-center rounded-lg absolute bg-gradient-to-r from-[#8158b8] to-[#c85ec6] lg:h-24 h-12 bottom-0 ">
          <h1 className=" lg:text-5xl text-xl ml-[5%]">Get Started</h1>
          <FaArrowRight className=" lg:text-5xl text-xl mr-[5%]" />
        </div>
      </div>
      <div className="lg:flex justify-between items-center py-20 gap-5">
        <div className=" w-[350px] lg:text-xl text-sm">
          Dash dash terraUSD neo uniswap kadena helium avalanche polymath
          bancor.
        </div>
        <div className=" text-right mt-10 lg:mt-0">
          <div>Looking for help?</div>
          <div className=" mt-2 ">
            <input
              type="text"
              className=" border-2 bg-transparent rounded-md h-10 lg:w-44 w-[70%] p-2"
              placeholder="Enter your email"
            />{" "}
            <button className="bg-gradient-to-r px-4 py-2 h-10 ml-1 rounded-md w-[28%] from-[#8158b8] to-[#c85ec6]">
              Submit
            </button>
          </div>
        </div>
      </div>
      <hr />
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
