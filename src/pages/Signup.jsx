import React, { useState, useEffect } from "react";
import Splash from "../components/Splash";
import logo from "../assets/DirectHit.png";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Splash />
  ) : (
    <div className="flex flex-col h-screen items-center justify-center gap-6">
      <img src={logo} alt="logo" className="w-[70px] h-[70px]" />
      <p className="text-2xl font-bold">간편 로그인</p>
      <div className="flex flex-col items-center">
        <p className="text-base">서비스를 편리하게 이용하시려면,</p>
        <p className="text-base">계속 로그인 해주세요!</p>
      </div>
      <input
        type="text"
        placeholder="이메일을 입력하세요"
        className="w-[90%] border border-gray-700 rounded-xl h-[64px] text-xl px-6"
      />
      <div className="flex flex-col items-center">
        <p className="text-xs">이메일을 잊어버리셨나요?</p>
        <button className="text-xs underline underline-offset-1">
          여기클릭
        </button>
      </div>
    </div>
  );
};

export default Signup;
