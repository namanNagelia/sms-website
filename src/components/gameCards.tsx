import React from "react";
import Image from "next/image";

export type GameCardProps = {
    leftTeamURL: string,
    rightTeamURL: string,
    leftTeamScore: number,
    rightTeamScore: number,

}

export default function GameCard(props: GameCardProps) {
    return (
        <div className="game-card flex-col text-center justify-center">
            <text className="text-brandWhite my-8">Live</text>

            <div className="w-full">
                <Image src={props.leftTeamURL} alt="" />
                <text>{props.leftTeamScore}</text>
                <text>-</text>
                <text>{props.rightTeamScore}</text>
                <Image src={props.leftTeamURL} alt="" />
            </div>

        </div>
    );
}