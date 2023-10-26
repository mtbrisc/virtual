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

const itemHeight = 48;

export function DemoScratch() {
  /**
   * Building virtualization from scratch
   * 1. Identify outer container (the element that will scroll. could be window, body, or in this case - a div)
   * 2. Height of inner container is the sum of all item heights
   * 3. Add a scroll listener
   * 4. Calculate the visible items
   * 5. Only render the visible items
   */
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    setScrollOffset(event.currentTarget.scrollTop);
  };

  const visibleItems = useMemo(() => {
    const containerHeight = containerRef.current?.clientHeight!;

    // Calculate the start and end indexes based on accumulated height
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

  return (
    <div
      ref={containerRef}
      className="h-full overflow-auto border border-slate-200"
      onScroll={handleScroll}
    >
      <ul
        className="relative"
        style={{
          height: items.length * itemHeight,
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
