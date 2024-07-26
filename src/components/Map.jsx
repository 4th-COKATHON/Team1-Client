import React from "react";
import logoText from "../assets/LogoText.png";

/**
 * 0이면 start, 3이면 reward 주황색으로 변함
 * @param {number} currentIndex
 * @returns
 */
const Map = ({ currentIndex }) => {
  return (
    <div className="bg-[#E9EBF0] w-full h-screen flex justify-center items-center p-3">
      <div className="w-[95%] h-[90%]">
        <div className="w-full h-full grid grid-cols-5 grid-rows-10 gap-3">
          {/* Row 1 */}
          <div
            className={`w-full h-full text-white flex items-center justify-center border border-black rounded-tl-lg ${
              currentIndex === 0 ? "bg-orange-500" : "bg-black"
            }`}
          >
            Start
          </div>
          <div className="w-full h-full bg-white border border-black col-span-3"></div>
          <div
            className={`w-full h-full text-white flex items-center justify-center border border-black rounded-tr-lg ${
              currentIndex === 1 ? "bg-orange-500" : "bg-black"
            }`}
          >
            Mission
          </div>

          {/* Row 2 */}
          <div className="w-full h-full bg-white border border-black"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full bg-white border border-black row-span-3"></div>

          {/* Row 3 */}
          <div className="w-full h-full bg-white border border-black row-span-3"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full bg-white border border-black"></div>

          {/* Row 5 */}
          <div className="w-full h-full bg-white border border-black"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full bg-white border border-black"></div>

          {/* Row 6 */}
          <div className="w-full h-full bg-white border border-black row-span-3"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full bg-white border border-black row-span-3"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full col-span-3"></div>

          {/* Row 10 */}
          <div
            className={`w-full h-full text-white flex items-center justify-center border border-black rounded-bl-lg ${
              currentIndex === 2 ? "bg-orange-500" : "bg-black"
            }`}
          >
            Review
          </div>
          <div className="w-full h-full bg-white border border-black"></div>
          <div className="w-full h-full bg-white border border-black col-span-2"></div>
          <div
            className={`w-full h-full text-white flex items-center justify-center border border-black rounded-br-lg ${
              currentIndex === 3 ? "bg-orange-500" : "bg-black"
            }`}
          >
            Reward
          </div>
        </div>
      </div>
      <img
        src={logoText}
        alt="logotext"
        className="absolute flex items-center justify-center"
      />
    </div>
  );
};

export default Map;
