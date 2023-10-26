// @ts-nocheck

"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

const itemCount = 1000;
const items = new Array(itemCount).fill(0).map((_, i) => ({
  key: i,
  content: (
    <div className="bg-emerald-800 p-2 rounded-md shadow-md mb-2 ring-2 ring-inset ring-emerald-600">
      {i + 1}
    </div>
  ),
}));

export function DemoTanstack() {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current!,
    estimateSize: () => 48,
    overscan: 2,
  });

  return (
    <div
      ref={parentRef}
      className="h-full overflow-auto border border-slate-200"
    >
      <ul
        className="relative"
        style={{
          height: `${rowVirtualizer.totalSize}px`,
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <li
            className="absolute top-0 left-0 w-full"
            style={{
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
            key={virtualRow.index}
          >
            {items[virtualRow.index].content}
          </li>
        ))}
      </ul>
    </div>
  );
}
