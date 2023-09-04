import React, { useEffect, useRef, useState } from "react";

const CoinUpdateBar = () => {
  const [dropDownShow, setDropDownShow] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropDownShow((prev) => !prev);
  };
  useEffect(() => {
    window.addEventListener("click", closeDropdown);

    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);
  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDownShow(false);
    }
  };

  let coinUpdate = [
    {
      name: "C-Chain",
      image:
        "https://images.ctfassets.net/gcj8jwzm6086/5VHupNKw…b7a82c8388e4ee9d4be7062d4/avalanche-avax-logo.svg",
      price: "0.0",
    },
    {
      name: "Beam Subnet",
      image:
        "https://images.ctfassets.net/gcj8jwzm6086/2ZXZw0POSuXhwoGTiv2fzh/5b9d9e81acb434461da5addb1965f59d/chain-logo.png",
      price: "0.0",
    },
    {
      name: "Dexalot Subnet",
      image:
        "https://images.ctfassets.net/gcj8jwzm6086/6tKCXL3AqxfxSUzXLGfN6r/be31715b87bc30c0e4d3da01a3d24e9a/dexalot-subnet.png",
      price: "0.0",
    },
    {
      name: "DFK Subnet",
      image:
        "https://images.ctfassets.net/gcj8jwzm6086/6ee8eu4VdSJNo93Rcw6hku/2c6c5691e8a7c3b68654e5a4f219b2a2/chain-logo.png",
      price: "0.0",
    },
    {
      name: "Etherium",
      image:
        "https://images.ctfassets.net/gcj8jwzm6086/6l56QLVZmvacuBfjHBTThP/791d743dd2c526692562780c2325fedf/eth-circle__1_.svg",
      price: "0.0",
    },
    {
      name: "Loco Legends Subnet",
      image:
        "https://images.ctfassets.net/gcj8jwzm6086/6RwkVPYvekWzhGCyUBho6Y/7ab20082bfa26954aa9d3b41ec9511a7/loco.png",
      price: "0.0",
    },
    {
      name: "MELD Subnet",
      image:
        "https://images.ctfassets.net/gcj8jwzm6086/181nlCtlNqCsTSncb3Z7Xe/f1054944d8af31636bd27e35430082ba/meld_logo_sm.png",
      price: "0.0",
    },
    {
      name: "Sharpnel Subnet",
      image:
        "https://images.ctfassets.net/gcj8jwzm6086/3vru4toe9KAyUXpn5XQthq/714286de3f35ee92426853037e985f77/chain-logo.png",
      price: "0.0",
    },
    {
      name: "Mintara Subnet",
      image:
        "https://images.ctfassets.net/gcj8jwzm6086/1yBWEcGWdnUkZ5nDCVI7dF/d590ac823ec38eccf24f9cdac3f591f6/logo_-_____________.pngg",
      price: "0.0",
    },
  ];
  console.log(coinUpdate);
  //   const firstThreeCoins = coinUpdate.slice(0, 3);

  //   md width detect
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    let scrollWidt = (e) => {
      window.innerWidth <= 568
        ? setIsSmallScreen(true)
        : setIsSmallScreen(false);
    };
    scrollWidt();
    window.addEventListener("resize", scrollWidt);
  }, []);
  // small width detect
  const [isMdScreen, setIsMdScreen] = useState(false);
  useEffect(() => {
    let scrollWidt = (e) => {
      window.innerWidth <= 1280 ? setIsMdScreen(true) : setIsMdScreen(false);
    };
    scrollWidt();
    window.addEventListener("resize", scrollWidt);
  }, []);

  //   showing coin update according to width
  let responsiveData;
  if (isSmallScreen) {
    responsiveData = coinUpdate.slice(0, 2);
  } else if (isMdScreen) {
    responsiveData = coinUpdate.slice(0, 6);
  } else {
    responsiveData = coinUpdate.slice(0, 8);
  }
  //   showing dropdown items according to responsive view
  const [dropdownResponsiveData, setDropdownResponsiveData] = useState([]);

  // ...
  
  useEffect(() => {
    if (isSmallScreen) {
      // Use setDropdownResponsiveData to update the state
      setDropdownResponsiveData(coinUpdate.slice(2));
    } else if (isMdScreen) {
      // Use setDropdownResponsiveData to update the state
      setDropdownResponsiveData(coinUpdate.slice(4));
    }else{
        setDropdownResponsiveData(coinUpdate.slice(7));

    }
  }, [isSmallScreen, isMdScreen]);

  return (
    <div className="mt-3 glass-container items-center  w-full p-3 rounded-[200px] flex justify-between gap-x-2 ">
      {/* All Network Start */}
      <div
        onClick={() => console.log(coinUpdate[0].image)}
        className="pl-2 pr-3 py-2 flex   items-center rounded-full glass-container text-white  group   gap-x-2 relative z-50 cursor-pointer "
      >
        <img
          src={coinUpdate[1].image}
          className="w-[20px] md:w-[35px] h-[20px] md:h-[35px] rounded-full relative z-3 bg-white "
          alt=""
        />
        <img
          src={coinUpdate[2].image}
          className="w-[20px] md:w-[35px] h-[20px] md:h-[35px] rounded-full ml-[-35px] relative z-2 bg-white "
          alt=""
        />
        <img
          src={coinUpdate[3].image}
          className="w-[20px] md:w-[35px] h-[20px] md:h-[35px] rounded-full ml-[-35px] bg-white "
          alt=""
        />
        <p
          className="m-0    font-semibold group-hover:text-colorprimary duration-200 text-[8px] md:text-[13px]"
          style={{ lineHeight: "15px" }}
        >
          All Networks <br />
          $00.00
        </p>
      </div>
      {/* All Network End */}
      {/* first 5 showing coin updates start */}

      {responsiveData.map((item, index) => (
        <div
          onClick={() => console.log(coinUpdate[0].image)}
          className="p-2 flex  items-center rounded-full glass-container text-white text-sm md:text-md lg:text-lg group   gap-x-2 relative z-50 cursor-pointer"
          key={index}
        >
          <img
            src={item.image}
            className="  w-[20px] md:w-[35px] h-[20px] md:h-[35px] rounded-full relative z-3 bg-white "
            alt=""
          />

          <p
            className="m-0 text-[8px] md:text-[13px]    font-semibold group-hover:text-colorprimary duration-200 "
            style={{ lineHeight: "15px" }}
          >
            {item.name.slice(0,3)+"..."}
            <br /> ${item.price}
          </p>
        </div>
      ))}
      {/* first 5 showing coin updates end */}
      {/* rest of the coint update in dropdown start */}
      <div
        onClick={toggleDropdown}
        ref={dropdownRef}
        className="p-[3px] md:p-1  flex  items-center rounded-full w-[30px]  h-[30px] glass-container text-white text-sm md:text-md lg:text-lg group   gap-x-2 relative z-50 cursor-pointer"
      >
        <div className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] flex justify-center items-center rounded-full duration-300 hover:text-colorprimary">
          +
        </div>
        {dropDownShow && (
          <div className="absolute bg-white !z-50 w-[200px] shadow-xl text-[16px] glass-container bottom-[-180px] top-[62px] lg:bottom-[-220px] py-2 px-3 left-[-170px]  rounded-md ">
            <ul className="m-0 p-0 flex flex-col ">
              {dropdownResponsiveData &&
                dropdownResponsiveData.map((item) => (
                  <li className=" py-2 flex gap-x-1  justify-between items-center duration-100 text-colorprimary  hover:border-b">
                    <di v className="flex items-center gap-x-2">
                      <img
                        src={item.image}
                        className="w-[15px] h-[15px] rounded-full "
                        alt=""
                      />
                      {item.name.slice(0,5)+"..."}
                    </di>
                    <div className="">${item.price}</div>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      {/* rest of the coint update in dropdown start */}
    </div>
  );
};

export default CoinUpdateBar;
