import React, { useEffect, useState } from "react";
import {
  FaAlignRight,
  FaBriefcase,
  FaChevronDown,
  FaCubes,
  FaHamburger,
  FaHome,
  FaInfoCircle,
} from "react-icons/fa";
import { TbArrowBadgeRight } from "react-icons/tb";

import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const navData = [
  { icon: <FaHome />, name: "Dashboard", link: "home" },
  {
    icon: <FaCubes />,
    name: "Farming",
    dropdownItems: [
      { name: "Buy Farming", link: "buyFarming" },
      { name: "My Asset", link: "myAsset" },
    ],
  },
  {
    icon: <FaBriefcase />,
    name: "Earn MIND",
    dropdownItems: [
      { name: "MIND Staking", link: "mindstaking" },
      { name: "MIND Staking History", link: "mindStakingHistory" },
    ],
  },
  {
    icon: <FaBriefcase />,
    name: "Earn MUSD",
    dropdownItems: [
      { name: "MUSD Staking", link: "musdstaking" },
      { name: "MUSD Staking History", link: "musdStakingHistory" },
    ],
  },
  { icon: <FaHome />, name: "Become A Merchant" },
  {
    icon: <FaCubes />,
    name: "Affiliate",
    dropdownItems: [{ name: "My Affiliate" }, { name: "Add Affiliate" }],
  },
  {
    icon: <FaCubes />,
    name: "Wallet",
    dropdownItems: [
      { name: "Deposit USD" },
      { name: "Deposit MIND" },
      { name: "Withdraw Cash Fund" },
      { name: "WithDraw Coin" },
      { name: "Transfer Fund" },
      { name: "Transfer Coin" },
      { name: "Transaction Report" },
    ],
  },
  { icon: <FaInfoCircle />, name: "KYC Verification" },
  {
    icon: <FaBriefcase />,
    name: "B.W. Trans. History",
    dropdownItems: [
      { name: "Affiliate Bonus History" },
      { name: "Daily Seller Bonus History" },
      { name: "Daily Bonus History" },
      { name: "Daily Staking History" },
      { name: "Level Bonus History" },
      { name: "Token Sett. History" },
      { name: "Transfer History" },
      { name: "Withdraw History" },
      { name: "Other Transaction" },
      
    ],
  },
  { icon: <FaInfoCircle />, name: "White paper" },
  { icon: <FaInfoCircle />, name: "Explorer" },

];

const SideNavBar = () => {
  const [expandedDropdown, setExpandedDropdown] = useState({});

  const toggleDropdown = (index) => {
    setExpandedDropdown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  //    navbar expand functionality
  let [expand, setExpand] = useState(false);
  let handleExpand = async () => {
    setExpand((prev) => !prev);
  };

  // responsive hamburger toggle
  let [hamBurgerShow, setHamBurgerShow] = useState(false);

  let hamBurger = () => {
    setHamBurgerShow((prev) => !prev);
  };

  // responsive detect
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    let scrollWidt = (e) => {
      window.innerWidth <= 991
        ? setIsSmallScreen(true)
        : setIsSmallScreen(false);
    };
    scrollWidt();
    window.addEventListener("resize", scrollWidt);
  }, []);

  return (
    <>
      {/* side navbar Starts */}

      <div
        className={`${
          !expand ? "w-[20%]" : "w-[7%]"
        } h-[100vh] fixed text-white rleative duration-300 ${
          hamBurgerShow ? " !left-0 w-[75%]" : ""
        } ${isSmallScreen ? "left-[-20%]" : "left-0"} `}
      >
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: "url('https://i.gifer.com/VJE4.gif')",
          }}
        />

        <div className="absolute glass-container w-full h-full"></div>
        <div className="relative h-full p-3">
          {/* Your content here */}
          {/* {expand && (
            <img
              src="https://i.postimg.cc/wTNbsthM/image.png"
              className="w-[40px] h-[40px]"
              alt=""
            />
          )} */}

          <div
            className={`flex ${
              !expand ? "justify-between" : "justify-center"
            }  items-center`}
          >
            {!isSmallScreen && (
              <h5 className="flex items-center mb-0 p-0 gap-x-2">
                {" "}
                {!expand && (
                  <img
                    src="https://i.postimg.cc/wTNbsthM/image.png"
                    className="w-[40px] h-[40px]"
                    alt=""
                  />
                )}{" "}
                {!expand && "MINDCHAIN"}
              </h5>
            )}

            {!isSmallScreen && (
              <div
                className="p-2 text-[30px] rounded-full glass-container  duration-100 hover:text-colorprimary "
                onClick={handleExpand}
              >
                <TbArrowBadgeRight
                  className={`duration-500 ${
                    !expand ? "rotate-[-180deg]" : ""
                  } duration-100 hover:text-colorprimary `}
                />
              </div>
            )}
            {isSmallScreen == true && (
              <div className="">
                <FaHamburger
                  onClick={hamBurger}
                  className="absolute top-[1.3rem] right-[-60px] duration-100 hover:text-colorprimary  text-[30px]"
                  style={{ zIndex: "99999999999" }}
                />
              </div>
            )}
          </div>

          {/* nav items start from here */}
          <div className=" h-[65%] flex flex-col gap-y-3 rounded-md overflow-y-scroll mt-3">
            {navData.map((item, index) => (
              <div key={index}>
                <div
                  className="p-3 text-[16px] relative flex items-center duration-100 hover:text-colorprimary gap-x-2 glass-container rounded-md  cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <span className="text-[25px]">{item.icon}</span>{" "}
                  <span>{!expand && item.name}</span>{" "}
                  {item.dropdownItems && !expand && (
                    <FaChevronDown
                      className={`justify-self-end absolute right-4 ${
                        expandedDropdown[index] ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {expandedDropdown[index] && item.dropdownItems && !expand && (
                  <div className="flex flex-col gap-y-3 pl-5 mt-3">
                    {item.dropdownItems.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="duration-100 hover:text-colorprimary cursor-pointer"
                      >
                        {subItem.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* side navbar ends */}

      {/* all contents starts */}
      <div
        className={` duration-300  fixed top-0  z-[-1]  right-0 ${
          !expand ? "w-[80%]" : "w-[93%] "
        } ${isSmallScreen && "!w-[100%]"} h-[100vh] overflow-y-scroll`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiJxnu-E9PhWyXf2q_-_ZV5hfHNJxY17Wv2bfgU1Ko-299TzRUYRrbMDQpfxemx4OBCE&usqp=CAU')",
          }}
        ></div>
        <div className="glass-container w-full h-full absolute"></div>
        <Navbar />
        <Outlet />
      </div>
      {/* all contents ends */}
    </>
  );
};

export default SideNavBar;
