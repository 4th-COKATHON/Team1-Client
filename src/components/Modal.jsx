import React from "react";

/**
 * 상위 요소에 "w-full h-full relative" 부여 필요
 * @returns
 */
const Modal = ({ children }) => {
  return (
    <div className="absolute flex items-center justify-center h-screen w-full z-10 bg-black">
      {children}
    </div>
  );
};

export default Modal;
