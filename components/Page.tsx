"use client";

import { ReactNode } from "react";
import { Slide } from "spectacle";

type SlideProps = {
  className?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundOpacity?: number;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  backgroundSize?: string;
  children: ReactNode;
  padding?: string | number;
  textColor?: string;
};

export function Page(props: SlideProps) {
  return (
    <Slide
      {...props}
      className={["!bg-transparent", props.className ?? ""].join(" ")}
    />
  );
}
