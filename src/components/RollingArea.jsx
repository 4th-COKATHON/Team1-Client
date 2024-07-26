import React, { useEffect, useState } from "react";

const RollingArea = ({ content, isRolling, index }) => {
  const [currentIndex, setCurrentIndex] = useState({
    prev: 0,
    current: 0,
    next: 1,
  });

  const [isStarted, setIsStarted] = useState(false);
  useEffect(() => {
    const contentLength = content.length;
    const intervalDelay = 200; // 200ms마다 롤링 업데이트
    const initialDelay = index * 500; // 각 인덱스에 대해 1초씩 딜레이

    // 초기 딜레이 후 롤링을 시작합니다.
    const timeout = setTimeout(() => {
      if (isRolling) {
        setIsStarted(true); // 롤링을 시작하도록 상태를 업데이트합니다.
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

    // `isStarted`가 true로 변경될 때만 interval을 설정합니다.
    const interval = isStarted
      ? setInterval(() => {
          console.log(index);
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
        }, intervalDelay)
      : null;

    // 컴포넌트 언마운트 시 interval 및 timeout을 클리어합니다.
    return () => {
      if (interval) clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isRolling, isStarted]); // `isRolling`과 `isStarted` 의존성 추가

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
