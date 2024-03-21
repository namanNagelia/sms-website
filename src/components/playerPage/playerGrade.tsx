import React from "react";
import StatusProgressRing from "./circleGraphs";

interface Props {
  coachability: number;
  performance: number;
  intangibles: number;
}

export default function PlayerGrade(props: Props) {
  const coachability = props.coachability;
  const performance = props.performance;
  const intangibles = props.intangibles;

  return (
    <div className="default-card bg-layerTwoGrey rounded-3xl flex flex-col justify-end p-4">
      {/* Adjust layout to ensure content fits, consider flex-col for stacking if needed */}
      <div className="flex justify-between space-x-3 mx-20">
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
