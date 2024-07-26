// import React, { useState } from "react";
// import Map from "../components/Map";
// import Modal from "../components/Modal";
// import Roulette from "../components/Roulette";
// import seoul from "../assets/seoul.png";
// import logoText from "../assets/LogoText.png";
// import SlotMachine from "../components/SlotMachine";

// const Home = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [modalRoulette, setModalRoulette] = useState(false);
//   const [modalSlot, seModalSlot] = useState(false);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => prevIndex + 1);
//     switch (currendIndex) {
//       case 1:
//         setModalRoulette(false);
//         break;
//       case 2:
//         setModalSlot(false);
//     }
//   };

//   const handleOpenModal = () => {
//     switch (currendIndex) {
//       case 0:
//         setModalRoulette(true);
//         break;
//       case 1:
//         setModalSlot(true);
//     }
//   };

//   return (
//     <div className="w-full h-full relative">
//       <Map currentIndex={currentIndex} onCellClick={handleOpenModal} />
//       {modalRoulette && (
//         <Modal>
//           <Roulette onClose={handleNext} />
//         </Modal>
//       )}
//       {currentIndex === 0 && (
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <img src={logoText} className="w-90 h-90" />
//         </div>
//       )}
//       {currentIndex !== 0 && (
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <img src={seoul} alt="Seoul" className="w-90 h-90" />
//         </div>
//       )}
//       {modalSlot && (
//         <Modal>
//           <SlotMachine onClose={handleNext} />
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import Map from "../components/Map";
import Modal from "../components/Modal";
import Roulette from "../components/Roulette";
import seoul from "../assets/seoul.png";
import logoText from "../assets/LogoText.png";
import SlotMachine from "../components/SlotMachine";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalRoulette, setModalRoulette] = useState(false);
  const [modalSlot, setModalSlot] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex === 1) {
        setModalRoulette(false);
      } else if (newIndex === 2) {
        setModalSlot(false);
      }
      return newIndex;
    });
  };

  const handleOpenModal = () => {
    if (currentIndex === 0) {
      setModalRoulette(true);
    } else if (currentIndex === 1) {
      setModalSlot(true);
    }
  };

  return (
    <div className="w-full h-full relative">
      <Map currentIndex={currentIndex} onCellClick={handleOpenModal} />
      {modalRoulette && (
        <Modal>
          <Roulette onClose={handleNext} />
        </Modal>
      )}
      {modalSlot && (
        <Modal>
          <SlotMachine onClose={handleNext} />
        </Modal>
      )}
      {currentIndex === 0 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={logoText} className="w-90 h-90" alt="Logo Text" />
        </div>
      )}
      {currentIndex !== 0 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={seoul} alt="Seoul" className="w-90 h-90" />
        </div>
      )}
    </div>
  );
};

export default Home;
