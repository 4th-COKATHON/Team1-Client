import React from "react";
import Map from "../components/Map";
import Modal from "../components/Modal";
import SlotMachine from "../components/SlotMachine";

const Home = () => {
  return (
    <div className="w-full h-full relative">
      <Map currentIndex={0}></Map>
      <Modal>
        <SlotMachine></SlotMachine>
      </Modal>
    </div>
  );
};

export default Home;
