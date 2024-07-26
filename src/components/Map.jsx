import React from "react";
import logoText from "../assets/LogoText.png";

const Map = ({ currentIndex, onCellClick }) => {
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center p-3">
      <div className="w-[95%] h-[90%]">
        <div className="w-full h-full grid grid-cols-5 grid-rows-10 gap-3">
          {/* Row 1 */}
          <div
            className={`w-full h-full text-white flex items-center cursor-pointer justify-center border border-[#D6E7FF] rounded-tl-lg ${
              currentIndex === 0
                ? "bg-[#4384F9] text-white"
                : "bg-[#D6E7FF] text-[#4384F9]"
            }`}
            onClick={onCellClick}
          >
            Start
          </div>
          <div className="w-full h-full bg-[#F3F8FF] border border-[#D6E7FF] col-span-3"></div>
          <div
            className={`w-full h-full text-white flex items-center cursor-pointer justify-center border border-[#D6E7FF] rounded-tr-lg ${
              currentIndex === 1
                ? "bg-[#4384F9] text-white"
                : "bg-[#D6E7FF] text-[#4384F9]"
            }`}
            onClick={onCellClick}
          >
            Mission
          </div>

          {/* Row 2 */}
          <div className="w-full h-full border border-[#D6E7FF] bg-[#F3F8FF]"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full border border-[#D6E7FF] bg-[#F3F8FF] row-span-3"></div>

          {/* Row 3 */}
          <div className="w-full h-full border border-[#D6E7FF] bg-[#F3F8FF] row-span-3"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full bg-[#F3F8FF] border border-[#D6E7FF]"></div>

          {/* Row 5 */}
          <div className="w-full h-full border bg-[#F3F8FF] border-[#D6E7FF]"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full border bg-[#F3F8FF] border-[#D6E7FF]"></div>

          {/* Row 6 */}
          <div className="w-full h-full border bg-[#F3F8FF] border-[#D6E7FF] row-span-3"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full border bg-[#F3F8FF] border-[#D6E7FF] row-span-3"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full col-span-3"></div>

          {/* Row 10 */}
          <div
            className={`w-full h-full text-white flex items-center justify-center border border-[#D6E7FF] rounded-bl-lg ${
              currentIndex === 2
                ? "bg-[#4384F9] text-white"
                : "bg-[#D6E7FF] text-[#4384F9]"
            }`}
          >
            Review
          </div>
          <div className="w-full h-full border bg-[#F3F8FF] border-[#D6E7FF]"></div>
          <div className="w-full h-full border bg-[#F3F8FF] border-[#D6E7FF] col-span-2"></div>
          <div
            className={`w-full h-full text-white flex items-center justify-center border border-[#D6E7FF] rounded-br-lg ${
              currentIndex === 3
                ? "bg-[#4384F9] text-white"
                : "bg-[#D6E7FF] text-[#4384F9]"
            }`}
          >
            Reward
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
