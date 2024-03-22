"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../homePage/button";
import RadarChart from "./graphs/radarChart";
import { ShotChart } from "./graphs/shotChart";
const shotData = [
  { x: 29.69, y: 26.18, shotType: "ThreePointMiss" },
  { x: 8.37, y: 6.25, shotType: "TwoPointMake" },
  { x: 18.34, y: 16.65, shotType: "TwoPointMake" },
  { x: 20.36, y: 17.67, shotType: "TwoPointMake" },
  { x: 23.74, y: 6.4, shotType: "TwoPointMake" },
  { x: 24.57, y: 6.71, shotType: "TwoPointMake" },
  { x: 26.52, y: 5.56, shotType: "TwoPointMake" },
  { x: 27.54, y: 5.45, shotType: "TwoPointMake" },
  { x: 13.17, y: 16.19, shotType: "TwoPointMiss" },
  { x: 22.2, y: 5.34, shotType: "TwoPointMiss" },
  { x: 22.4, y: 6.58, shotType: "TwoPointMiss" },
  { x: 22.98, y: 7.77, shotType: "TwoPointMiss" },
  { x: 22.98, y: 5.93, shotType: "TwoPointMiss" },
  { x: 23.11, y: 6.03, shotType: "TwoPointMiss" },
  { x: 23.39, y: 6.47, shotType: "TwoPointMiss" },
  { x: 34.31, y: 5.84, shotType: "TwoPointMiss" },
];
//Props with calculated individual ratings, shot chart URL, and hustle stats i can display
const GraphsBox = () => {
  const data = [
    {
      label: "Inside Scoring",
      value: 43,
    },
    {
      label: "Outside Scoring",
      value: 88,
    },
    {
      label: "Playmaking",
      value: 63,
    },
    {
      label: "Rebounding",
      value: 44,
    },
    {
      label: "Defense",
      value: 71,
    },
  ];
  const hustleData = [
    {
      label: "Deflections",
      value: 20,
    },
    {
      label: "Picks",
      value: 30,
    },
    {
      label: "Dives",
      value: 15,
    },
    {
      label: "Loose Balls",
      value: 25,
    },
    {
      label: "Close Outs",
      value: 35,
    },
    {
      label: "Box Outs",
      value: 40,
    },
  ];
  function hexToRgbA(hex: string, opacity: number) {
    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
        ","
      )},${opacity})`;
    }
    throw new Error("Bad Hex");
  }

  const [shotChart, setShotChart] = useState(false);
  const [ratingsChart, setRatingsChart] = useState(true);
  const [hustleChart, setHustleChart] = useState(false);
  return (
    <div className="graph-card flex flex-col items-center py-8 space-y-3 mt-8">
      <div className=" font-dinCondensed text-brandWhite text-5xl bold">
        Graphs
      </div>
      <div className="h-1 bg-brandGrey w-3/4 rounded-md" />
      <div className="flex space-x-3">
        <Button
          active={hustleChart}
          onClick={() => {
            setHustleChart(true);
            setRatingsChart(false);
            setShotChart(false);
          }}
        >
          Hustle Chart
        </Button>
        <Button
          active={shotChart}
          onClick={() => {
            setShotChart(true);
            setRatingsChart(false);
            setHustleChart(false);
          }}
        >
          Shot Chart
        </Button>
        <Button
          active={ratingsChart}
          onClick={() => {
            setRatingsChart(true);
            setShotChart(false);
            setHustleChart(false);
          }}
        >
          Ratings Chart
        </Button>
      </div>
      {ratingsChart && (
        <RadarChart
          data={data}
          bgColor={hexToRgbA("#CF6C57", 0.9)}
          borderColor={hexToRgbA("#CF6C57", 1)}
        />
      )}
      {hustleChart && (
        <RadarChart
          data={hustleData}
          bgColor={hexToRgbA("#CF6C57", 0.9)}
          borderColor={hexToRgbA("#CF6C57", 1)}
        />
      )}
      {shotChart && (
        <ShotChart data={shotData} width={"500px"} height={"100px"} />
      )}
    </div>
  );
};

export default GraphsBox;
