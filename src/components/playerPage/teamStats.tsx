"use client";
import React, { useState } from "react";
import Image from "next/image";
import leftArrowIcon from "@/app/images/icons/Left Arrow.svg";
import swapsIcon from "@/app/images/icons/right arrow.svg";
import rightArrowIcon from "@/app/images/icons/swaps.svg";
import "./stats.css";

interface StatsCardProps {
  seasonStats: any; // Replace 'any' with the type of your season stats
}

const TeamStatsCard: React.FC<StatsCardProps> = ({ seasonStats }) => {
  // Choose the right data based on the mode
  const currentStats = seasonStats.stats;

  return (
    <div className="default-card flex flex-col items-center py-8 space-y-3 mt-8">
      <div className="font-dinCondensed text-brandWhite text-5xl bold">
        Stats
      </div>
      <div className="h-1 bg-brandGrey w-3/4 rounded-md" />

      <div className="grid grid-cols-2 w-full gap-8 p-8 font-dinCondensed">
        {Object.keys(currentStats).length > 0 ? (
          Object.entries(currentStats).map(([key, value]) => (
            <div key={key} className="w-full flex flex-row text-3xl">
              <div className="text-brandGrey mr-auto px-2">{key}</div>
              <div className="text-brandWhite">{String(value)}</div>
            </div>
          ))
        ) : (
          <div className="w-full flex justify-center items-center text-3xl text-brandGrey">
            No stats available
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamStatsCard;

// Prop: Player ID
// Carousel:state for season or game
// 	Default is season, will fetch player’s season data from the database and display it
// If press the change season, use effect updates state and refetches for most recent game
// 	State for game will be default at 0 and arrow will change it, updating it and refetching with another use effect
//Add Fade animation
