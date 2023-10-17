import React from "react";
import Btn from "../components/common components/Btn";

const MindStakingHistory = () => {
  const data = [
    {
      id: 1,
      package: "Package 1",
      purchaseDate: "2023-10-17",
      tokenAmount: 1000,
      dailyBuyerToken: 50,
      receivedDays: 5,
      remainingDays: 10,
    },
    {
      id: 2,
      package: "Package 2",
      purchaseDate: "2023-10-16",
      tokenAmount: 2000,
      dailyBuyerToken: 100,
      receivedDays: 4,
      remainingDays: 8,
    },
    // Add more data entries as needed
  ];

  return (
    <div className="relative mt-10 z-0 w-full h-full pt-3 pl-3 pr-3 !top-0 text-white">
      <div className="mb-5">
      
        <div className="pb-3 border-b mt-2">
          <div className="inline-block">
            <div className="flex gap-x-3">
            <Btn title="Simple Earn History" />
            <Btn title="Flexible Savings History" />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-3 flex items-center justify-between">
        <div className="flex items-center gap-x-2">Show <input type="text " className="p-1 border-none outline-none glass-container w-[40px] rounded-md " /> entries</div>
        <div className="flex items-center gap-x-2">Search <input type="text " className="p-1 border-none outline-none glass-container  rounded-md " /> </div>
      </div>
      {/* My assets table */}
      <div className="w-full overflow-x-scroll">

      <table className="min-w-full glass-container  table-auto">
        <thead>
          <tr>
          <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Days</th>
            <th className="border px-4 py-2">Daily Bonus</th>
            <th className="border px-4 py-2">Received Days</th>
            <th className="border px-4 py-2">Remaining Days</th>
            <th className="border px-4 py-2">Staking Dte</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
            <tr key={item.id}>
                    <td className="border px-4 py-2">{index+1}</td>
              <td className="border px-4 py-2">{item.package}</td>
              <td className="border px-4 py-2">{item.purchaseDate}</td>
              <td className="border px-4 py-2">{item.tokenAmount}</td>
              <td className="border px-4 py-2">{item.dailyBuyerToken}</td>
              <td className="border px-4 py-2">{item.receivedDays}</td>
              <td className="border px-4 py-2">{item.remainingDays}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default MindStakingHistory;
