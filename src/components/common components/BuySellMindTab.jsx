import React, { useState } from "react";
import Btn from "./Btn";
import DisabledInput from "./DisabledInput";
import EnableInput from "./EnableInput";

const BuySellMindTab = () => {
  let [buyMind, setBuyMind] = useState(true);
  let [sellMind, setSellMind] = useState(false);

  let showBuyMind = () => {
    setBuyMind(true);
    setSellMind(false);
  };
  let showSellMind = () => {
    setBuyMind(false);
    setSellMind(true);
  };

  return (
    <>
      <div className="w-full glass-container rounded-xl p-3">
        <div className="flex justify-center gap-x-3">
          <Btn title="Buy MIND" onClick={showBuyMind} bg={buyMind} />
          <Btn title="Sell MIND" onClick={showSellMind} bg={sellMind} />
        </div>
        {buyMind && (
          <div className="mt-3 w-full flex flex-col gap-y-2">
            <DisabledInput title="Avl. Balance ($)" value="$535.67" />
            <DisabledInput title="MIND Price($)" value="0.225" />
            <EnableInput title="Quantity (MIND)" />
            <DisabledInput title="Total Values ($)" value="" />
            <DisabledInput title="Buying Fees (%)" value="0.15" />

            <DisabledInput title="Payable ($)" value="" />
            <div className="px-[15px] py-[8px] rounded-md text-center bg-green-500 font-semibold text-white duration-200 hover:bg-green-400">
     Buy
            </div>
          </div>
        )}
        {sellMind && (
          <div className="mt-3 w-full flex flex-col gap-y-2">
            <DisabledInput title="Avl. MIND" value="$535.67" />
            <DisabledInput title="MIND Price($)" value="0.225" />
            <EnableInput title="Quantity (MIND)" />
            <DisabledInput title="Total Values ($)" value="" />
            <DisabledInput title="Selling Fees (%)" value="0.15" />

            <DisabledInput title="Get Cash ($)" value="" />
            <div className="px-[15px] py-[8px] rounded-md text-center bg-red-500 font-semibold text-white duration-200 hover:bg-red-400">
              Sell
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BuySellMindTab;
