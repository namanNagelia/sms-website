"use client";
import * as d3 from "d3";
import { useState } from "react";
import { bin } from "d3-array";

interface ScatterplotProps {
  data: any[];
  width: string;
  height: string;
  teamID: number;
}
interface DataType {
  player: string;
  shotResult: string;
  playerID: string;
  // include other properties as needed
}

const PlayerShotChart = (props: ScatterplotProps) => {
  const width = 500;
  const height = 470;
  const xScale = d3.scaleLinear().domain([-250, 260]).range([480, 0]);
  const yScale = d3.scaleLinear().domain([-50, 420]).range([460, 0]);
  const [tooltipData, setTooltipData] = useState<any>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const data: any = props.data;
  const circleData = data.data;
  const teamID = props.teamID;
  console.log("teamID:");
  console.log(teamID);
  const team = teamsData["teams"].find((team: any) => team.id === props.teamID);
  const teamColor = team ? team.primary_color : "Blue"; // default to black if team is not found

  // Make the color lighter and more transparent
  const newColor = chroma(teamColor).brighten(0.3).alpha(0.8).css();
  const [hoveredCircle, setHoveredCircle] = useState(null);
  const circles = circleData.map((d: any, i: any) => {
    const hoveredData =
      hoveredCircle !== null ? circleData[hoveredCircle] : null;
    const isNearby =
      hoveredData &&
      Math.hypot(d.LOC_X - hoveredData.LOC_X, d.LOC_Y - hoveredData.LOC_Y) < 50;
    const isHovered = hoveredCircle === i || isNearby;
    const fill = d.EVENT_TYPE === "Made Shot" ? newColor : "#00000000";
    const stroke = newColor;
    const nearbyShots = circleData.filter(
      (d: any) =>
        hoveredData &&
        Math.hypot(d.LOC_X - hoveredData.LOC_X, d.LOC_Y - hoveredData.LOC_Y) <
          50
    );
    const madeShots = nearbyShots.filter(
      (d: any) => d.EVENT_TYPE === "Made Shot"
    ).length;
    const totalShots = nearbyShots.length;
    const averageMadeShots =
      totalShots > 0 ? ((madeShots / totalShots) * 100).toFixed(2) : 0;

    return (
      <circle
        key={i}
        cx={xScale(d.LOC_X)}
        cy={yScale(d.LOC_Y) - 88}
        r={5} // radius of circle
        pointerEvents="all" // trigger events on the entire circle
        onMouseOver={(e) => {
          if (totalShots !== 0) {
            setTooltipData(averageMadeShots);
            setTooltipPosition({ x: e.clientX, y: e.clientY });
          }
        }}
        onMouseOut={() => setTooltipData(null)}
        style={{
          fill: isHovered ? chroma(fill).darken(0.5).css() : fill,
          stroke: isHovered ? chroma(stroke).darken(0.5).css() : stroke,
          opacity: isHovered ? 0.5 : 1,
        }}
        onMouseEnter={() => setHoveredCircle(i)}
        onMouseLeave={() => setHoveredCircle(null)}
      />
    );
  });

  return (
    <div className="w-[499px] h-[361px]">
      <svg
        preserveAspectRatio="xMinYMin meet"
        width="90%"
        height="90%"
        viewBox={`0 0 499 361`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="499"
          height="361"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.123047"
            y="0.5"
            width="498.755"
            height="360"
            fill="#06121A"
          />
          <path
            d="M446.159 275.794C446.159 167.286 358.222 94.7754 249.501 94.7754C140.781 94.7754 52.8438 167.286 52.8438 275.794V359.481H446.159V275.794Z"
            fill="#282828"
            stroke="#696969"
            strokeWidth="1.9493"
          />
          <path
            d="M187.522 359.526V203.936H311.568V359.526H187.522Z"
            fill="#4A4A4A"
            stroke="#696969"
            strokeWidth="1.9493"
          />
          <circle
            cx="249.5"
            cy="202.917"
            r="49.84"
            fill="#4A4A4A"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M200.015 359.526V203.936H299.03V359.526H200.015Z"
            fill="#4A4A4A"
            stroke="#696969"
            strokeWidth="1.9493"
          />
          <path
            d="M299.075 202.961C299.075 230.805 276.88 253.377 249.501 253.377C222.122 253.377 199.927 230.805 199.927 202.961"
            stroke="#696969"
            strokeWidth="0.974649"
            strokeDasharray="3.9 3.9"
          />
          <path
            d="M218.8 334.185V322.908C218.8 305.971 232.545 294.667 249.501 294.667C266.457 294.667 280.203 305.971 280.203 322.908V334.185"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M225.534 333.564H273.558"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <circle
            cx="249.546"
            cy="327.185"
            r="5.75929"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M177.244 246.29H186.548"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M312.543 246.29H321.846"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M312.543 281.731H321.846"
            stroke="#696969"
            strokeWidth="1.9493"
          />
          <path
            d="M177.244 301.046H186.548"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M312.543 301.047H321.846"
            stroke="#696969"
            strokeWidth="1.24046"
          />
          <path
            d="M177.244 307.958H186.548"
            stroke="#696969"
            strokeWidth="1.9493"
          />
          <path
            d="M312.543 307.958H321.846"
            stroke="#696969"
            strokeWidth="1.9493"
          />
        </svg>
        {circles}
      </svg>
      {tooltipData && tooltipData !== 0 && (
        <div
          className="absolute bg-layerTwoGray p-1 rounded-xl"
          style={{
            position: "fixed", // Use 'fixed' positioning
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
          }}
        >
          <p className="font-eesti text-sm">Average Shot%: {tooltipData}</p>
        </div>
      )}
    </div>
  );
};

export default PlayerShotChart;
