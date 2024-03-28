import React from "react";

interface GameStatDetail {
  game_stats_fg_percentage?: number;
  game_stats_3p_percentage?: number;
  game_stats_ft_percentage?: number;
  game_stats_def_rebound_dreb?: number;
  game_stats_off_rebound_oreb?: number;
  game_stats_foul?: number;
  game_stats_steal_stl?: number;
  game_stats_turnover_to?: number;
  game_stats_block_blk?: number;
  game_stats_assist_asst?: number;
}

interface GameDetails {
  game: GameStatDetail[];
}

interface StatsScoreProps {
  teamStats: GameDetails;
}

interface SliderProps {
  type: string;
  leftTeam: { color: string; score: number };
  rightTeam: { color: string; score: number };
}

const StatsScore: React.FC<StatsScoreProps> = ({ teamStats }) => {
  const brandRed = "#CF6C57";
  const brandBlue = "#99B0BD";

  // Safely check for existence and length of gameDetails before accessing
  const gameDetails = teamStats.game;
  const leftData =
    gameDetails && gameDetails.length > 0 ? gameDetails[0] : null;
  const rightData =
    gameDetails && gameDetails.length > 1 ? gameDetails[1] : null;

  console.log("Left Data:", leftData); // Debugging
  console.log("Right Data:", rightData); // Debugging

  if (!leftData || !rightData) {
    return <div></div>; // Changed from an empty div to a message for clarity
  }

  const statsMap: Record<string, keyof GameStatDetail> = {
    "Field Goal Percentage": "game_stats_fg_percentage",
    "3-Point Percentage": "game_stats_3p_percentage",
    "Free Throw Percentage": "game_stats_ft_percentage",
    "Defensive Rebounds": "game_stats_def_rebound_dreb",
    "Offensive Rebounds": "game_stats_off_rebound_oreb",
    Fouls: "game_stats_foul",
    Steals: "game_stats_steal_stl",
    Turnovers: "game_stats_turnover_to",
    Blocks: "game_stats_block_blk",
    Assists: "game_stats_assist_asst",
  };

  const sliders = Object.entries(statsMap)
    .filter(
      ([_, statKey]) =>
        leftData &&
        rightData &&
        leftData[statKey] !== undefined &&
        rightData[statKey] !== undefined
    )
    .map(([statLabel, statKey]) => (
      <Slider
        key={statLabel}
        type={statLabel}
        leftTeam={{ color: brandRed, score: leftData[statKey]! }}
        rightTeam={{ color: brandBlue, score: rightData[statKey]! }}
      />
    ));

  console.log("Sliders Count:", sliders.length); // Debugging

  return (
    <div className="flex flex-col w-full items-center space-y-4">
      {sliders.length > 0 ? sliders : <div></div>}
    </div>
  );
};

interface TeamColors {
  leftTeam: {
    color: string;
    score: number;
  };
  rightTeam: {
    color: string;
    score: number;
  };
  type: string;
}
const Slider: React.FC<TeamColors> = ({ leftTeam, rightTeam, type }) => {
  return (
    <div>
      <div className="flex flex-row justify-between text-brandWhite">
        <text>{leftTeam.score}</text>
        <text>{type}</text>
        <text>{rightTeam.score}</text>
      </div>
      <input
        min="0"
        max="100"
        value={(leftTeam.score / (leftTeam.score + rightTeam.score)) * 100}
        type="range"
        className="data w-[600px] rounded-full"
        style={{
          color: leftTeam.color,
          background: rightTeam.color,
        }}
      />
    </div>
  );
};

export default StatsScore;
