import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import startButtonImage from "../assets/start.png";
import pointerImage from "../assets/pointer.png";

const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

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
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen mx-[16px]">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => setMustSpin(false)}
        textColors={["#000000"]}
        outerBorderColor={["#21CD76"]}
        backgroundColors={["white", "#E9EBF0"]}
        outerBorderWidth={16}
        radiusLineWidth={1}
        radiusLineColor={"black"}
        innerBorderWidth={70}
        innerBorderColor={["#F4653A"]}
        fontSize={22}
        fontWeight={600}
        perpendicularText={true}
        textDistance={70}
        style={{
          width: "102% !important",
        }}
        spinDuration={0.5}
        pointerProps={{
          src: pointerImage,
          style: {
            position: "absolute",
            top: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "41px",
            height: "64px",
          },
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "41.5%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "black",
          fontSize: "25px",
          fontWeight: "bold",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        WHERE?
      </div>
      <button
        onClick={handleSpinClick}
        className="start-button mt-[87px] px-[145px] h-[60px] w-[400px] bg-black rounded-full cursor-pointer shadow-custom"
      >
        <img
          src={startButtonImage}
          alt="Start"
          className="w-[98px] items-center object-contain"
        />
      </button>
    </div>
  );
};

export default Roulette;
