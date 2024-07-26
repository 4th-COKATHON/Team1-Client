import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="absolute flex items-center justify-center h-screen w-full z-10 bg-black top-0 left-0">
      {children}
    </div>
  );
};

export default Modal;
