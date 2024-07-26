import React, { useEffect, useState } from "react";

const SlotMachine = () => {
  const itemContainer = [
    { title: "Where", content: ["남산타워에서", "해변에서", "박물관에서"] },
    { title: "How", content: ["귀엽게", "진지하게", "활발하게"] },
    { title: "Do", content: ["사진찍기", "산책하기", "책읽기"] },
  ];

  const [currentIndex, setCurrentIndex] = useState(
    new Array(itemContainer.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex.map(
          (index, i) => (index + 1) % itemContainer[i].content.length
        )
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div>미션을 수행해 볼까요?</div>
      <div className="relative flex flex-col items-center w-[90%] h-[390px] bg-[#21CD76] rounded-lg p-4">
        <div className="flex flex-row justify-center items-center gap-8 w-full h-4 mb-4">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="w-[20px] h-[20px] bg-[#FFE767] rounded-full border border-black"
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
              <div className="flex justify-center items-center w-full h-[32px] rounded-2xl bg-[#F4653A] border border-black">
                {item.title}
              </div>
              <div className="flex flex-col w-full h-[200px] border border-black rounded-2xl bg-white overflow-hidden relative">
                {item.content.map((contentItem, contentIndex) => (
                  <div
                    key={contentIndex}
                    className={`absolute top-0 left-0 w-full h-full flex justify-center items-center transition-transform duration-500 ease-in-out ${
                      contentIndex === currentIndex[index]
                        ? "transform translate-y-0"
                        : "transform -translate-y-full"
                    }`}
                  >
                    {contentItem}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center gap-8 w-full h-4 mt-4">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="w-[20px] h-[20px] bg-[#FFE767] rounded-full border border-black"
            ></div>
          ))}
        </div>
        <div className="absolute -bottom-6 flex justify-center items-center bg-white w-[80%] h-[60px] rounded-xl border border-black">
          미션을 수행해 포인트를 획득하세요
        </div>
      </div>
      <button className="mt-4">start</button>
    </div>
  );
};

export default SlotMachine;
