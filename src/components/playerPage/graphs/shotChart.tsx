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

export const ScatterPlot2 = (props: ScatterplotProps) => {
  const width = 500;
  const height = 470;
  const xScale = D3.scaleLinear().domain([0, 100]).range([500, 0]);
  const yScale = D3.scaleLinear().domain([0, 100]).range([0, 360]);
  const [tooltipData, setTooltipData] = useState<DataType | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const circles = props.data
    ? props.data.map((d, i) => {
        // Check if x and y are not null and are numbers
        if (d.x !== null && !isNaN(d.x) && d.y !== null && !isNaN(d.y)) {
          const color = d.action.includes("Missed") ? "none" : "#00A36C";
          const strokeColor = d.action.includes("Missed") ? "red" : "#00A36C";

          return (
            <circle
              key={i}
              cx={xScale(d.x)}
              cy={yScale(d.y)}
              r={5} // radius of the circle
              fill={d.action.includes("Missed") ? "transparent" : color} // color of the circle
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
    <div style={{ position: "relative", width: "100%" }}>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 499 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_342_349)">
          <path d="M498.755 0H0V359.003H498.755V0Z" fill="#06121A" />
          <path
            d="M46.7904 29.8449C107.458 29.8449 148 97.8475 148 181.923C148 265.997 107.458 334 46.7904 334H-9.75888e-08L-9.75888e-08 29.8449H46.7904Z"
            fill="#282828"
            stroke="#696969"
            strokeWidth="1.9493"
          />
          <path
            d="M-2.15329e-06 221.313L97 221.313L97 145.524H-2.15329e-06L-2.15329e-06 221.313Z"
            fill="#4A4A4A"
            stroke="#696969"
            strokeWidth="1.9493"
          />
          <path
            d="M66 183.418C66 165.794 80.103 151.507 97.5 151.507C114.897 151.507 129 165.794 129 183.418C129 201.042 114.897 215.33 97.5 215.33C80.103 215.33 66 201.042 66 183.418Z"
            fill="#4A4A4A"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M-2.15329e-06 214.333L97 214.333L97 151.507H-2.15329e-06L-2.15329e-06 214.333Z"
            fill="#4A4A4A"
            stroke="#696969"
            strokeWidth="1.9493"
          />
          <path
            d="M97 151.507C79.8792 151.507 66 165.571 66 182.92C66 200.269 79.8792 214.333 97 214.333"
            stroke="#696969"
            strokeWidth="0.974649"
            strokeDasharray="3.9 3.9"
          />
          <path
            d="M15 202.366H22.1341C32.8488 202.366 40 193.883 40 183.419C40 172.954 32.8488 164.471 22.1341 164.471H15"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M15 197.379L15 169.457"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M17 182.92C17 180.992 18.3431 179.429 20 179.429C21.6569 179.429 23 180.992 23 182.92C23 184.847 21.6569 186.41 20 186.41C18.3431 186.41 17 184.847 17 182.92Z"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M70 228.294V221.313"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M70 143.529V138.543"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path d="M49 143.529V138.543" stroke="#696969" strokeWidth="1.9493" />
          <path
            d="M37 228.294V221.313"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M37 143.529V138.543"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path d="M32 228.294V221.313" stroke="#696969" strokeWidth="1.9493" />
          <path d="M32 143.529V138.543" stroke="#696969" strokeWidth="1.9493" />
          <path
            d="M452.21 29.8449C391.542 29.8449 351 97.8475 351 181.923C351 265.997 391.542 334 452.21 334H499L499 29.8449H452.21Z"
            fill="#282828"
            stroke="#696969"
            strokeWidth="1.9493"
          />
          <path
            d="M499 221.313L402 221.313V145.524H499V221.313Z"
            fill="#4A4A4A"
            stroke="#696969"
            strokeWidth="1.9493"
          />
          <path
            d="M433 183.418C433 165.794 418.897 151.507 401.5 151.507C384.103 151.507 370 165.794 370 183.418C370 201.042 384.103 215.33 401.5 215.33C418.897 215.33 433 201.042 433 183.418Z"
            fill="#4A4A4A"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M499 214.333L402 214.333V151.507H499V214.333Z"
            fill="#4A4A4A"
            stroke="#696969"
            strokeWidth="1.9493"
          />
          <path
            d="M402 151.507C419.121 151.507 433 165.571 433 182.92C433 200.269 419.121 214.333 402 214.333"
            stroke="#696969"
            strokeWidth="0.974649"
            strokeDasharray="3.9 3.9"
          />
          <path
            d="M484 202.366H476.866C466.151 202.366 459 193.883 459 183.419C459 172.954 466.151 164.471 476.866 164.471H484"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M484 197.379V169.457"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M482 182.92C482 180.992 480.657 179.429 479 179.429C477.343 179.429 476 180.992 476 182.92C476 184.847 477.343 186.41 479 186.41C480.657 186.41 482 184.847 482 182.92Z"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M429 228.294V221.313"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M429 143.529V138.543"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M450 143.529V138.543"
            stroke="#696969"
            strokeWidth="1.9493"
          />
          <path
            d="M462 228.294V221.313"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M462 143.529V138.543"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M467 228.294V221.313"
            stroke="#696969"
            strokeWidth="1.9493"
          />
          <path
            d="M467 143.529V138.543"
            stroke="#696969"
            strokeWidth="1.9493"
          />
          <line
            x1="250"
            y1="4.37114e-08"
            x2="250"
            y2="360"
            stroke="#696969"
            strokeWidth="2"
          />
          <circle
            cx="249.5"
            cy="179.5"
            r="13.5"
            stroke="#696969"
            strokeWidth="2"
          />
          <circle
            cx="249.5"
            cy="179.5"
            r="39.5"
            stroke="#696969"
            strokeWidth="2"
          />
          {circles}
        </g>
        <defs>
          <clipPath id="clip0_342_349">
            <rect width="499" height="360" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {tooltipData && (
        <div
          className="absolute bg-layerTwoGray p-2 rounded-xl"
          style={{
            position: "fixed", // Use 'fixed' positioning
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
          }}
        >
          <p className="font-eesti">Player Name: {tooltipData.player}</p>
          <p className="font-eesti">Score: {tooltipData.score}</p>
          <p className="font-eesti"> Time: {tooltipData.time}</p>
          <p className="font-eesti">Shot Result: {tooltipData.shotResult}</p>
        </div>
      )}
    </div>
  );
};
