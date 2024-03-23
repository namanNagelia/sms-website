"use client";
import React, { useState } from "react";
import Image from "next/image";
import leftArrowIcon from "@/app/images/icons/Left Arrow.svg";
import swapsIcon from "@/app/images/icons/right arrow.svg";
import rightArrowIcon from "@/app/images/icons/swaps.svg";
import "./stats.css";

interface StatsCardProps {
  seasonStats: any; // Replace 'any' with the type of your season stats
  gameStats: any; // Replace 'any' with the type of your game stats
  archetype: any; // Replace 'any' with the type of your archetype
}

const StatsCard: React.FC<StatsCardProps> = ({
  seasonStats,
  gameStats,
  archetype,
}) => {
  const [mode, setMode] = useState("Season");
  const [gameIndex, setGameIndex] = useState(0);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "Season" ? "Game" : "Season"));
  };

  const incrementGame = () => {
    if (gameIndex < gameStats.length - 1) {
      setGameIndex((prevGame) => prevGame + 1);
    }
  };

  const decrementGame = () => {
    if (gameIndex > 0) {
      setGameIndex((prevGame) => prevGame - 1);
    }
  };

  // Choose the right data based on the mode
  const currentStats =
    mode === "Season" ? seasonStats : gameStats[gameIndex].details;
  const archetypes = archetype;

  return (
    <div className="default-card flex flex-col items-center py-8 space-y-3 mt-8">
      <div className="font-dinCondensed text-brandWhite text-5xl bold">
        Stats
      </div>
      <div className="h-1 bg-brandGrey w-3/4 rounded-md" />
      <div className="text-brandGrey font-dinCondensed text-2xl mb-4">
        Archetype: {archetype}
      </div>
      <div className="flex justify-between px-4">
        <button onClick={toggleMode}>
          <div className="flex">
            <Image
              src={swapsIcon}
              alt="swaps"
              width={20}
              height={20}
              className={mode === "Game" ? "transform rotate-180" : ""}
            />
            <p className="ml-2 font-dinCondensed text-brandWhite hover:text-brandGrey text-lg">
              {mode === "Season" ? "Season" : "Game"}
            </p>
          </div>
        </button>
        {mode === "Game" && (
          <div className={`flex ${mode === "Game" ? "fade-in" : ""} ml-4`}>
            <button onClick={decrementGame}>
              <Image
                src={leftArrowIcon}
                alt="Previous game"
                width={20}
                height={20}
              />
            </button>
            <p className="mx-2 font-dinCondensed text-brandWhite hover:text-brandGrey text-lg">
              Game {gameIndex + 1}: {gameStats[gameIndex].date}
            </p>
            <button onClick={incrementGame}>
              <Image
                src={rightArrowIcon}
                alt="Next game"
                width={20}
                height={20}
              />
            </button>
          </div>
        )}
      </div>
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

export default StatsCard;

// Prop: Player ID
// Carousel:state for season or game
// 	Default is season, will fetch player’s season data from the database and display it
// If press the change season, use effect updates state and refetches for most recent game
// 	State for game will be default at 0 and arrow will change it, updating it and refetching with another use effect
//Add Fade animation
