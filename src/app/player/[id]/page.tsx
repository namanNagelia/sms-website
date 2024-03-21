"use client"
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
import { active } from "d3";
// Example JSON data for season and game stats
const seasonStats = {
  archetype: "Slasher",
  stats: {
    PTS: "22.3",
    REB: "5.4",
    AST: "7.1",
    STL: "1.5",
    BLK: "0.4",
    FG: "47%",
    TP: "38%",
    FT: "82%",
    TO: "3.1",
    PER: "21.2",
  },
};

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
    title: "Dunk",
    link: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
  },
  {
    title: "Dunk",
    link: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
  },
  {
    title: "Dunk",
    link: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
  },
  {
    title: "Dunk",
    link: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
  },
  {
    title: "Dunk",
    link: "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
  },
]

//What weneed: Player details (unchanging)
//Videos: Put a default video for them, then in the same page make a state variable for current video, and that state changes if a video on the side is selected
export default function PlayerPage() {
  const [activeVideo, setVideo] = useState<string>(videoHighlights[0].link);

  return (
    <>
      <PlayerNameBanner />
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
            <BiometricCard />
            <PlayerGrade coachability={34} performance={91} intangibles={0} />
          </div>
          <div className="lg:flex items-center">
            <VideoPlayerLive active={activeVideo} handle={setVideo} />
          </div>
          <div className="lg:flex  lg:space-x-10 my-10">
            <StatsCard seasonStats={seasonStats} gameStats={gameStats} />
            <GraphsBox />
          </div>
        </div>
      </div>
    </>
  );
}

const PlayerNameBanner = () => {
  return (
    <div className="flex player-header sticky top-0 flex-row bg-primary items-end space-x-4 player-card z-50 mt-6">
      <Image src={Logo} alt={"Broski"} width={108} height={108} />
      <div className="flex flex-col mb-5 items-start text-brandWhite">
        <div className="font-dinCondensed text-3xl">Jamal DonTiqualous</div>
        <div className="font-dinCondensed text-lg">Data Points</div>
      </div>
    </div>
  );
};

const VideoPlayerLive = ({ active, handle }: { active: string, handle: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div className="flex w-screen video-card h-[540px]">
      <div className="w-1/4 p-6">
        <VideoSelector
          videoLinks={videoHighlights}
          title="Highlights"
          handleChange={handle}
        />
      </div>
      <div className="w-3/4 p-6">
        {" "}
        <VideoPlayer videoLink={active} />
      </div>
    </div>
  );
};

const BiometricCard = () => {
  return (
    <div className="default-card flex flex-col items-center py-8 space-y-3">
      <div className=" font-dinCondensed text-brandWhite text-5xl bold">
        Biometerics
      </div>
      <div className="h-1 bg-brandGrey w-3/4 rounded-md" />
      <div className="text-brandGrey font-dinCondensed text-2xl mb-4">
        Selesian, Los Angeles
      </div>

      <div className="grid grid-cols-2 w-full gap-8 p-8 font-dinCondensed">
        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2 text-end">Height</div>
          <div className="text-brandWhite">6'2"</div>
        </div>

        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">Bench Press</div>
          <div className="text-brandWhite">135lbs</div>
        </div>

        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">Weight</div>
          <div className="text-brandWhite">160lbs</div>
        </div>

        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">Wing Span</div>
          <div className="text-brandWhite">6'8"</div>
        </div>

        <div className=" w-full flex flex-row text-3xl">
          <div className="text-brandGrey mr-auto px-2">Vertical</div>
          <div className="text-brandWhite">33"</div>
        </div>
      </div>
    </div>
  );
};
