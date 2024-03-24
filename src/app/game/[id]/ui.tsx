import React from "react";
import Image from "next/image";
import Logo from "@/../public/SMSLogo.png";
import VideoPlayer from "@/components/playerPage/videoPlayer";
import Button from "@/components/homePage/button";

interface BoxProp {
  players: {
    name: string;
    position: string;
    pts: number;
    reb: number;
    ast: number;
  }[];
}
interface GameProp {
  Team1: string;
  Team2: string;
  Team1Logo: string;
  Team2Logo: string;
  FinalScores: string;
}

const defaultBoxScores: BoxProp = {
  players: [
    {
      name: "Marcus",
      position: "SF",
      pts: 10,
      reb: 2,
      ast: 3,
    },
    {
      name: "Marcus",
      position: "SF",
      pts: 10,
      reb: 2,
      ast: 3,
    },
    {
      name: "Marcus",
      position: "SF",
      pts: 10,
      reb: 2,
      ast: 3,
    },
    {
      name: "Marcus",
      position: "SF",
      pts: 10,
      reb: 2,
      ast: 3,
    },
    {
      name: "Marcus",
      position: "SF",
      pts: 10,
      reb: 2,
      ast: 3,
    },
    {
      name: "Marcus",
      position: "SF",
      pts: 10,
      reb: 2,
      ast: 3,
    },
    {
      name: "Marcus",
      position: "SF",
      pts: 10,
      reb: 2,
      ast: 3,
    },
  ],
};

interface GamePageProps {
  gameDetailsStats: {
    game: any;
  };
  teamInfo: {
    teams: any;
  };
}

const GamePageUI = (props: GamePageProps) => {
  const gamedetails = props.gameDetailsStats.game;
  const teamInfo = props.teamInfo.teams;
  const team1 = teamInfo.find(
    (team: any) => team.team_id === gamedetails.game_team1_id
  );
  const team1Pic = team1 ? team1.team_log_url : "";
  const team2 = teamInfo.find(
    (team: any) => team.team_id === gamedetails.game_team2_id
  );
  const team2Pic = team2 ? team2.team_log_url : "";
  const team1Name = team1 ? team1.team_name : "";
  const team2Name = team2 ? team2.team_name : "";

  return (
    <>
      <GameScore
        Team1={team1Name}
        Team2={team2Name}
        Team1Logo={team1Pic}
        Team2Logo={team2Pic}
        FinalScores={gamedetails.game_score}
      />
      <div className="w-full text-center">
        <div className="flex flex-row space-x-4 mx-8">
          <BoxScore players={defaultBoxScores.players} />
          <div className="mt-36">
            <VideoPlayer videoLink={gamedetails.game_video_url} />
          </div>
          <BoxScore players={defaultBoxScores.players} />
        </div>
        <StatsScore />
        {/* <Plays /> */}
        <div className="h-96"></div>
      </div>
    </>
  );
};

export default GamePageUI;

const BoxScore: React.FC<BoxProp> = ({ players }) => {
  const PointCard = ({
    number,
    color,
    type,
  }: {
    number: number;
    color: string;
    type: string;
  }) => {
    return (
      <div className="flex flex-col justify-center font-dinCondensed lg:text-base xl:text-lg">
        <div
          className={`rounded-full bg-${color} lg:w-5 lg:h-5 xl:w-7 xl:h-7 items-center flex justify-center xl:text-xl lg:text-lg text-brandWhite`}
        >
          {number}
        </div>
        {type}
      </div>
    );
  };
  return (
    <div className="p-4 space-y-3 xl:w-[40vw] lg:w-[55vw]">
      <div className="font-dinCondensed text-brandWhite text-4xl">
        Box Score
      </div>
      {players.map((player, index) => {
        return (
          <div
            key={index}
            className="
                        flex 
                        flex-row 
                        items-center 
                        rounded-2xl
                        p-3 
                        w-full

                        bg-buttonBlue 
                        text-brandWhite 
                    "
          >
            <Image src={Logo} alt="asdakl" width={36} height={36} />
            <div className="flex flex-col items-start mr-auto ml-4">
              <text className="xl:text-xl lg:text-lg">{player.name}</text>
              <text className="xl:text-bs">{player.position}</text>
            </div>
            <div className="flex-row flex space-x-2">
              <PointCard color="indigo-500" type="PTS" number={player.pts} />
              <PointCard color="sky-500" type="REB" number={player.reb} />
              <PointCard color="emerald-500" type="AST" number={player.ast} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const GameScore: React.FC<GameProp> = ({
  Team1,
  Team2,
  Team1Logo,
  Team2Logo,
  FinalScores,
}) => {
  return (
    <header className="sticky top-24 h-20 w-full z-50 flex-row justify-between px-10 text-brandWhite font-dinCondensed">
      <div className="flex flex-row h-fit">
        <Image src={Team1Logo} alt="Team 1 Pic" width={48} height={48} />
        <div className="flex flex-col justify-center items-start mx-4">
          <text className="text-xl">{Team1}</text>
          <text>{/* {leftTeam.record.wins} - {leftTeam.record.losses} */}</text>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <div className="w-4 h-4 bg-red-600 rounded-full mr-2" />
          Final
        </div>
        <div className="text-3xl">{FinalScores}</div>
      </div>
      <div className="flex flex-row-reverse h-fit">
        <Image src={Team2Logo} alt="Team 2 pic" width={48} height={48} />
        <div className="flex flex-col justify-center items-start mx-4">
          <text className="text-xl">{Team2}</text>
          <text>
            {/* {rightTeam.record.wins} - {rightTeam.record.losses} */}
          </text>
        </div>
      </div>
    </header>
  );
};

const StatsScore = () => {
  const leftTeamColor = "#000000";
  const rightRaw = "#FFFFFF";
  const rightTeamColor =
    "linear-gradient(" +
    rightRaw +
    " 0 0) scroll no-repeat center / 100% calc(var(--track-height) + 1px)";
  const leftScore = 60;
  const rightScore = 20;

  return (
    <div className="flex flex-col w-full items-center space-y-4">
      <div className="flex flex-row space-x-2 text-center">
        <Button active={true}> Stats </Button>
        <Button active={false}> Shot Chart </Button>
      </div>

      <Slider
        type={"Points"}
        leftTeam={{ color: leftTeamColor, score: leftScore }}
        rightTeam={{ color: rightTeamColor, score: rightScore }}
      />
      <Slider
        type={"Points"}
        leftTeam={{ color: leftTeamColor, score: leftScore }}
        rightTeam={{ color: rightTeamColor, score: rightScore }}
      />
      <Slider
        type={"Points"}
        leftTeam={{ color: leftTeamColor, score: leftScore }}
        rightTeam={{ color: rightTeamColor, score: rightScore }}
      />
      <Slider
        type={"Points"}
        leftTeam={{ color: leftTeamColor, score: leftScore }}
        rightTeam={{ color: rightTeamColor, score: rightScore }}
      />
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
