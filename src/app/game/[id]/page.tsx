import React from "react";
import Image from "next/image";
import Logo from "@/../public/SMSLogo.png"
import VideoPlayer from "@/components/playerPage/videoPlayer";
import Button from "@/components/homePage/button";


interface BoxProp {
    players: {
        name: string,
        position: string,
        pts: number,
        reb: number,
        ast: number
    }[]
}
interface GameProp {
    currentScore: {
        left: number
        right: number
        quarter: string
        status: string //This can be changed depending on the syntax of the data being fed in
    }
    leftTeam: {
        record: {
            wins: number,
            losses: number
        },
        name: string
        icon: typeof Logo
    },
    rightTeam: {
        record: {
            wins: number,
            losses: number
        },
        name: string
        icon: typeof Logo
    },
    gameLink: string
}

const defaultBoxScores: BoxProp = {
    players: [
        {
            name: "Marcus",
            position: "SF",
            pts: 10,
            reb: 2,
            ast: 3
        },
        {
            name: "Marcus",
            position: "SF",
            pts: 10,
            reb: 2,
            ast: 3
        },
        {
            name: "Marcus",
            position: "SF",
            pts: 10,
            reb: 2,
            ast: 3
        },
        {
            name: "Marcus",
            position: "SF",
            pts: 10,
            reb: 2,
            ast: 3
        },
        {
            name: "Marcus",
            position: "SF",
            pts: 10,
            reb: 2,
            ast: 3
        },
        {
            name: "Marcus",
            position: "SF",
            pts: 10,
            reb: 2,
            ast: 3
        },
        {
            name: "Marcus",
            position: "SF",
            pts: 10,
            reb: 2,
            ast: 3
        },
    ]
}

const defaultGameData: GameProp = {
    currentScore: {
        left: 59,
        right: 12,
        quarter: "Half",
        status: "R"
    },
    leftTeam: {
        record: {
            wins: 19,
            losses: 91
        },
        name: "Bruh1",
        icon: Logo,
    },
    rightTeam: {
        record: {
            wins: 19,
            losses: 91
        },
        name: "Bruh2",
        icon: Logo,
    },
    gameLink: "https://skilltech-v2-public.s3.us-west-1.amazonaws.com/videos/B648BD33-CB18-4D55-900E-BB86A1D70E12-512-00000016D78691A6.mp4"
}

const GamePage = () => {


    return (
        <>
            <GameScore
                currentScore={defaultGameData.currentScore}
                leftTeam={defaultGameData.leftTeam}
                rightTeam={defaultGameData.rightTeam}
                gameLink=""
            />
            <div className="w-full text-center">
                <div className="flex flex-row space-x-4 mx-8">
                    <BoxScore players={defaultBoxScores.players} />
                    <div className="mt-36">
                        <VideoPlayer videoLink={defaultGameData.gameLink} />
                    </div>
                    <BoxScore players={defaultBoxScores.players} />
                </div>
                <StatsScore />
                {/* <Plays /> */}
                <div className="h-96"></div>
            </div>
        </>
    )
}

export default GamePage;


const BoxScore: React.FC<BoxProp> = ({ players }) => {
    const PointCard = (
        { number, color, type }:
            { number: number, color: string, type: string }
    ) => {
        return (
            <div className="flex flex-col justify-center font-dinCondensed text-lg">
                <div className={`rounded-full bg-[${color}] w-12 h-12 items-center flex justify-center text-2xl text-brandWhite`}>
                    {number}
                </div>
                {type}
            </div>
        )
    }
    return (
        <div className="p-4 space-y-3 w-[30vw]">
            <div className="font-dinCondensed text-brandWhite text-4xl">
                Box Score
            </div>
            {players.map((player, index) => {
                return (
                    <div key={index} className="
                        flex 
                        flex-row 
                        items-center 
                        rounded-2xl
                        p-3 
                        w-full

                        bg-buttonBlue 
                        text-brandWhite 
                    ">
                        <Image src={Logo} alt="asdakl" width={36} height={36} />
                        <div className="flex flex-col items-start mr-auto ml-4">
                            <text className="text-2xl">{player.name}</text>
                            <text className="text-lg">{player.position}</text>
                        </div>
                        <div className="flex-row flex space-x-2">
                            <PointCard color='#6366f1' type="PTS" number={player.pts} />
                            <PointCard color='#0ea5e9' type="REB" number={player.reb} />
                            <PointCard color="#10b981" type="AST" number={player.ast} />
                        </div>

                    </div>
                )
            })}
        </div>
    );
}

const GameScore: React.FC<GameProp> = ({ currentScore, leftTeam, rightTeam }) => {

    return (
        <header className="sticky top-24 h-20 w-full z-50 flex-row justify-between px-10 text-brandWhite font-dinCondensed">
            <div className="flex flex-row h-fit">
                <Image src={leftTeam.icon} alt="sda" width={48} height={48} />
                <div className="flex flex-col justify-center items-start mx-4">
                    <text className="text-xl">{leftTeam.name}</text>
                    <text>{leftTeam.record.wins} - {leftTeam.record.losses}</text>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-row items-center">
                    <div className="w-4 h-4 bg-red-600 rounded-full mr-2" />
                    {currentScore.quarter}
                </div>
                <div className="text-3xl">
                    {currentScore.left} - {currentScore.right}
                </div>
            </div>
            <div className="flex flex-row-reverse h-fit">
                <Image src={rightTeam.icon} alt="sda" width={48} height={48} />
                <div className="flex flex-col justify-center items-start mx-4">
                    <text className="text-xl">{rightTeam.name}</text>
                    <text>{rightTeam.record.wins} - {rightTeam.record.losses}</text>
                </div>
            </div>
        </header>
    )
}

const StatsScore = () => {
    const leftTeamColor = "#000000"
    const rightRaw = "#FFFFFF"
    const rightTeamColor = "linear-gradient(" + rightRaw + " 0 0) scroll no-repeat center / 100% calc(var(--track-height) + 1px)"
    const leftScore = 60
    const rightScore = 20

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
    )
}
interface TeamColors {
    leftTeam: {
        color: string
        score: number
    }
    rightTeam: {
        color: string
        score: number
    }
    type: string
}
const Slider: React.FC<TeamColors> = ({ leftTeam, rightTeam, type }) => {
    return (
        <div>
            <div className="flex flex-row justify-between text-brandWhite">
                <text>{leftTeam.score}</text>
                <text>{type}</text>
                <text>{rightTeam.score}</text>
            </div>
            <input min="0" max="100" value={leftTeam.score / (leftTeam.score + rightTeam.score) * 100} type="range" className="data w-[600px] rounded-full"
                style={{
                    color: leftTeam.color,
                    background: rightTeam.color
                }}
            />
        </div>
    )
}