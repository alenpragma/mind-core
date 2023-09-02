import React, { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { RiSearchEyeLine } from "react-icons/ri";
import { FaChevronDown, FaHamburger } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePayment } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { BiLogOutCircle, BiSearchAlt } from "react-icons/bi";
import TypedSearchBar from "./TypedSearchBar";

const Navbar = ({width}) => {
  const [dropDownShow, setDropDownShow] = useState(false);
  const [searcBarShow, setSearchBarShow] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropDownShow((prev) => !prev);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDownShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);

    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  // below tab screen detect

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
      <div className={`${width} glass-container fixed px-3 py-2 text-white   z-40`}>
        
        <div className="w-full flex items-center justify-between  ">
          {!isSmallScreen ? (
            <h3 className="mb-0">Portfolio</h3>
          ) : (
            <div className=""></div>
          )}

          {!isSmallScreen && (
            <div className="w-[40%]">
              <TypedSearchBar />
            </div>
          )}
          <div className="flex items-center gap-x-3">
            {isSmallScreen && (
              <BiSearchAlt
                onClick={() => setSearchBarShow((prev) => !prev)}
                className="text-[25px] hover:text-colorprimary duration-200"
              />
            )}
            <div
              onClick={toggleDropdown}
              ref={dropdownRef}
              className="pl-2 pr-3 py-2 rounded-full glass-container text-sm md:text-md lg:text-lg group flex items-center gap-x-2 relative z-50 cursor-pointer"
            >
              <img src="" className="w-[40px] h-[40px] rounded-full" alt="" />
              <p className="m-0 text-[16px] group-hover:text-colorprimary">
                Hamza 
              </p>
              <FaChevronDown
                className={`text-[14px] ${
                  dropDownShow ? "transform rotate-180" : ""
                } duration-100 group-hover:text-colorprimary `}
              />
              {dropDownShow && (
                <div className="absolute !z-50 w-[200px] text-[16px] glass-container bottom-[-180px] md:bottom-[-190px] lg:bottom-[-210px] py-2 px-3 left-[-60px]  rounded-md ">
                  <ul className="m-0 p-0 flex flex-col ">
                    <li className=" py-2 flex gap-x-1 items-center duration-100 hover:text-colorprimary ">
                      <CgProfile /> Profile
                    </li>
                    <li className=" py-2 flex gap-x-1 items-center duration-100 hover:text-colorprimary ">
                      <MdOutlinePayment /> Payment Setting
                    </li>
                    <li className="border-b py-2 flex gap-x-1 items-center duration-100 hover:text-colorprimary ">
                      <GiWallet /> Wallet Setting
                    </li>
                    <li className=" py-2 flex gap-x-1 items-center duration-100 hover:text-colorprimary ">
                      <BiLogOutCircle /> Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-[100%] p-3 text-white translate-y-[-300px] duration-200  ${
          searcBarShow ? "translate-y-[0px]" : "translate-y-[-300px]"
        }`}
      >
        <TypedSearchBar />
      </div>
    </>
  );
};

export default Navbar;
