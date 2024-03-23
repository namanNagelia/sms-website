"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/../public/SMSLogo.png";
import SocialMedia from "@/components/playerPage/socialMedia";
import PlayerGrade from "@/components/playerPage/playerGrade";
import VideoPlayer from "@/components/playerPage/videoPlayer";
import VideoSelector from "@/components/playerPage/videoSelector";
import StatsCard from "@/components/playerPage/statsCard";
import GraphsBox from "@/components/playerPage/graphs";
import { useMediaQuery } from "react-responsive";
import { active, image } from "d3";
const { PrismaClient } = require("@prisma/client");
import { ShotChart } from "@/components/playerPage/graphs/shotChart";
import ScoutingReport from "@/components/playerPage/scoutReport";
import defaultImage from "@/../public/Male Unknown.svg";
import PlayerRatingsCalculator from "@/app/math/playerRatings";
import { truncate } from "fs";
const prisma = new PrismaClient();

// Example JSON data for season and game stats
const gameStats = [
  {
    date: "2023-03-15",
    details: {
      PTS: "30",
      REB: "7",
      AST: "9",
      STL: "2",
      BLK: "0",
      FG: "50%",
      TP: "40%",
      FT: "85%",
      TO: "2",
      PER: "25",
    },
  },
  // More game entries could be added here
  {
    date: "2023-03-17",
    details: {
      PTS: "33",
      REB: "7",
      AST: "9",
      STL: "2",
      BLK: "0",
      FG: "50%",
      TP: "40%",
      FT: "85%",
      TO: "2",
      PER: "25",
    },
  },
];

const videoHighlights = [
  {
    title: "Basketball",
    link: "https://skilltech-v2-public.s3.us-west-1.amazonaws.com/videos/B648BD33-CB18-4D55-900E-BB86A1D70E12-512-00000016D78691A6.mp4",
  },
  {
    title: "Follow",
    link: "https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8",
  },
  {
    title: "Dunk",
    link: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
  },
  {
    title: "Dunk",
    link: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
  },
  {
    title: "Dunk",
    link: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
  },
];

const defaultScoutingReport = {
  report: `Jamal Dequaviour, a high school basketball standout, has shown exceptional promise through his recent performances. Standing at 6'5" with a wingspan of 6'8", Jamal possesses the physical attributes that make him a versatile threat on both ends of the court. His agility and speed, combined with his size, allow him to guard multiple positions effectively. Offensively, Jamal demonstrates a keen ability to drive to the basket with strength and finesse, drawing defenders and creating opportunities for his teammates. His court vision is advanced for his age, showcasing his potential as a playmaker. Despite his clear talent, areas for improvement include his outside shooting consistency and decision-making under pressure, which, if addressed, could elevate his game significantly.`,
  weaknesses: ["Bad", "Bad2"],
  strengths: ["Good", "Good2"],
};

interface PlayerPageProps {
  profileStats: {
    playerProfile: any;
  };
  seasonAverages: {
    seasonAverages: any;
  };
  shotChartData: any[];
  shotTypesData: {
    shotTypes: any;
  };
}

export default function PlayerPageUI(props: PlayerPageProps) {
  const [activeVideo, setVideo] = useState<string>(videoHighlights[0].link);
  const playerProfileData = props.profileStats.playerProfile;
  const seasonAverages = props.seasonAverages.seasonAverages;
  const shotChartData = props.shotChartData;
  const shotTypes = props.shotTypesData.shotTypes;
  // console.log(seasonAverages);
  const ratingsData = PlayerRatingsCalculator(seasonAverages, shotTypes);
  const name = `${playerProfileData.Player_First_Name} ${playerProfileData.Player_Last_Name}`;
  console.log(playerProfileData.Year_of_Graduation);
  return (
    <div>
      <PlayerNameBanner
        Name={name}
        ImageURL={playerProfileData.Player_Picture_URL}
        JerseyNumber={playerProfileData.Player_Jersey_No}
        Position={playerProfileData.Position}
        school={playerProfileData.School_Name}
        graduation={playerProfileData.Year_of_Graduation}
      />

      <div className="-translate-y-32">
        <SocialMedia
          instagram="https://www.instagram.com/"
          twitter="https://www.twitter.com/"
          instagramFollowers={1000}
          twitterFollowers={1000}
          instagramViews={1000}
          twitterViews={1000}
        />

        <div className="h-full w-full flex flex-col text-center items-center sm:mb-10 lg:mb-0">
          <div className="flex flex-col lg:flex-row lg:space-x-10 my-10 space-y-5 lg:space-y-0">
            <BiometricCard height={playerProfileData.Height} />
            <PlayerGrade coachability={34} performance={91} intangibles={0} />
          </div>
          <div className="lg:flex items-center">
            <VideoPlayerLive active={activeVideo} handle={setVideo} />
          </div>
          <div className="lg:flex  lg:space-x-10 my-10">
            <StatsCard
              seasonStats={seasonAverages}
              gameStats={gameStats}
              archetype={"Not Implemented Yet"}
            />
            <GraphsBox shotsData={shotChartData} ratingsData={ratingsData} />
          </div>
          <ScoutingReport
            report={defaultScoutingReport.report} //accepts a string
            strengths={defaultScoutingReport.strengths} // accepts a string[]
            weaknesses={defaultScoutingReport.weaknesses} // accepts a string[]
          />
        </div>
      </div>
    </div>
  );
}
interface PlayerNameBannerProps {
  Name: string;
  ImageURL: string;
  JerseyNumber: number;
  Position: string;
  school: string;
  graduation: number;
}

