"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../homePage/button";
import RadarChart from "./graphs/radarChart";

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

  const [shotChart, setShotChart] = useState(true);
  const [ratingsChart, setRatingsChart] = useState(false);
  const [hustleChart, setHustleChart] = useState(false);
  return (
    <div className="default-card flex flex-col items-center py-8 space-y-3 mt-8">
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
    </div>
  );
};

export default GraphsBox;
