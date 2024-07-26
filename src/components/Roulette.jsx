import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = [
    { option: "0", style: { backgroundColor: "green", textColor: "black" } },
    { option: "1", style: { backgroundColor: "white" } },
    { option: "2" },
  ];

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => setMustSpin(false)}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
      />
      <button onClick={handleSpinClick}>Spin</button>
    </div>
  );
};

export default Roulette;
