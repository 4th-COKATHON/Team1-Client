import React from "react";
import logoText from "../assets/LogoText.png";
import { useState } from "react";
import Modal from "./Modal";
import Roulette from "./Roulette";

/**
 * 0이면 start, 3이면 reward 주황색으로 변함
 * @param {number} currentIndex
 * @returns
 */
const Map = ({ currentIndex }) => {
  const [modal, setModal] = useState(false);

  const handleCellClick = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className="bg-[#E9EBF0] w-full h-screen flex justify-center items-center p-3">
      <div className="w-[95%] h-[90%]">
        <div className="w-full h-full grid grid-cols-5 grid-rows-10 gap-3">
          {/* Row 1 */}
          <div
            className={`w-full h-full text-white flex items-center cursor-pointer justify-center border border-[#D6E7FF] rounded-tl-lg ${
              currentIndex === 0
                ? "bg-[#4384F9] text-white"
                : "bg-[#D6E7FF] text-[#4384F9]"
            }`}
            onClick={handleCellClick}
          >
            Start
          </div>
          <div className="w-full h-full bg-white border border-[#D6E7FF] col-span-3"></div>
          <div
            className={`w-full h-full text-white flex items-center justify-center border border-[#D6E7FF] rounded-tr-lg ${
              currentIndex === 1
                ? "bg-[#4384F9] text-white"
                : "bg-[#D6E7FF] text-[#4384F9]"
            }`}
          >
            Mission
          </div>

          {/* Row 2 */}
          <div className="w-full h-full bg-white border border-[#D6E7FF]"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full bg-white border border-[#D6E7FF] row-span-3"></div>

          {/* Row 3 */}
          <div className="w-full h-full bg-white border border-[#D6E7FF] row-span-3"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full bg-white border border-[#D6E7FF]"></div>

          {/* Row 5 */}
          <div className="w-full h-full bg-white border border-[#D6E7FF]"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full bg-white border border-[#D6E7FF]"></div>

          {/* Row 6 */}
          <div className="w-full h-full bg-white border border-[#D6E7FF] row-span-3"></div>
          <div className="w-full h-full col-span-3"></div>
          <div className="w-full h-full bg-white border border-[#D6E7FF] row-span-3"></div>
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
          <div className="w-full h-full bg-white border border-[#D6E7FF]"></div>
          <div className="w-full h-full bg-white border border-[#D6E7FF] col-span-2"></div>
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
      <img
        src={logoText}
        alt="logotext"
        className="absolute flex items-center justify-center"
      />
      {modal && (
        <Modal>
          <Roulette onClose={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
};

export default Map;
