import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Button from "./Button";
import pointerImage from "../assets/pointer.png";
import icon from "../assets/icon.png";

const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [buttonType, setButtonType] = useState("start");
  const [showWheel, setShowWheel] = useState(true);
  const [showText, setShowText] = useState(true);

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
      // 'next' 버튼 클릭 시 원하는 동작을 추가
      // 예: 다른 페이지로 이동
    }
  };

  const handleWheelStop = () => {
    // 룰렛이 멈췄을 때 호출되는 콜백
    console.log("Wheel stopped spinning");
    setButtonType("next");
    setShowWheel(false);
    setShowText(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen mx-[16px]">
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
            top: "41.5%",
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
      <Button
        type={buttonType}
        onClick={buttonType === "start" ? handleSpinClick : handleNextClick}
      />
    </div>
  );
};

export default Roulette;
