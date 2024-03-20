import React from "react";

interface graphProps {
  percentage: number;
}

interface Props {
  completed: number;
}

/*For right now, we are taking in a percentage as a prop and the 
graph displays the percentage according. Later, we have to calculate this percentage ourselves*/
const StatusProgressRing: React.FC<Props> = ({ completed }) => {
  const radius = 120;
  const stroke = 27;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (completed / 100) * circumference;

  const svgSize = (radius - 27) * 2;
  const viewBoxSize = radius * 2 + stroke * 2;
  const viewBoxOffset = (viewBoxSize - svgSize) / 2;
  const greyLength = circumference * 0.05;

  return (
    <div className="flex flex-col items-center justify-center w-[20vw]">
      <h2 className="font text-cyan-100 text-left text-s mb-0 w-[20vw] px-2">
        Status:
      </h2>
      <div className="flex items-center justify-center">
        <div
          className="relative flex flex-col items-center justify-center m-0 p-0"
          style={{ width: svgSize, height: svgSize }}
        >
          <svg
            height={svgSize}
            width={svgSize}
            viewBox={`0 0 ${viewBoxSize - viewBoxOffset * 2} ${
              viewBoxSize - viewBoxOffset * 2
            }`}
          >
            <circle
              stroke="#AD0303"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={`${circumference} ${circumference}`}
              r={normalizedRadius}
              cx={radius + stroke - viewBoxOffset}
              cy={radius + stroke - viewBoxOffset}
            />
            <circle
              stroke="#1F5C02"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={`${circumference} ${circumference}`}
              style={{ strokeDashoffset }}
              r={normalizedRadius}
              cx={radius + stroke - viewBoxOffset}
              cy={radius + stroke - viewBoxOffset}
            />
            <circle
              stroke="#D3D3D3" // Grey color
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={`${greyLength} ${circumference - greyLength}`}
              r={normalizedRadius}
              cx={radius + stroke - viewBoxOffset}
              cy={radius + stroke - viewBoxOffset}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-lg font-bold text-white text-center">
              {completed}%
            </p>
            <p className="text-center text-sm text-gray-500">Completed</p>
          </div>
        </div>
        <div className="ml-4">
          <div className="flex items-center">
            <span className="h-2 w-2 bg-green-600 rounded-full inline-block mr-2"></span>
            <p className="text-gray-500 text-sm">
              Complete: <span className="font-bold text-white">2196</span>
            </p>
          </div>
          <div className="flex items-center mt-2">
            <span className="h-2 w-2 bg-gray-600 rounded-full inline-block mr-2"></span>
            <p className="text-gray-500 text-sm">
              In Progress: <span className="font-bold text-white">68</span>
            </p>
          </div>
          <div className="flex items-center">
            <span className="h-2 w-2 bg-red-600 rounded-full inline-block mr-2"></span>
            <p className="text-gray-500 text-sm">
              Incomplete: <span className="font-bold text-white">34</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusProgressRing;
