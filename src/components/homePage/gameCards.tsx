import React from "react";
import Image from "next/image";

export type GameCardProps = {
    leftTeamURL: string,
    rightTeamURL: string,
    leftTeamScore: number,
    rightTeamScore: number,

}

const GameCard = (props: GameCardProps) => {

    const handleClick = () => {
        //Do Stuff to naivgate to the correct page
    }

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
            ">

            <text className="
                text-brandWhite 
                font-dinCondensed 
                text-3xl 
                animate-pulse 
                text-center 
                w-full"
            >
                Live
            </text>

            <div className="
                w-full 
                flex 
                flex-row 
                justify-center 
                items-center 

                space-x-3
                
            ">
                <Image src={props.leftTeamURL} alt="Team Image" className="bg-white rounded-full md:w-12 md:h-12" width={64} height={64} />
                <text className=" 
                    select-none
                    text-white
                    font-dinCondensed 
                    xl:text-4xl 
                    md:text-xl
                ">
                    3{props.leftTeamScore} - 1{props.rightTeamScore}2
                </text>
                <Image src={props.leftTeamURL} alt="Team Image" className="bg-white rounded-full md:w-12 md:h-12" width={64} height={64} />
            </div>

        </button>
    );
}

export default GameCard;