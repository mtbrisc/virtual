// @ts-nocheck

"use client";

import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const itemCount = 1000;
const items = new Array(itemCount).fill(0).map((_, i) => ({
  key: i,
  content: (
    <div className="bg-indigo-800 p-2 rounded-md shadow-md mb-2 ring-2 ring-inset ring-indigo-600">
      {i + 1}
    </div>
  ),
}));

export function DemoReactWindow() {
  /**
   * Using library react-window
   */
  return (
    <div className="h-full border border-slate-200">
      <AutoSizer>
        {({ height, width }) => (
          <List height={height} width={width} itemCount={1000} itemSize={48}>
            {({ index, style }) => (
              <div style={style}>{items[index].content}</div>
            )}
          </List>
        )}
      </AutoSizer>
    </div>
  );
}
