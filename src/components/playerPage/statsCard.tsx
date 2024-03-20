"use client";
import React from "react";
import { useState, useEffect } from "react";
import leftArrow from "@/app/images/icons/Left Arrow.svg";
import swaps from "@/app/images/icons/right arrow.svg";
import rightArrow from "@/app/images/icons/swaps.svg";
import Image from "next/image";
import "./stats.css";
// Prop: Player ID
// Carousel:state for season or game
// 	Default is season, will fetch player’s season data from the database and display it
// If press the change season, use effect updates state and refetches for most recent game
// 	State for game will be default at 0 and arrow will change it, updating it and refetching with another use effect
//Add Fade animation
const StatsCard = () => {
  const [mode, setMode] = useState("Season");
  console.log(mode);
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "Season" ? "Game" : "Season"));
    console.log(mode);
  };
  const [game, setGame] = useState(0);
  const incrementGame = () => {
    setGame((prevGame) => prevGame + 1);
  };

  const decrementGame = () => {
    setGame((prevGame) => prevGame - 1);
  };

  return (
    <div className="default-card flex flex-col items-center py-8 space-y-3 mt-8">
      <div className=" font-dinCondensed text-brandWhite text-5xl bold">
        Stats
      </div>
      <div className="h-1 bg-brandGrey w-3/4 rounded-md" />
      <div className="text-brandGrey font-dinCondensed text-2xl mb-4">
        Archetype: Slasher
      </div>
      <div className="flex justify-between">
        <button onClick={toggleMode}>
          <div className="flex">
            <Image
              src={swaps}
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
          <div className={`flex ml-5 ${mode === "Game" ? "fade-in" : ""}`}>
            <button onClick={decrementGame}>
              <Image
                src={leftArrow}
                alt="Previous game"
                width={20}
                height={20}
              />
            </button>
            {/* Replace with game date/details */}
            <p className="mx-2 font-dinCondensed text-brandWhite hover:text-brandGrey text-lg">
              Game {game}
            </p>
            <button onClick={incrementGame}>
              <Image src={rightArrow} alt="Next game" width={20} height={20} />
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 w-full gap-8 p-8 font-dinCondensed">
        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2 text-end">PTS</div>
          <div className="text-brandWhite">6'2"</div>
        </div>

        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">REB</div>
          <div className="text-brandWhite">135lbs</div>
        </div>

        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">AST</div>
          <div className="text-brandWhite">160lbs</div>
        </div>

        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">STL</div>
          <div className="text-brandWhite">6'8"</div>
        </div>

        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">BLK</div>
          <div className="text-brandWhite">33"</div>
        </div>
        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">FG%</div>
          <div className="text-brandWhite">33"</div>
        </div>
        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">3P%</div>
          <div className="text-brandWhite">33"</div>
        </div>
        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">FT%</div>
          <div className="text-brandWhite">33"</div>
        </div>
        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">TO</div>
          <div className="text-brandWhite">33"</div>
        </div>
        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">PER</div>
          <div className="text-brandWhite">33"</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
