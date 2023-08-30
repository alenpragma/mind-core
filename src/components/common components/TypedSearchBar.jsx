import React, { useState } from "react";
import { RiSearchEyeLine } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";

const TypedSearchBar = () => {
    const [inputFocused, setInputFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");
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

  return (
    <div>
      <div className="relative w-[100%] ">
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
                style={{ display: "inline-block" }}
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
    </div>
  );
};

export default TypedSearchBar;
