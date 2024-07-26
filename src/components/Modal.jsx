import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="absolute flex items-center justify-center h-screen w-full z-10 top-0 left-0 bg-black bg-opacity-70">
      {children}
    </div>
  );
};

export default Modal;
