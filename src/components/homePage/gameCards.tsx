import React from "react";
import Image from "next/image";

export type GameCardProps = {
    leftTeamURL: string,
    rightTeamURL: string,
    leftTeamScore: number,
    rightTeamScore: number,

}

const GameCard = (props: GameCardProps) => {
    return (
        <div className="m-4 game-card flex-col text-center justify-center py-6 hover:z-30 hover:scale-110 transition duration-150">
            <text className="text-brandWhite my-8 font-dinCondensed text-3xl animate-pulse">Live</text>

            <div className="w-full flex flex-row justify-center items-center space-x-3">
                <Image src={props.leftTeamURL} alt="Team Image" className="bg-white" width={64} height={64} />
                <text className=" font-dinCondensed text-4xl text-white">3{props.leftTeamScore} - 1{props.rightTeamScore}2</text>
                <Image src={props.leftTeamURL} alt="Team Image" className="bg-white" width={64} height={64} />
            </div>

        </div>
    );
}

export default GameCard;