const PlayerNameBanner: React.FC<PlayerNameBannerProps> = ({
  Name,
  ImageURL,
  JerseyNumber,
  Position,
  school,
  graduation,
}) => {
  if (ImageURL === "|") {
    ImageURL = defaultImage;
  }
  console.log(graduation);
  return (
    <div className="flex player-header sticky top-0 flex-row bg-primary items-end space-x-4 player-card z-50 mt-6">
      <Image
        src={ImageURL}
        alt={"Broski"}
        width={108}
        height={108}
        className="rounded-full"
      />
      <div className="flex flex-col mb-5 items-start text-brandWhite">
        <div className="font-dinCondensed text-3xl">{Name}</div>
        <div className="font-dinCondensed text-lg">
          {Position} | #{JerseyNumber} | {school} | {graduation}
        </div>
      </div>
    </div>
  );
};

const VideoPlayerLive = ({
  active,
  handle,
}: {
  active: string;
  handle: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div
      className="flex flex-row items-center video-card 
      xl:w-[1140px] xl:h-[600px]
      lg:w-[900px]  lg:h-[500px]
      md:w-[700px]  md:h-[420px]
      
    "
    >
      <div className="w-[30%] p-6 h-[95%]">
        <VideoSelector
          videoLinks={videoHighlights}
          title="Highlights"
          handleChange={handle}
        />
      </div>
      <div className="w-[70%] p-6">
        {" "}
        <VideoPlayer videoLink={active} />
      </div>
    </div>
  );
};

interface BioProps {
  homeTown: string;
  height: string;
  bench: number;
  weight: number;
  wingspan: string;
  vertical: string;
}

const BiometricCard: React.FC<BioProps> = (props) => {
  if (props.height != undefined) {
    const newHeight = props.height.split(".");
    var heightF = parseInt(newHeight[0]);
    var heightI = parseInt(newHeight[1]);
    console.log(heightI);
    props = {
      ...props,
      height: `${heightF}'${heightI}`,
    };
  }

  return (
    <div className="default-card flex flex-col items-center py-8 space-y-3">
      <div className=" font-dinCondensed text-brandWhite text-5xl bold">
        Biometerics
      </div>
      <div className="h-1 bg-brandGrey w-3/4 rounded-md" />
      <div className="text-brandGrey font-dinCondensed text-2xl mb-4">
        {props.homeTown == undefined ? "Undefined" : props.homeTown}
      </div>

      <div className="grid grid-cols-2 w-full gap-8 p-8 font-dinCondensed">
        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2 text-end">Height</div>
          <div className="text-brandWhite">
            {props.height == undefined ? "Unlisted" : props.height}
          </div>
        </div>

        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">Bench Press</div>
          <div className="text-brandWhite">
            {props.bench == undefined ? "Unlisted" : props.bench}
          </div>
        </div>

        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">Weight</div>
          <div className="text-brandWhite">
            {props.weight == undefined ? "Unlisted" : props.weight}
          </div>
        </div>

        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">Wing Span</div>
          <div className="text-brandWhite">
            {props.wingspan == undefined ? "Unlisted" : props.wingspan}
          </div>
        </div>

        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">Vertical</div>
          <div className="text-brandWhite">
            {props.vertical == undefined ? "Unlisted" : props.vertical}
          </div>
        </div>
      </div>
    </div>
  );
};
