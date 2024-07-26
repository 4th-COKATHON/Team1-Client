import React from "react";
import logoText from "../assets/LogoText.png";

const Home = () => {
  return (
    <>
      <div className="relative bg-[#E9EBF0] w-full h-screen flex justify-center items-center p-3">
        <div className="w-[95%] h-[90%]">
          <div className="relative w-full h-full grid grid-cols-5 grid-rows-10 gap-3">
            {/* Row 1 */}
            <div className="relative w-full h-full bg-black text-white flex items-center justify-center border border-black rounded-tl-lg">
              Start
            </div>
            <div className="relative w-full h-full bg-white border border-black col-span-3"></div>
            <div className="relative w-full h-full bg-black text-white flex items-center justify-center border border-black rounded-tr-lg">
              Mission
            </div>

            {/* Row 2 */}
            <div className="relative w-full h-full bg-white border border-black"></div>
            <div className="relative w-full h-full col-span-3"></div>
            <div className="relative w-full h-full bg-white border border-black row-span-3"></div>

            {/* Row 3 */}
            <div className="relative w-full h-full bg-white border border-black row-span-3"></div>
            <div className="relative w-full h-full col-span-3"></div>
            <div className="relative w-full h-full col-span-3"></div>
            <div className="relative w-full h-full col-span-3"></div>
            <div className="relative w-full h-full bg-white border border-black"></div>

            {/* Row 5 */}
            <div className="relative w-full h-full bg-white border border-black"></div>
            <div className="relative w-full h-full col-span-3"></div>
            <div className="relative w-full h-full bg-white border border-black"></div>

            {/* Row 6 */}
            <div className="relative w-full h-full bg-white border border-black row-span-3"></div>
            <div className="relative w-full h-full col-span-3"></div>
            <div className="relative w-full h-full bg-white border border-black row-span-3"></div>
            <div className="relative w-full h-full col-span-3"></div>
            <div className="relative w-full h-full col-span-3"></div>

            {/* Row 10 */}
            <div className="relative w-full h-full bg-black text-white flex items-center justify-center border border-black rounded-bl-lg">
              Review
            </div>
            <div className="relative w-full h-full bg-white border border-black"></div>
            <div className="relative w-full h-full bg-white border border-black col-span-2"></div>
            <div className="relative w-full h-full bg-black text-white flex items-center justify-center border border-black rounded-br-lg">
              Reward
            </div>
          </div>
        </div>
        <img
          src={logoText}
          alt="logotext"
          className="absolute flex items-center justify-center "
        />
      </div>
    </>
  );
};

export default Home;
