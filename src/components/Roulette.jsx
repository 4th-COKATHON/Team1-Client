// import React from "react";
// import { Wheel } from "react-custom-roulette";
// import { useState } from "react";

// const Roulette = () => {
//   const [mustSpin, setMustSpin] = useState(false);

//   const data = [
//     { option: "0", style: { backgroundColor: "green", textColor: "black" } },
//     { option: "1", style: { backgroundColor: "white" } },
//     { option: "2" },
//   ];

//   return <Wheel mustStartSpinning={mustSpin} prizeNumber={3} data={data} />;
// };

// export default Roulette;

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
