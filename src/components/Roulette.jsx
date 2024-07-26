import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Button from "./Button";
import pointerImage from "../assets/pointer.png";
import icon from "../assets/icon.png";

const Roulette = ({ onClose }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [buttonType, setButtonType] = useState("start");
  const [showWheel, setShowWheel] = useState(true);
  const [showText, setShowText] = useState(true);
  const [text, setText] = useState("우리 어디로 여행을 떠날까요?");

  const data = [
    { option: "서울" },
    { option: "전주" },
    { option: "제주" },
    { option: "광주" },
    { option: "부산" },
    { option: "대구" },
    { option: "대전" },
    { option: "인천" },
  ];

  const handleSpinClick = () => {
    if (buttonType === "start") {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setButtonType("stop");
    }
  };

  const handleNextClick = () => {
    if (buttonType === "next") {
      onClose();
    }
  };

  // 룰렛 멈추면
  const handleWheelStop = () => {
    setButtonType("next");
    setShowWheel(false);
    setShowText(false);
    const winningOption = data[prizeNumber - 1].option;
    setText(`${winningOption} 당첨!`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen mx-[16px]">
      <div className="absolute top-0 w-full h-[124px] bg-[#D6E7FF] flex items-center justify-center">
        <h1 className="text-[20px] text-[#4384F9] font-semibold mt-[50px]">
          {text}
        </h1>
      </div>
      <div className="mt-[90px]">
        {showWheel && (
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={handleWheelStop}
            textColors={["#000000"]}
            outerBorderColor={["#ADCAFF"]}
            backgroundColors={["white", "#EAF0FF"]}
            outerBorderWidth={16}
            radiusLineWidth={1}
            radiusLineColor={"white"}
            innerBorderWidth={70}
            innerBorderColor={["#4384F9"]}
            fontSize={22}
            fontWeight={600}
            perpendicularText={true}
            textDistance={70}
            spinDuration={0.5}
            pointerProps={{
              src: pointerImage,
              style: {
                position: "absolute",
                top: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "48px",
                height: "64px",
              },
            }}
          />
        )}
        {!showWheel && !showText && (
          <div className="mt-[30px]">
            <img src={icon} className="flex w-[316px] h-[316px]" />
          </div>
        )}
        {showText && (
          <div
            style={{
              position: "absolute",
              top: "46.8%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "center",
              zIndex: 10,
            }}
          >
            WHERE?
          </div>
        )}
      </div>
      <Button
        type={buttonType}
        onClick={buttonType === "start" ? handleSpinClick : handleNextClick}
      />
    </div>
  );
};

export default Roulette;
