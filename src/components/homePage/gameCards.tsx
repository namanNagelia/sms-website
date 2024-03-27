import React from "react";
import Image from "next/image";
import defaultImage from "./image-not-found-icon.svg";

export type GameCardProps = {
  player_team_name_pic: string;
  player_opponent_team_pic: string;
  game_score: string;
  game_id: number;
  game_team1_id: number;
  game_team2_id: number;
  teamData: any[];
};

const GameCard = (props: GameCardProps) => {
  const handleClick = (id: number) => {
    window.location.href = `/game/${id}`;
  };
  const team1 = props.teamData.find(
    (team) => team.team_organisation_id === props.game_team1_id
  );
  const team1Pic = team1 ? team1.team_log_url : defaultImage;
  const team1Name = team1 ? team1.team_name : "";
  const team2 = props.teamData.find(
    (team) => team.team_organisation_id === props.game_team2_id
  );
  const team2Pic = team2 ? team2.team_log_url : defaultImage;
  const team2Name = team2 ? team2.team_name : "";
  return (
    <button
      className="
                m-4 
                py-6 

                xl:w-[300px]
                lg:w-[240px] 
                md:w-[180px]

                border-2 
                rounded-[60px] 
                border-brandWhite 
                bg-[#131F21]
                
                flex 
                flex-col 
                text-center 
                justify-center 
                
                hover:z-30 
                hover:scale-110 
                transition 
                duration-150
            "
      onClick={() => handleClick(props.game_id)}
    >
      <text
        className="
                text-brandWhite 
                font-dinCondensed 
                text-3xl 
                animate-pulse 
                text-center 
                w-full"
      >
        Live
      </text>

      <div
        className="
                w-full 
                flex 
                flex-row 
                justify-center 
                items-center 

                space-x-3
                
            "
      >
        <Image
          src={team1Pic}
          alt="Team Image"
          className="bg-white rounded-full md:w-12 md:h-12"
          width={64}
          height={64}
        />
        <text
          className=" 
                    select-none
                    text-white
                    font-dinCondensed 
                    xl:text-4xl 
                    md:text-xl
                "
        >
          {props.game_score}
        </text>
        <Image
          src={team2Pic}
          alt="Team Image"
          className="bg-white rounded-full md:w-12 md:h-12"
          width={64}
          height={64}
        />
      </div>
    </button>
  );
};

export default GameCard;
