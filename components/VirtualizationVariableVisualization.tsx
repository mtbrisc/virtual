"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSpring, animated } from "react-spring";
const itemHeights = [
  25, 150, 75, 100, 50, 25, 35, 25, 150, 200, 75, 100, 50, 25, 150, 75, 100, 50,
  25, 35, 25, 150, 200, 75, 100, 50,
];
const buffer = 30;

const anim = {
  from: { y: 0 },
  to: { y: -600 },
  loop: { reverse: true },
  config: { mass: 0.5, tension: 360, friction: 220 },
};

const VirtualizationVariableVisualization: React.FC = () => {
  const [{ y }, api] = useSpring(() => anim);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const calculateVisibleItems = useCallback(() => {
    const scrollTop = Math.abs(y.get()) - 20; // Get the current scroll position
    const containerHeight = outerRef.current?.clientHeight || 0;

    // Calculate the start and end indexes based on accumulated heights
    let cumulativeHeight = 0;
    let startIndex = -1;
    let endIndex = -1;

    for (let i = 0; i < itemHeights.length; i++) {
      cumulativeHeight += itemHeights[i];

      if (cumulativeHeight > scrollTop - buffer && startIndex === -1) {
        startIndex = i;
      }

      if (cumulativeHeight >= scrollTop + buffer + containerHeight) {
        endIndex = i;
        break;
      }
    }

    const visibleItems: number[] = [];
    for (let i = startIndex; i <= endIndex; i++) {
      visibleItems.push(i);
    }

    return visibleItems;
  }, [y]);

  const [visibleItems, setVisibleItems] = useState<number[]>(
    calculateVisibleItems()
  );

  useEffect(() => {
    const updateVisibleItems = () => {
      setVisibleItems(calculateVisibleItems());
    };

    const interval = setInterval(updateVisibleItems, 100); // Update every 100ms

    return () => {
      clearInterval(interval);
    };
  }, [calculateVisibleItems]);

  useEffect(() => {
    api.start(anim);
  }, [api]);

  return (
    <div
      ref={outerRef}
      className="overflow-visible z-10 relative h-64 w-64 mx-auto"
    >
      <animated.div
        className="absolute top-0 left-0 w-full space-y-2 will-change-transform"
        style={{
          transform: y.to((y) => `translateY(${y}px)`),
        }}
        ref={innerRef}
      >
        {itemHeights.map((height, index) => (
          <div
            key={index}
            style={{ height: height }}
            className={`${
              visibleItems.includes(index)
                ? "bg-sky-700 border-sky-500"
                : "bg-sky-700/0 border-dashed border-slate-700"
            } border-2 rounded-md flex items-center justify-center transition-all duration-200`}
          >
            {index + 1}
          </div>
        ))}
      </animated.div>
      <div className="absolute -inset-4 bg-purple-500/10 -z-10" />
      <div className="absolute -inset-4 border-2 border-indigo-500" />
      <div className="absolute text-4xl text-center left-full top-1/2 w-64 ml-6 text-indigo-500">
        Visible Area
      </div>
      <div className="absolute text-base left-full top-full w-64 text-center ml-6 mt-32 text-slate-500">
        Items before or after visible area are not mounted in the DOM
      </div>
    </div>
  );
};

export default VirtualizationVariableVisualization;
