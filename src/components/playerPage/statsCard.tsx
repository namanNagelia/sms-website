"use client";
import React from "react";
import { useState, useEffect } from "react";

// Prop: Player ID
// Carousel:state for season or game
// 	Default is season, will fetch player’s season data from the database and display it
// If press the change season, use effect updates state and refetches for most recent game
// 	State for game will be default at 0 and arrow will change it, updating it and refetching with another use effect

const StatsCard = () => {
  const [mode, setMode] = useState("Season");
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "Season" ? "Game" : "Season"));
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
      <button
        onClick={toggleMode}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Switch to {mode === "Season" ? "Game" : "Season"}
      </button>

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
