"use client";
import * as D3 from "d3";
import { useState } from "react";

declare let d3: any;

interface ScatterplotProps {
  data: any[];
  width: string;
  height: string;
}
interface DataType {
  player: string;
  score: number;
  time: string;
  shotResult: string;
  playerID: string;
  // include other properties as needed
}

export const ShotChart = (props: ScatterplotProps) => {
  const xScale = D3.scaleLinear().domain([0, 50]).range([500, 0]);
  const yScale = D3.scaleLinear().domain([0, 42]).range([360, 0]);
  const [tooltipData, setTooltipData] = useState<DataType | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const circles = props.data
    ? props.data.map((d, i) => {
        // Check if x and y are not null and are numbers
        if (d.x !== null && !isNaN(d.x) && d.y !== null && !isNaN(d.y)) {
          const color = d.shotType.includes("Miss") ? "none" : "#00A36C";
          const strokeColor = d.shotType.includes("Miss") ? "red" : "#00A36C";

          return (
            <circle
              key={i}
              cx={xScale(d.x)}
              cy={yScale(d.y)}
              r={5} // radius of the circle
              fill={d.shotType.includes("Miss") ? "transparent" : color} // color of the circle
              stroke={strokeColor} // border color of the circle
              pointerEvents="all" // trigger events on the entire circle
              onMouseOver={(e) => {
                setTooltipData(d);
                setTooltipPosition({ x: e.clientX, y: e.clientY });
              }}
              onMouseOut={() => setTooltipData(null)}
            />
          );
        }
        return null; // Return null if x or y is not a number
      })
    : []; // Return an empty array if props.data is undefined

  return (
    <div style={{ position: "relative", width: "50%" }}>
      <svg
        preserveAspectRatio="xMinYMin meet"
        width="90%"
        height="90%"
        viewBox={`0 0 499 361`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="500"
          height="362"
          viewBox="0 0 500 362"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_404_134)">
            <g mask="url(#mask0_404_134)">
              <path
                d="M499.878 0.501953H0.123047V361.499H499.878V0.501953Z"
                fill="#06121A"
              />
              <path
                d="M433.626 291.228C420.358 207.909 344.257 135.523 248.31 137.023C155.76 138.469 80.4397 205.659 66 291.228V361.478H433.626V291.228Z"
                fill="#282828"
                stroke="#696969"
                stroke-width="1.17306"
              />
              <path
                d="M194.396 361.309V191.781H249.814H305.231V361.309H194.396Z"
                fill="#4A4A4A"
                stroke="#696969"
                stroke-width="2.60679"
              />
              <path
                d="M305.231 190.79C305.231 220.204 280.42 244.049 249.814 244.049C219.208 244.049 194.396 220.204 194.396 190.79C194.396 161.376 219.208 137.531 249.814 137.531C280.42 137.531 305.231 161.376 305.231 190.79Z"
                fill="#4A4A4A"
              />
              <path
                d="M305.231 190.79C305.231 220.204 280.42 244.049 249.814 244.049C219.208 244.049 194.396 220.204 194.396 190.79M305.231 190.79C305.231 161.376 280.42 137.531 249.814 137.531C219.208 137.531 194.396 161.376 194.396 190.79M305.231 190.79H194.396"
                stroke="#696969"
                stroke-width="2.60679"
              />
              <path
                d="M220.934 331.553L277.332 332.177"
                stroke="#696969"
                stroke-width="2.60679"
              />
              <path
                d="M250.204 324.803C254.299 324.803 257.619 321.613 257.619 317.677C257.619 313.741 254.299 310.551 250.204 310.551C246.109 310.551 242.789 313.741 242.789 317.677C242.789 321.613 246.109 324.803 250.204 324.803Z"
                stroke="#696969"
                stroke-width="2.60679"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_404_134">
              <rect width="500" height="362" fill="white" />
            </clipPath>
          </defs>
        </svg>

        {circles}
      </svg>
      {tooltipData && (
        <div
          className="absolute bg-white p-2 rounded-xl"
          style={{
            position: "fixed", // Use 'fixed' positioning
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
          }}
        >
          <p className="font-dinCondensed">Player Name: </p>
        </div>
      )}
    </div>
  );
};
