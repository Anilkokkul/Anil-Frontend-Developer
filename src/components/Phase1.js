import React from "react";

const Phase1 = () => {
  return (
    <div className="  p-5">
      <h1 className="text-center text-5xl my-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
        Roadmap
      </h1>
      <div className=" flex p-10 justify-center items-center">
        <div className=" w-[70%] p-20">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r ml-10 from-[#faca6d] to-[#fa78f2] text-5xl font-semibold">
            PHASE 1
          </h1>
          <ul className=" list-disc text-left text-xl ml-20  mt-10 ">
            <li className="leading-7">
              Horizen dai dai harmony dogecoin waves nexo.
            </li>
            <li className="leading-7">
              Flow horizen waves dash tether zcash waves dash terraUSD.
            </li>
            <li className="leading-7">
              Quant harmony amp cosmos PancakeSwap decentraland decred.
            </li>
            <li className="leading-7">
              Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte
              stellar.
            </li>
          </ul>
        </div>
        <div className="w-[40%] h-[70vh]">
          <img
            src="/phase1.png"
            alt="phase1"
            className=" relative right-[-20%] h-full w-full rounded-2xl"
          />
        </div>
      </div>
      <div className=" flex p-10 justify-center items-center">
        <div className=" w-[70%] p-20">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r ml-10 from-[#faca6d] to-[#fa78f2] text-5xl font-semibold">
            PHASE 2
          </h1>
          <ul className=" list-disc text-left text-xl ml-20  mt-10 ">
            <li className="leading-7">
              BitTorrent dai dogecoin crypto nexo nexo cosmos tezos ox
              PancakeSwap.
            </li>
            <li className="leading-7">
              Tether ethereum helium eCash IOTA. Litecoin enjin shiba-inu dash
              audius monero.
            </li>
            <li className="leading-7">
              Aave PancakeSwap loopring horizen neo uniswap avalanche litecoin
              celsius TRON.
            </li>
            <li className="leading-7">Hive stellar velas flow cardano.</li>
          </ul>
        </div>
        <div className="w-[40%] h-[70vh]">
          <img
            src="/phase2.png"
            alt="phase3"
            className=" relative right-[-15%] h-full w-full rounded-2xl"
          />
        </div>
      </div>
      <div className=" flex p-10 justify-center items-center">
        <div className=" w-[70%] p-20">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r ml-10 from-[#faca6d] to-[#fa78f2] text-5xl font-semibold">
            PHASE 3
          </h1>
          <ul className=" list-disc text-left text-xl ml-20  mt-10 ">
            <li className="leading-7">
              Revain audius bitcoin revain PancakeSwap elrond ipsum ethereum.
            </li>
            <li className="leading-7">
              Waves TRON dogecoin bancor eCash quant secret.
            </li>
            <li className="leading-7">
              Celsius crypto bancor nexo litecoin decentraland crypto.
            </li>
          </ul>
        </div>
        <div className="w-[40%] h-[70vh]">
          <img
            src="/phase3.png"
            alt="phase3"
            className=" relative right-[-20%] h-full w-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Phase1;
