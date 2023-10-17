import React from "react";
import Btn from "../components/common components/Btn";
import { TbAlpha, TbBeta, TbDelta, TbOmega } from "react-icons/tb";
import DisabledInput from "../components/common components/DisabledInput";
import { AiFillThunderbolt } from "react-icons/ai";

const BuyFarming = () => {
  return (
    <div className="relative mt-10 z-0 w-full h-full pt-3 pl-3 pr-3   !top-0 text-white ">
      <div className="mb-5">
        <h5 className="border-b pb-3">Available Amount:$529.93</h5>
        <div className="inline-block mt-2">
          <Btn title="Pakage List" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-5 md:flex-row gap-x-5 flex-wrap pb-3">
        {/* alpha start */}
        <div className="flex flex-col gap-y-3 p-3 rounded-lg w-full glass-container md:w-[48%] lg:w-[32%]">
          <div className="w-full p-1 bg-colorprimary rounded-lg">
            <h6 className="flex gap-x-3 items-center !m-0">
              <TbAlpha className="text-[30px]" />{" "}
              <span className="font-bold">Alpha</span>
            </h6>
          </div>
          <DisabledInput title="Price ($)" value="52.5" />
          <DisabledInput title="Coin Amount" value="250" />
          <DisabledInput title="Duration (days)" value="365" />
          <DisabledInput title="Farming Coin Bonus (%)" value="0.041" />
          <div className="flex justify-center">
            <Btn title="Buy Package" />
          </div>
        </div>
        {/* alpha end */}

        {/* beta start */}
        <div className="flex flex-col gap-y-3 p-3 rounded-lg w-full glass-container md:w-[49%] lg:w-[32%]">
          <div className="w-full p-1 bg-colorprimary rounded-lg">
            <h6 className="flex gap-x-3 items-center !m-0">
              <TbBeta className="text-[30px]" />{" "}
              <span className="font-bold">Beta</span>
            </h6>
          </div>
          <DisabledInput title="Price ($)" value="52.5" />
          <DisabledInput title="Coin Amount" value="250" />
          <DisabledInput title="Duration (days)" value="365" />
          <DisabledInput title="Farming Coin Bonus (%)" value="0.041" />
          <div className="flex justify-center">
            <Btn title="Buy Package" />
          </div>
        </div>
        {/* beta end */}
        {/* gamma start */}
        <div className="flex flex-col gap-y-3 p-3 rounded-lg w-full glass-container md:w-[49%] lg:w-[32%]">
          <div className="w-full p-1 bg-colorprimary rounded-lg">
            <h6 className="flex gap-x-3 items-center !m-0">
              {/* <TbBeta className="text-[30px]" />{" "} */}

              <span className="font-bold">Gamma</span>
            </h6>
          </div>
          <DisabledInput title="Price ($)" value="52.5" />
          <DisabledInput title="Coin Amount" value="250" />
          <DisabledInput title="Duration (days)" value="365" />
          <DisabledInput title="Farming Coin Bonus (%)" value="0.041" />
          <div className="flex justify-center">
            <Btn title="Buy Package" />
          </div>
        </div>
        {/* gamma end */}
        {/* ray start */}
        <div className="flex flex-col gap-y-3 p-3 rounded-lg w-full glass-container md:w-[49%] lg:w-[32%]">
          <div className="w-full p-1 bg-colorprimary rounded-lg">
            <h6 className="flex gap-x-3 items-center !m-0">
              <AiFillThunderbolt className="text-[30px]" />{" "}
              <span className="font-bold">Ray</span>
            </h6>
          </div>
          <DisabledInput title="Price ($)" value="52.5" />
          <DisabledInput title="Coin Amount" value="250" />
          <DisabledInput title="Duration (days)" value="365" />
          <DisabledInput title="Farming Coin Bonus (%)" value="0.041" />
          <div className="flex justify-center">
            <Btn title="Buy Package" />
          </div>
        </div>
        {/* ray end */}
        {/* omega start */}
        <div className="flex flex-col gap-y-3 p-3 rounded-lg w-full glass-container md:w-[49%] lg:w-[32%]">
          <div className="w-full p-1 bg-colorprimary rounded-lg">
            <h6 className="flex gap-x-3 items-center !m-0">
              <TbOmega className="text-[30px]" />{" "}
              <span className="font-bold">Omega</span>
            </h6>
          </div>
          <DisabledInput title="Price ($)" value="52.5" />
          <DisabledInput title="Coin Amount" value="250" />
          <DisabledInput title="Duration (days)" value="365" />
          <DisabledInput title="Farming Coin Bonus (%)" value="0.041" />
          <div className="flex justify-center">
            <Btn title="Buy Package" />
          </div>
        </div>
        {/* omega end */}
        {/* Theta  start */}
        <div className="flex flex-col gap-y-3 p-3 rounded-lg w-full glass-container md:w-[49%] lg:w-[32%]">
          <div className="w-full p-1 bg-colorprimary rounded-lg">
            <h6 className="flex gap-x-3 items-center !m-0">
              {/* <TbOmega className="text-[30px]" />{" "} */}

              <span className="font-bold">Theta</span>
            </h6>
          </div>
          <DisabledInput title="Price ($)" value="52.5" />
          <DisabledInput title="Coin Amount" value="250" />
          <DisabledInput title="Duration (days)" value="365" />
          <DisabledInput title="Farming Coin Bonus (%)" value="0.041" />
          <div className="flex justify-center">
            <Btn title="Buy Package" />
          </div>
        </div>
        {/* Theta end */}
        {/* Delta  start */}
        <div className="flex flex-col gap-y-3 p-3 rounded-lg w-full glass-container md:w-[49%] lg:w-[32%]">
          <div className="w-full p-1 bg-colorprimary rounded-lg">
            <h6 className="flex gap-x-3 items-center !m-0">
              <TbDelta className="text-[30px]" />{" "}
              <span className="font-bold">Delta</span>
            </h6>
          </div>
          <DisabledInput title="Price ($)" value="52.5" />
          <DisabledInput title="Coin Amount" value="250" />
          <DisabledInput title="Duration (days)" value="365" />
          <DisabledInput title="Farming Coin Bonus (%)" value="0.041" />
          <div className="flex justify-center">
            <Btn title="Buy Package" />
          </div>
        </div>
        {/* Delta end */}
        {/* Zeta  start */}
        <div className="flex flex-col gap-y-3 p-3 rounded-lg w-full glass-container md:w-[49%] lg:w-[32%]">
          <div className="w-full p-1 bg-colorprimary rounded-lg">
            <h6 className="flex gap-x-3 items-center !m-0">
              <TbDelta className="text-[30px]" />{" "}
              <span className="font-bold">Zeta</span>
            </h6>
          </div>
          <DisabledInput title="Price ($)" value="52.5" />
          <DisabledInput title="Coin Amount" value="250" />
          <DisabledInput title="Duration (days)" value="365" />
          <DisabledInput title="Farming Coin Bonus (%)" value="0.041" />
          <div className="flex justify-center">
            <Btn title="Buy Package" />
          </div>
        </div>
        {/* Zeta end */}
        {/* Kappa  start */}
        <div className="flex flex-col gap-y-3 p-3 rounded-lg w-full glass-container md:w-[49%] lg:w-[32%]">
          <div className="w-full p-1 bg-colorprimary rounded-lg">
            <h6 className="flex gap-x-3 items-center !m-0">
              <TbDelta className="text-[30px]" />{" "}
              <span className="font-bold">Kappa</span>
            </h6>
          </div>
          <DisabledInput title="Price ($)" value="52.5" />
          <DisabledInput title="Coin Amount" value="250" />
          <DisabledInput title="Duration (days)" value="365" />
          <DisabledInput title="Farming Coin Bonus (%)" value="0.041" />
          <div className="flex justify-center">
            <Btn title="Buy Package" />
          </div>
        </div>
        {/* Kappa end */}
      </div>
    </div>
  );
};

export default BuyFarming;
