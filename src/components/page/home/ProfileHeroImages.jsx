import React from "react";
import { FiRefreshCw } from "react-icons/fi";

const ProfileHeroImages = () => {
  return (
    <div className="">
      <div className="ref">
        <div className="glass-container rounded-lg h-[200px] lg:h-[300px] overflow-hidden">
          {/* cover picture start */}
          <div className="w-full h-[60%] overflow-hidden relative">
            <div className="absolute z-1 w-full h-full "></div>
            <img
              src="https://i.postimg.cc/Ls5nYQb8/hekko-fnl-crom.png"
              className="w-full h-auto "
              alt=""
            />
          </div>
          {/* cover picture end */}
          {/* dp start */}
          <div className="absolute top-[60%] translate-y-[-50%] left-4">
            <div className="flex  justify-center items-center p-2 bg-white shadow-lg rounded-full overflow-hidden h-[100px] lg:h-[170px] w-[100px] lg:w-[170px] ">
              <img
                src="https://i.postimg.cc/vmrCsgks/249258182-2975620919365412-8646170426615816778-n.jpg"
                className="w-full h-auto "
                alt=""
              />
              {/* username start */}
              <div className="absolute right-[-150px] top-9  lg:right-[-210px] lg:top-[80px] mt-3 font-bold">
                <p className="m-0 text-white text-[18px] md:text-[22px] lg:text-[25px]">
                  {" "}
                  @hamzaaltamas
                </p>
              </div>
              {/* username end */}
            </div>
          </div>
          {/* dp end */}
          {/* net worth start */}
          <div className="p-2 rounded-md flex flex-col z-50 gap-y-2 text-right glass-container text-white m-0  absolute top-4 right-4">
            <p className="m-0">Net Worth</p>
            <h3 className="m-0">$00,00</h3>
            <p className="m-0  text-right flex justify-end">
              <FiRefreshCw className="text-right duration-200 hover:text-colorprimary" />
            </p>
          </div>
          {/* net worth end */}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeroImages;
