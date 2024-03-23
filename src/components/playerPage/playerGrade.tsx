import React from "react";
import StatusProgressRing from "./circleGraphs";
import Arrow from "@/../public/Vector 16.png";
import Image from "next/image";

interface Props {
  coachability: number;
  performance: number;
  intangibles: number;
  grade: number;
}

export default function PlayerGrade(props: Props) {
  const coachability = props.coachability;
  const performance = props.performance;
  const intangibles = props.intangibles;
  const grade = 90;

  return (
    <div className="default-card bg-layerTwoGrey rounded-3xl flex flex-col items-center py-8 h-full">
      {/* Adjust layout to ensure content fits, consider flex-col for stacking if needed */}

      <div className="font-dinCondensed text-brandWhite text-5xl bold mb-4">
        Grade
      </div>
      <div className="h-1 bg-brandGrey w-3/4 rounded-md mb-4" />
      <div className="text-5xl text-brandWhite font-dinCondensed rounded-full border-brandWhite px-2 mb-2 bg-buttonBlue w-20 h-20 flex flex-col text-center justify-center p-2 -mb-5">{grade}</div>
      <div className=" w-4/5 relative translate-y-10">
        {/* values range from 0% to 90% */}
        <div style={{ marginLeft: `${((grade) * .970)}%` }} className="w-4  bg-[#FFFFFF80] flex items-center justify-center ">
          <div className="w-2 h-10 bg-brandWhite" />
        </div>
      </div>
      <div className="grade w-4/5 h-10 mb-10 border-2 border-brandWhite">
        <div className="translate-y-7 flex justify-between w-full text-brandWhite text-xl">

          <div className="-ml-[.21rem] flex-row flex items-end w-10">
            <p className="text-2xl">|</p>0
          </div>

          <p className="text-2xl">|</p>
          <p className="text-2xl">|</p>
          <p className="text-2xl">|</p>

          <div className="-mr-[.3rem] flex-row flex items-end w-10">
            100<p className="text-2xl">|</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between space-x-20 mx-20">
        {" "}
        {/* Adjusted justify-between and added spacing */}
        <div className="flex flex-col items-center">
          {" "}
          {/* Center aligned each progress ring + text */}
          <StatusProgressRing percentage={coachability} />{" "}
          {/* Example size adjustment */}
          <p className="text-white font-dinCondensed text-lg mt-2">
            Coachability
          </p>
        </div>
        <div className="flex flex-col items-center">
          <StatusProgressRing percentage={performance} />{" "}
          {/* Adjust size as needed */}
          <p className="text-white font-dinCondensed text-lg mt-2">
            Performance
          </p>
        </div>
        <div className="flex flex-col items-center">
          <StatusProgressRing percentage={intangibles} />{" "}
          {/* Adjust size as needed */}
          <p className="text-white font-dinCondensed text-lg mt-2">
            Intangibles
          </p>
        </div>
      </div>
    </div>
  );
}
