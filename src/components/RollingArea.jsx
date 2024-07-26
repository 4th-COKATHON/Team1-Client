import React, { useEffect, useState } from "react";

const RollingArea = ({ content, isRolling, index }) => {
  const [currentIndex, setCurrentIndex] = useState({
    prev: 0,
    current: 0,
    next: 1,
  });

  useEffect(() => {
    const contentLength = content.length;
    const intervalDelay = 200; // 200ms마다 롤링 업데이트
    const initialDelay = index * 500; // 각 인덱스에 대해 1초씩 딜레이

    const interval = setInterval(() => {
      if (isRolling) {
        setCurrentIndex((indexes) => {
          const newCurrent = (indexes.current + 1) % contentLength;
          const newNext = (newCurrent + 1) % contentLength;
          return {
            prev: indexes.current,
            current: newCurrent,
            next: newNext,
          };
        });
      }
    }, intervalDelay);

    const timeout = setTimeout(() => {
      if (isRolling) {
        setCurrentIndex((indexes) => {
          const newCurrent = (indexes.current + 1) % contentLength;
          const newNext = (newCurrent + 1) % contentLength;
          return {
            prev: indexes.current,
            current: newCurrent,
            next: newNext,
          };
        });
      }
    }, initialDelay);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isRolling]);

  return (
    <div className="flex flex-col w-full h-[200px] border border-black rounded-2xl bg-white overflow-hidden relative">
      {content.map((contentItem, contentIndex) => (
        <div
          key={contentIndex}
          className={`absolute top-0 left-0 w-full h-full flex justify-center items-center transition-transform duration-500 ease-in-out ${
            contentIndex === currentIndex.prev
              ? "transform translate-y-full"
              : contentIndex === currentIndex.current
              ? "transform translate-y-0"
              : contentIndex === currentIndex.next
              ? "transform -translate-y-full"
              : "hidden"
          }`}
        >
          {contentItem}
        </div>
      ))}
    </div>
  );
};

export default RollingArea;
