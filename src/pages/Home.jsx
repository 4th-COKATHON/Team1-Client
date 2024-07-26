import React from "react";

const Home = () => {
  return (
    <div className="bg-red-200 w-full h-screen flex justify-center items-center p-3">
      <div className="w-[95%] h-[90%]">
        <div className="relative w-full h-full grid grid-cols-5 grid-rows-10 gap-3">
          {/* Row 1 */}
          <div className="relative w-full h-full bg-white rounded-tl-lg"></div>
          <div className="relative w-full h-full bg-white col-span-3"></div>
          <div className="relative w-full h-full bg-white rounded-tr-lg"></div>

          {/* Row 2 */}
          <div className="relative w-full h-full bg-white"></div>
          <div className="relative w-full h-full col-span-3"></div>
          <div className="relative w-full h-full bg-white row-span-3"></div>

          {/* Row 3 */}
          <div className="relative w-full h-full bg-white row-span-3"></div>
          <div className="relative w-full h-full col-span-3"></div>
          <div className="relative w-full h-full col-span-3"></div>
          <div className="relative w-full h-full col-span-3"></div>
          <div className="relative w-full h-full bg-white"></div>

          {/* Row 5 */}
          <div className="relative w-full h-full bg-white"></div>
          <div className="relative w-full h-full col-span-3"></div>
          <div className="relative w-full h-full bg-white"></div>

          {/* Row 6 */}
          <div className="relative w-full h-full bg-white row-span-3"></div>
          <div className="relative w-full h-full col-span-3"></div>
          <div className="relative w-full h-full bg-white row-span-3"></div>
          <div className="relative w-full h-full col-span-3"></div>
          <div className="relative w-full h-full col-span-3"></div>

          {/* Row 10 */}
          <div className="relative w-full h-full bg-white rounded-bl-lg"></div>
          <div className="relative w-full h-full bg-white"></div>
          <div className="relative w-full h-full bg-white col-span-2"></div>
          <div className="relative w-full h-full bg-white rounded-br-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
