import React, { useState } from "react";
import {
    FaAlignRight,
  FaBriefcase,
  FaChevronDown,
  FaCubes,
  FaHome,
  FaInfoCircle,
} from "react-icons/fa";
import {TbArrowBadgeRight} from "react-icons/tb"

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
  const [expandedDropdown, setExpandedDropdown] = useState({});

  const toggleDropdown = (index) => {
    setExpandedDropdown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
 
//    navbar expand functionality
let [expand,setExpand] = useState(false)
  let handleExpand = () =>{
      setExpand((prev)=>!prev)
  }

  return (
    <div className={`${!expand ? "w-[300px]" : "w-[97px]"} h-[100vh] fixed text-white rleative`}>
        
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: "url('https://i.gifer.com/VJE4.gif')",
        }}
      />
      <div className="absolute glass-container w-full h-full"></div>
      <div className="relative h-full p-3">
        {/* Your content here */}
        <div className={`flex ${!expand ? "justify-between" :"justify-center"}  items-center`}>

        <h3> {!expand && "MINDCHAIN"}</h3>
      <div className="p-2 text-[30px] rounded-full glass-container  " onClick={handleExpand}><TbArrowBadgeRight className={`duration-500 ${!expand? "rotate-[-180deg]":""}`}/></div>
        </div>
        {/* nav items start from here */}
        <div className=" h-[65%] flex flex-col gap-y-3 rounded-md overflow-y-scroll mt-3">

        {navData.map((item, index) => (
          <div key={index}>
            <div
              className="p-3 text-[20px] relative flex items-center gap-x-2 glass-container rounded-md  cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <span className="text-[30px]">{item.icon}</span>{" "}
              <span>{!expand && item.name}</span>{" "}
              {item.dropdownItems && (
                !expand && 
                <FaChevronDown
                  className={`justify-self-end absolute right-4 ${
                    expandedDropdown[index] ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>
            {expandedDropdown[index] && item.dropdownItems && (
                !expand && 
              <div className="flex flex-col gap-y-3 pl-5 mt-3">
                {item.dropdownItems.map((subItem, subIndex) => (
                  <div key={subIndex}>{subItem.name}</div>
                ))}
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
