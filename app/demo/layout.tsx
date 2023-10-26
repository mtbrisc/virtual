"use client";

import { useRouter, usePathname } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

const demoTitles = {
  "/demo/react-window": "Virtualization using library react-window",
  "/demo/tanstack": "Virtualization using library @tanstack/react-virtual",
  "/demo/scratch": "Virtualization from scratch",
};

const demoClasses = {
  "/demo/react-window": "text-indigo-400",
  "/demo/tanstack": "text-emerald-500",
  "/demo/scratch": "text-cyan-500",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col bg-slate-950/80 text-white fixed inset-0">
      <div className="flex items-center justify-center">
        <button className="text-white px-2 py-1 block" onClick={router.back}>
          <BsArrowLeft className="text-white" />
        </button>
        <div className="flex-1">
          Demo:{" "}
          <span className={demoClasses[pathname as keyof typeof demoClasses]}>
            {demoTitles[pathname as keyof typeof demoTitles]}
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-auto relative">{children}</div>
    </div>
  );
}
