import React from "react";
import Button from "@/components/homePage/button";

interface GameStatDetail {
  game_stats_fg_percentage: number;
  game_stats_3p_percentage: number;
  game_stats_ft_percentage: number;
  game_stats_def_rebound_dreb: number;
  game_stats_off_rebound_oreb: number;
  game_stats_foul: number;
  game_stats_steal_stl: number;
  game_stats_turnover_to: number;
  game_stats_block_blk: number;
  game_stats_assist_asst: number;
}

interface GameDetails {
  gameDetails: GameStatDetail[];
}

interface StatsScoreProps {
  teamStats: GameDetails;
}

interface SliderProps {
  type: string;
  leftTeam: { color: string; score: number };
  rightTeam: { color: string; score: number };
}

const StatsScore: React.FC<StatsScoreProps> = (props) => {
  // Color palette
  const brandRed = "#CF6C57";
  const brandBlue = "#99B0BD";

  // Extracting team stats from props
  const leftData = props.teamStats.gameDetails[0];
  const rightData = props.teamStats.gameDetails[1];

  // Map of stats for easier reading and processing
  const statsMap: { [key: string]: keyof GameStatDetail } = {
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

  // Generating sliders for each stat
  const sliders = Object.entries(statsMap).map(([statLabel, statKey]) => (
    <Slider
      key={statLabel}
      type={statLabel}
      leftTeam={{ color: brandRed, score: leftData[statKey] }}
      rightTeam={{ color: brandBlue, score: rightData[statKey] }}
    />
  ));

  return (
    <div className="flex flex-col w-full items-center space-y-4">
      <div className="flex flex-row space-x-2 text-center">
        <Button active={true}> Stats </Button>
        <Button active={false}> Shot Chart </Button>
      </div>
      {sliders}
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
