import React from "react";

interface Props {
  percentage: number;
}

const StatusProgressRing: React.FC<Props> = ({ percentage }) => {
  const radius = 50;
  const stroke = 7;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const svgSize = (radius - 7) * 2;
  const viewBoxSize = radius * 2 + stroke * 2;
  const viewBoxOffset = (viewBoxSize - svgSize) / 2;
  const greyLength = circumference * 0.05;
  var color = "#CE2828";
  if (percentage < 40) {
    color = "#CE2828";
  } else if (percentage < 70) {
    color = "#F4AC3F";
  } else {
    color = "#10B981";
  }

  return (
    <div className="flex flex-col items-center justify-center ">
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
              stroke="#F3F4F6"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={`${circumference} ${circumference}`}
              r={normalizedRadius}
              cx={radius + stroke - viewBoxOffset}
              cy={radius + stroke - viewBoxOffset}
            />
            <circle
              stroke={color}
              fill="transparent"
              strokeWidth={stroke} // Make the stroke half as thick
              strokeDasharray={`${circumference} ${circumference}`}
              style={{ strokeDashoffset }}
              r={normalizedRadius}
              cx={radius + stroke - viewBoxOffset}
              cy={radius + stroke - viewBoxOffset}
              transform={`rotate(-90 ${radius + stroke - viewBoxOffset} ${
                radius + stroke - viewBoxOffset
              })`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p
              className="text-2xl font-bold text-white font-dinCondensed text-center"
              style={{ color: color }}
            >
              {percentage === 0 ? "NA" : `${percentage}%`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusProgressRing;
