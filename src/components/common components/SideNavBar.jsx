import React, { useEffect, useState } from "react";
import {
  FaAlignRight,
  FaBriefcase,
  FaChevronDown,
  FaCubes,
  FaHome,
  FaInfoCircle,
} from "react-icons/fa";
import { TbArrowBadgeRight } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { activeSideNav } from "../../Slices/SideNavToggleSlice";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const navData = [
  { icon: <FaHome />, name: "Home" },
  {
    icon: <FaCubes />,
    name: "Products",
    dropdownItems: [
      { name: "Product 1" },
      { name: "Product 2" },
      { name: "Product 3" },
    ],
  },
  { icon: <FaInfoCircle />, name: "About" },
  {
    icon: <FaBriefcase />,
    name: "Services",
    dropdownItems: [{ name: "Service 1" }, { name: "Service 2" }],
  },
  { icon: <FaHome />, name: "Home" },
  {
    icon: <FaCubes />,
    name: "Products",
    dropdownItems: [
      { name: "Product 1" },
      { name: "Product 2" },
      { name: "Product 3" },
    ],
  },
  { icon: <FaInfoCircle />, name: "About" },
  {
    icon: <FaBriefcase />,
    name: "Services",
    dropdownItems: [{ name: "Service 1" }, { name: "Service 2" }],
  },
];

const SideNavBar = () => {
  let sideNavToggleData = useSelector((state) => state);
 
  let disp = useDispatch();
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
    disp(activeSideNav(expand));
  };
  
  useEffect(()=>{
    handleExpand()
  },[])
  return (
    <>
    {/* side navbar Starts */}
    <div
      className={`${
        !expand ? "w-[20%]" : "w-[7%]"
      } h-[100vh] fixed text-white rleative duration-300 `}
    
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

          <div
            className="p-2 text-[30px] rounded-full glass-container  duration-100 hover:text-colorprimary "
            onClick={handleExpand}
          >
            <TbArrowBadgeRight
              className={`duration-500 ${!expand ? "rotate-[-180deg]" : ""} duration-100 hover:text-colorprimary `}
            />
          </div>
        </div>
        {/* nav items start from here */}
        <div className=" h-[65%] flex flex-col gap-y-3 rounded-md overflow-y-scroll mt-3">
          {navData.map((item, index) => (
            <div key={index} >
              <div
                className="p-3 text-[18px] relative flex items-center duration-100 hover:text-colorprimary gap-x-2 glass-container rounded-md  cursor-pointer"
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
                    <div key={subIndex} className="duration-100 hover:text-colorprimary cursor-pointer">{subItem.name}</div>
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
    <div  className={` duration-300  fixed top-0    right-0 ${!expand ? "w-[80%]":"w-[93%] "} h-[100vh] overflow-y-scroll`}>
      <div 
       className="absolute inset-0 bg-cover bg-center "
       style={{
         backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiJxnu-E9PhWyXf2q_-_ZV5hfHNJxY17Wv2bfgU1Ko-299TzRUYRrbMDQpfxemx4OBCE&usqp=CAU')",
       }}
      ></div>
      <div className="glass-container w-full h-full absolute"></div>
      <Navbar/>
      <Outlet/>
    
    </div>
    {/* all contents ends */}
    </>
  );
};

export default SideNavBar;


