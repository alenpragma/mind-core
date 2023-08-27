import React, { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { RiSearchEyeLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePayment } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { BiLogOutCircle } from "react-icons/bi";

const Navbar = () => {
  const [inputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [dropDownShow, setDropDownShow] = useState(false);

  const dropdownRef = useRef(null);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

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

  return (
    <>
      <div className="w-full flex items-center justify-between glass-container px-3 py-2 text-white">
        <h3 className="mb-0">Portfolio</h3>
        <div className="relative w-[30%]">
          <div className="absolute left-4 top-[50%] transform -translate-y-1/2 text-[#ffffff93] pointer-events-none z-1">
            {inputFocused || inputValue ? null : (
              <div className="flex items-center gap-x-2">
                <RiSearchEyeLine className="text-[25px]" />{" "}
                <TypeAnimation 
                  sequence={[
                    "Search Projects",
                    1000,
                    "Search 0x Address",
                    1000,
                    "Search Education Articles",
                    1000,
                    "Search .avax Address",
                    1000,
                    "Search Events",
                    1000,
                    "Search Bitcoin Address",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "18px", display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
            )}
          </div>
          <input
            type="text"
            className="glass-container border-none outline-none px-3 py-2 w-full rounded-md shadow-xl"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={inputValue}
          />
        </div>
        <div
          onClick={toggleDropdown}
          ref={dropdownRef}
          className="pl-2 pr-3 py-2 rounded-full glass-container group flex items-center gap-x-2 relative z-50 cursor-pointer"
        >
          <img
            src="https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-1/351458758_6686132011431682_2799385172923958613_n.jpg?stp=dst-jpg_p720x720&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeG2wRAijHM5xYsi770jXwGJrJY4yaj8sjisljjJqPyyOIuSC9QBBvPYLNCekWoYPvRpSPDKtEqirFONGr3chcpT&_nc_ohc=SDbju6sk42wAX-sdHcs&_nc_ht=scontent.fdac20-1.fna&oh=00_AfDPkI_5i3tBI4_1Fe8oYZgQTog4VJZtTzyqAJ0IhvKYsQ&oe=64EBE67A"
            className="w-[40px] h-[40px] rounded-full"
            alt=""
          />
          <p className="m-0 group-hover:text-colorprimary">Hamza Altamas</p>
          <FaChevronDown
            className={`text-[14px] ${
              dropDownShow ? "transform rotate-180" : ""
            } duration-100 group-hover:text-colorprimary `}
          />
          {dropDownShow && (
            <div className="absolute !z-50 w-full glass-container bottom-[-190px] py-2 px-3  rounded-md left-0">
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
                  <BiLogOutCircle  /> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

