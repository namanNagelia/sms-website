import React from "react";
import Image from "next/image";

export type GameCardProps = {
  player_team_name_pic: string;
  player_opponent_team_pic: string;
  game_score: string;
  game_id: number;
};

const GameCard = (props: GameCardProps) => {
  const handleClick = (id: number) => {
    window.location.href = `/game/${id}`;
  };

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
          src={props.player_team_name_pic}
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
          src={props.player_opponent_team_pic}
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
