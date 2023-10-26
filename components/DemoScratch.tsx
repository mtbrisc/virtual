// @ts-nocheck

"use client";

import { useMemo, useRef, useState } from "react";

const itemCount = 1000;
const items = new Array(itemCount).fill(0).map((_, i) => ({
  key: i,
  content: (
    <div className="bg-cyan-800 p-2 rounded-md shadow-md mb-2 ring-2 ring-inset ring-cyan-600">
      {i + 1}
    </div>
  ),
}));

// all the same height - could be a static value if known ahead, could be calculated or dynamic at runtime
const itemHeight = 48;

export function DemoScratch() {
  const containerRef = useRef<HTMLDivElement>(null);

  const virtualHeight = items.length * itemHeight;
  const [scrollOffset, setScrollOffset] = useState(0);

  const visibleItems = useMemo(() => {
    const containerHeight = containerRef.current?.clientHeight!;

    // Calculate the start and end indexes based on accumulated heights
    let cumulativeHeight = 0;

    // Default to entire list
    let startIndex = 0;
    let endIndex = items.length - 1;

    for (let i = 0; i < items.length; i++) {
      cumulativeHeight += itemHeight;

      if (cumulativeHeight > scrollOffset && startIndex === 0) {
        startIndex = i;
      }

      if (cumulativeHeight >= scrollOffset + containerHeight) {
        endIndex = i;
        break; // we don't need to continue, we've found the end
      }
    }
    startIndex -= 2; // show a few items before to avoid flickering with fast scrolling
    endIndex += 2; // show a few items after to avoid flickering with fast scrolling

    const itemsToRender = [];
    for (let i = startIndex; i <= endIndex; i++) {
      if (items[i]) {
        itemsToRender.push({
          ...items[i],
          offset: i * itemHeight,
        });
      }
    }

    return itemsToRender;
  }, [scrollOffset]);

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    setScrollOffset(event.currentTarget.scrollTop);
  };

  return (
    <div
      ref={containerRef}
      className="h-full overflow-auto border border-slate-200"
      onScroll={handleScroll}
    >
      <ul
        className="relative"
        style={{
          height: virtualHeight,
        }}
      >
        {visibleItems.map(({ key, offset, content }) => (
          <li
            key={key}
            className="absolute top-0 left-0 w-full"
            style={{
              transform: `translateY(${offset}px)`,
            }}
          >
            {content}
          </li>
        ))}
      </ul>
    </div>
  );
}
