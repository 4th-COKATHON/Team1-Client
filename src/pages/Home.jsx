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
  const [modalSlot, seModalSlot] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setModalRoulette(false);
  };

  const handleOpenModal = () => {
    setModalRoulette(true);
  };

  return (
    <div className="w-full h-full relative">
      <Map currentIndex={currentIndex} onCellClick={handleOpenModal} />
      {modalRoulette && (
        <Modal>
          <Roulette onClose={handleNext} />
        </Modal>
      )}
      {currentIndex === 0 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={logoText} className="w-90 h-90" />
        </div>
      )}
      {currentIndex !== 0 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={seoul} alt="Seoul" className="w-90 h-90" />
        </div>
      )}
      {modalSlot && (
        <Modal>
          <SlotMachine onClose={handleNext} />
        </Modal>
      )}
    </div>
  );
};

export default Home;
