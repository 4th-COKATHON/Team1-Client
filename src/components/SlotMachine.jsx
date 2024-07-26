import React, { useState } from "react";
import RollingArea from "./RollingArea";
import Button from "./Button";

const SlotMachine = ({ onClose }) => {
  const itemContainer = [
    {
      title: "Where",
      content: [
        "남산타워에서",
        "해변에서",
        "박물관에서",
        "공원에서",
        "카페에서",
        "산에서",
      ],
    },
    {
      title: "How",
      content: [
        "귀엽게",
        "진지하게",
        "활발하게",
        "조용하게",
        "우아하게",
        "편안하게",
      ],
    },
    {
      title: "Do",
      content: [
        "사진찍기",
        "산책하기",
        "책읽기",
        "그림그리기",
        "춤추기",
        "노래하기",
      ],
    },
  ];

  const [isRolling, setIsRolling] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  const toggleRolling = () => {
    setIsRolling((prev) => {
      const newState = !prev;
      if (newState) {
        setIsStopped(true);
      } else {
        setIsStopped(false);
      }
      return newState;
    });
  };

  const getButtonType = () => {
    if (isRolling && isStopped) {
      return "next";
    } else if (isRolling) {
      return "stop";
    } else {
      return "start";
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="mb-4">미션을 수행해 볼까요?</div>
      <div className="relative flex flex-col items-center w-[90%] h-[390px] bg-[#4384F9] rounded-lg p-4">
        <div className="flex flex-row justify-center items-center gap-8 w-full h-4 mb-4">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="w-[20px] h-[20px] bg-[#ADCAFF] rounded-full"
            ></div>
          ))}
        </div>
        <div className="bg-[#E9EBF0] flex flex-row justify-between p-2 rounded-2xl w-full gap-2">
          {itemContainer.map((item, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 items-center gap-2 relative"
              style={{ flexBasis: 0 }}
            >
              <div className="flex justify-center items-center w-full h-[32px] rounded-2xl bg-[#D6E7FF]">
                {item.title}
              </div>
              <RollingArea
                content={item.content}
                isRolling={isRolling}
                index={index}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center gap-8 w-full h-4 mt-4">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="w-[20px] h-[20px] bg-[#D6E7FF] rounded-full"
            ></div>
          ))}
        </div>
        <div className="absolute -bottom-6 flex text-[#4384F9] justify-center items-center bg-white w-[80%] h-[60px] rounded-[20px] border border-black">
          미션을 수행해 포인트를 획득하세요
        </div>
      </div>
      <Button
        type={getButtonType()} // Use the dynamic button type
        onClick={toggleRolling}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      />
    </div>
  );
};

export default SlotMachine;
