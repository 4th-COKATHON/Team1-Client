import React from "react";
import logo from "../assets/DirectHit.png";
import logoText from "../assets/SplashLogoText.png";

const Splash = () => {
  return (
    <div className="bg-[#34D37F] h-screen flex items-center justify-center">
      <div className="flex gap-[15px] items-center mx-[70px] w-[390px]">
        <img src={logo} alt="logo" className="w-[70px] h-[70px]" />
        <div className="flex flex-col items-center justify-center">
          <img src={logoText} className="w-[90%] h-[40px]" />
          <h1 className="mt-[6px] text-[17px] font-normal text-white">
            룰렛으로 떠나는 랜덤 여행
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Splash;
