import React from "react";

const Button = ({ type, onClick }) => {
  let buttonClasses =
    "mt-[87px] px-[145px] h-[60px] w-[400px] rounded-full shadow-custom border";
  let text = "";

  switch (type) {
    case "start":
      buttonClasses +=
        " bg-[#4384F9] border-white text-white text-[20px] font-bold cursor-pointer";
      text = "START";
      break;
    case "stop":
      buttonClasses +=
        " bg-[#909090] border-white text-white text-[20px] font-bold cursor-default";
      text = "START";
      break;
    case "next":
      buttonClasses +=
        " bg-[#4384F9] border-white text-white text-[20px] font-bold cursor-pointer";
      text = "NEXT";
      break;
  }

  return (
    <div>
      <button className={buttonClasses} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
