import React from "react";
import Btn from "../components/common components/Btn";
import EnableInput from "../components/common components/EnableInput";
import DisabledInput from "../components/common components/DisabledInput";

const MusdStaking = () => {
  return (
    <div className="relative mt-10 z-0 w-full h-full pt-3 pl-3 pr-3   !top-0 text-white ">
      <div className="mb-5">
        <h5 className="border-b pb-3">Available Amount: 691.40 MIND</h5>
        <div className="inline-block mt-2  justify-between">
          <div className="flex gap-x-2">
            <Btn title="Simple Earn" />
            <Btn title="Flexible Savings" />
          </div>
        </div>
      </div>

      <div className="flex w-full  md:w-[70%] justify-center">
        <div className="">
          <div className="flex w-full  flex-col gap-y-3 p-3 rounded-lg  glass-container ">
            <div className="w-full p-1  rounded-lg">
              <h4 className="flex gap-x-3 items-center !m-0">
                
              Stake to Earn
              </h4>
            </div>
            <DisabledInput title="Avl. Balance (MIND)" value="691.40 MIND" />
            <EnableInput title="Enter Amount (MIND)"/>
            <EnableInput title="Duration" pholder="Select Days" />
            <EnableInput title="APY Value (MIND)"  />
            <EnableInput title="Total Staking Value (MIND)"  />
            <EnableInput title="Your Daily Bonus (MIND)"  />
           
        
            <div className="flex justify-center">
              <Btn title="Staking" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusdStaking;
