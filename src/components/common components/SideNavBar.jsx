import React, { useEffect, useState } from "react";
import {
  FaAffiliatetheme,
  FaAlignRight,
  FaBriefcase,
  FaChevronDown,
  FaCubes,
  FaHamburger,
  FaHome,
  FaInfoCircle,
  FaRegCompass,
  FaRegHandshake,
} from "react-icons/fa";
import { TbArrowBadgeRight } from "react-icons/tb";
import { FiHome, FiUsers } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom"; // Import NavLink from React Router
import {
  PiArrowsDownUpBold,
  PiNewspaperBold,
  PiSquaresFourLight,
  PiSwap,
  PiWalletBold,
} from "react-icons/pi";
import { GiCoins, GiCoinsPile } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { MdDomainVerification } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import Navbar from "./Navbar";

const navData = [
  { icon: <FiHome />, name: "Dashboard", link: "home" },
  {
    icon: <PiSquaresFourLight />,
    name: "Farming",
    dropdownItems: [
      { name: "Buy Farming", link: "buyFarming" },
      { name: "My Asset", link: "myAsset" },
    ],
  },
  {
    icon: <GiCoins />,
    name: "Earn MIND",
    dropdownItems: [
      { name: "MIND Staking", link: "mindstaking" },
      { name: "MIND Staking History", link: "mindStakingHistory" },
    ],
  },
  {
    icon: <GiCoinsPile />,
    name: "Earn MUSD",
    dropdownItems: [
      { name: "MUSD Staking", link: "musdstaking" },
      { name: "MUSD Staking History", link: "musdStakingHistory" },
    ],
  },
  { icon: <FaRegHandshake />, name: "Become A Merchant", link: "merchant" },
  {
    icon: <FaAffiliatetheme />,
    name: "Affiliate",
    dropdownItems: [
      { name: "My Affiliate", link: "myAffiliate" },
      { name: "Add Affiliate", link: "addAffiliate" },
    ],
  },
  {
    icon: <PiWalletBold />,
    name: "Wallet",
    dropdownItems: [
      { name: "Deposit USD", link: "depositUSD" },
      { name: "Deposit MIND", link: "depositMIND" },
      { name: "Withdraw Cash Fund", link: "withdrawCashFund" },
      { name: "WithDraw Coin", link: "withdrawCoin" },
      { name: "Transfer Fund", link: "transferFund" },
      { name: "Transfer Coin", link: "transferCoin" },
      { name: "Transaction Report", link: "transactionReport" },
    ],
  },
  {
    icon: <MdDomainVerification />,
    name: "KYC Verification",
    link: "kycVerification",
  },
  {
    icon: <PiArrowsDownUpBold />,
    name: "B.W. Trans. History",
    dropdownItems: [
      { name: "Affiliate Bonus History", link: "affiliateBonusHistory" },
      { name: "Daily Seller Bonus History", link: "dailySellerBonusHistory" },
      { name: "Daily Bonus History", link: "dailyBonusHistory" },
      { name: "Daily Staking History", link: "dailyStakingHistory" },
      { name: "Level Bonus History", link: "levelBonusHistory" },
      { name: "Token Sett. History", link: "tokenSettlementHistory" },
      { name: "Transfer History", link: "transferHistory" },
      { name: "Withdraw History", link: "withdrawHistory" },
      { name: "Other Transaction", link: "otherTransaction" },
    ],
  },
  { icon: <BsTelephone />, name: "Contact Us", link: "contactUs" },
  { icon: <PiSwap />, name: "Swap", link: "swap" },
  { icon: <FiUsers />, name: "Ambassador", link: "ambassador" },
  { icon: <PiNewspaperBold />, name: "White paper", link: "whitePaper" },
  { icon: <FaRegCompass />, name: "Explorer", link: "explorer" },
];

const SideNavBar = () => {
  const [expandedDropdown, setExpandedDropdown] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setExpandedDropdown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  let [expand, setExpand] = useState(false);
  let handleExpand = async () => {
    setExpand((prev) => !prev);
  };

  let [hamBurgerShow, setHamBurgerShow] = useState(false);

  let hamBurger = () => {
    setHamBurgerShow((prev) => !prev);
  };

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

          <div className=" h-[65%] flex flex-col gap-y-3 rounded-md overflow-y-scroll mt-3">
            {navData.map((item, index) => (
              <div key={index}>
                {/* Main menu item */}
                <div
                  className={`p-3 text-[16px] relative flex items-center duration-100 hover:text-colorprimary gap-x-2 glass-container rounded-md  cursor-pointer ${
                    expandedDropdown[index] ? "active-class-name" : ""
                  }`}
                  onClick={() => {
                    toggleDropdown(index);
                    setActiveIndex(null); // Reset activeIndex when main menu item is clicked
                  }}
                >
                  <span className="text-[25px]">{item.icon}</span>{" "}
                  <span>{!expand && item.name}</span>{" "}
                  {item.dropdownItems && !expand && (
                    <FaChevronDown
                      className={`justify-self-end absolute duration-300 right-4 ${
                        expandedDropdown[index] ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {expandedDropdown[index] && item.dropdownItems && !expand && (
                  <div className="flex flex-col gap-y-3 pl-5 mt-3">
                    {item.dropdownItems.map((subItem, subIndex) => (
                      // Dropdown items with NavLink
                      <NavLink
                        key={subIndex}
                        to={subItem.link}
                        className=" hover:!text-colorprimary cursor-pointer duration-300 !text-white "
                        activeClassName="active-link-class-name" // Add your active link class name
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={` duration-300  fixed top-0  z-[-1]  right-0 ${
          !expand ? "w-[80%]" : "w-[93%] "
        } ${isSmallScreen && "!w-[100%]"} h-[100vh]  overflow-y-scroll`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiJxnu-E9PhWyXf2q_-_ZV5hfHNJxY17Wv2bfgU1Ko-299TzRUYRrbMDQpfxemx4OBCE&usqp=CAU')",
          }}
        ></div>
        <div className="glass-container w-full h-full absolute"></div>
        {/* sidebar toggle blur bg start */}
        {isSmallScreen && (
          <div className={`w-full h-full absolute ${hamBurgerShow && "z-50"} `}>
            {hamBurgerShow && (
              <div
                onClick={hamBurger}
                className={`w-full h-full glass-container`}
              ></div>
            )}
          </div>
        )}
        {/* sidebar toggle blur bg end*/}
        <Navbar
          width={`${!expand ? "w-[80%]" : "w-[93%] "} ${
            isSmallScreen && "!w-[100%]"
          }`}
        />

        <Outlet />
      </div>
    </>
  );
};

export default SideNavBar;
