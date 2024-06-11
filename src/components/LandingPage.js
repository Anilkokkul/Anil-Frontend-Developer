import React from "react";
// import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className=" mx-auto w-full relative overflow-hidden">
      <nav className="flex justify-between items-center p-6 relative z-10 backdrop-blur-md ">
        <div className=" flex items-center justify-start gap-5">
          <div className=" text-2xl font-bold tracking-[8px]">AI.GEN</div>
          <ul className=" list-none flex gap-5">
            <li>Features</li>
            <li>Roadmap</li>
            <li>Tokenomics</li>
          </ul>
        </div>
        <div className="flex gap-3">
          <button className=" rounded-md py-3 px-6 border-0 backdrop-opacity-50 bg-slate-900 ">
            Whitepaper
          </button>
          <button className="bg-gradient-to-r from-indigo-500 to-pink-500 rounded-md py-3 px-6 border-0">
            Get Started
          </button>
        </div>
      </nav>
      <div className=" md:flex p-10 relative">
        <header className=" md:w-[50%] md:ml-44 mt-24 relative z-10">
          <button className=" border px-2 py-1 text-sm rounded-lg bg-slate-900 border-slate-400">
            🎉 New in AI.GEN: Real Time Interaction
          </button>
          <h1 className=" text-5xl mt-10 ">
            IOTA polygon serum ipsum WAX terraUSD gala THETA.
          </h1>
          <p className=" text-md mt-8">
            Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor
            horizen ethereum quant bitcoin.
          </p>
          <button className="bg-gradient-to-r from-indigo-500 to-pink-500 rounded-md py-4 px-8 border-0 mt-9">
            Get Started
          </button>
        </header>
        <aside className="flex md:relative absolute top-0 justify-center opacity-15 lg:opacity-100 items-center right-0 lg:top-[-30px] lg:right-[-90px] -z-1 gap-12">
          <div
            data-scroll
            data-scroll-speed=".2"
            className=" flex flex-col gap-10"
          >
            <img
              src="/elonMusk.png"
              alt="Profile 1"
              className=" w-44 h-44 object-cover rounded-xl"
            />
            <img
              src="/billGates.png"
              alt="Profile 2"
              className=" w-44 h-44 object-cover rounded-xl"
            />
            <img
              src="/person3.png"
              alt="Profile 3"
              className=" w-44 h-44 object-cover rounded-xl"
            />
          </div>
          <div className="relative bottom-20 flex flex-col gap-10">
            <img
              src="/elonMusk.png"
              alt="Profile 1"
              className=" w-44 h-44 object-cover rounded-xl"
            />
            <img
              src="/billGates.png"
              alt="Profile 2"
              className=" w-44 h-44 object-cover rounded-xl"
            />
            <img
              src="/person3.png"
              alt="Profile 3"
              className=" w-44 h-44 object-cover rounded-xl"
            />
          </div>
          <div
            data-scroll
            data-scroll-speed=".2"
            className="flex flex-col gap-10"
          >
            <img
              src="/elonMusk.png"
              alt="Profile 1"
              className=" w-44 h-44 object-cover rounded-xl"
            />
            <img
              src="/billGates.png"
              alt="Profile 2"
              className=" w-44 h-44 object-cover rounded-xl"
            />
            <img
              src="/person3.png"
              alt="Profile 3"
              className=" w-44 h-44 object-cover rounded-xl"
            />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default LandingPage;
