import React from "react";
import RightSidebar from "../components/page/home/RightSidebar/RightSidebar";
import ProfileHeroImages from "../components/page/home/ProfileHeroImages";
import CoinUpdateBar from "../components/page/home/CoinUpdateBar/CoinUpdateBar";
import BuySellMindTab from "../components/common components/BuySellMindTab";

const Home = () => {
  return (
    <div className="relative z-0 w-full h-full p-3 !top-0">
      <ProfileHeroImages />
      {/* <RightSidebar /> */}
      <CoinUpdateBar />
      <div className="mt-4 flex felx-col gap-y-4 md:gap-x-4 md:flex-row ">
        <div className="w-full md:w-[30%]">
          <BuySellMindTab />
        </div>
      </div>
    </div>
  );
};

export default Home;
