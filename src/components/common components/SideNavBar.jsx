import React, { useState } from "react";
import {
  FaBriefcase,
  FaChevronDown,
  FaCubes,
  FaHome,
  FaInfoCircle,
} from "react-icons/fa";

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
];

const SideNavBar = () => {
  const [expandedDropdown, setExpandedDropdown] = useState({});

  const toggleDropdown = (index) => {
    setExpandedDropdown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="w-[300px] h-[100vh] fixed text-white">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: "url('https://i.gifer.com/VJE4.gif')",
        }}
      />
      <div className="absolute glass-container w-full h-full"></div>
      <div className="relative h-full p-3">
        {/* Your content here */}
        <h3>MINDCHAIN</h3>
        {/* nav items start from here */}
        {navData.map((item, index) => (
          <div key={index}>
            <div
              className="p-3 text-[20px] relative flex items-center gap-x-2 glass-container rounded-md mt-3 cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <span className="text-[30px]">{item.icon}</span>{" "}
              <span>{item.name}</span>{" "}
              {item.dropdownItems && (
                <FaChevronDown
                  className={`justify-self-end absolute right-4 ${
                    expandedDropdown[index] ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>
            {expandedDropdown[index] && item.dropdownItems && (
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
  );
};

export default SideNavBar;
