import React from "react";
import StatusProgressRing from "./circleGraphs";

export default function PlayerGrade() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font text-cyan-100 text-left text-s mb-0 w-[20vw] px-2">
        Grade:
      </h2>
      <StatusProgressRing completed={40} />
    </div>
  );
}
