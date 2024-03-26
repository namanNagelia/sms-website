"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import NewsArticles from "@/components/homePage/newsArticles";
import GameCard from "@/components/homePage/gameCards";
import PlayerCard from "@/components/homePage/playerCard";
import EmblaCarousel from "@/components/homePage/carousel";
import { EmblaOptionsType } from "embla-carousel";
import "../../components/homePage/embla.css";
import Datepicker from "react-tailwindcss-datepicker";
import { useMediaQuery } from "react-responsive";
import PlayerCarousel from "@/components/homePage/playerCarousel";
import { useUser } from "../userContext";

type newsProp = {
  title: string;
  date: string;
  premium: boolean;
  imageURL: string;
  redirectURL: string;
};
const OPTIONS: EmblaOptionsType = { dragFree: true };

interface Props {
  playerData: {
    firstPlayer: any[];
  };
  gameInfo: {
    games: any[];
  };
  teamData: {
    teams: any[];
  };
}

export default function HomeUI(props: Props) {
  const playerData = props.playerData.firstPlayer;
  const gameInfo = props.gameInfo.games;
  const teamData = props.teamData.teams;
  // this will be changed to a State
  const newsDataDefault = [
    {
      title: "Golden Bears Add Two Signees in 2023 Class",
      date: "2022-11-09",
      premium: true,
      imageURL:
        "https://d195hqvwre713v.cloudfront.net/images/2022/11/9/2223MBB-NSD-Twitter-both_copy_LogDa.jpg",
      redirectURL:
        "https://calbears.com/news/2022/11/9/mens-basketball-golden-bears-add-two-signees-in-2023-class.aspx",
    },
    {
      title: "USC adds transfer Sheppard, high school guard Bradley",
      date: "Not Provided",
      premium: false,
      imageURL:
        "https://dims.apnews.com/dims4/default/e154906/2147483647/strip/true/crop/3000x2000+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2Fc249631e4aaa49679af3795d27bb0cc3%2F3000.jpeg",
      redirectURL:
        "https://apnews.com/article/sports-mens-college-basketball-college-basketball-southern-california-trojans-mens-basketball-california-c1e9175c6b0a89dc0d533f042473caac",
    },
    {
      title: "California Golden Bears basketball 2024 NCAA bracketology",
      date: "2024-02-17",
      premium: false,
      imageURL:
        "https://cloudfront-us-east-1.images.arcpublishing.com/gray/OFG7RRRDEZNSFF5MKQRCDPUPY4.jpg",
      redirectURL:
        "https://www.wymt.com/sports/betting/2024/02/17/california-golden-bears-basketball-2024-ncaa-bracketology/",
    },
    {
      title:
        "Bryce James leaves Sherman Oaks Notre Dame, returns to Sierra Canyon",
      date: "2023-11-21",
      premium: true,
      imageURL:
        "https://ca-times.brightspotcdn.com/dims4/default/fb0d63c/2147483647/strip/false/crop/4532x3022+0+0/resize/1486x991!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0e%2Fd5%2F76a7e15945edbffbb75917cbcb77%2F2023-hoophall-classic-60951.jpg",
      redirectURL:
        "https://www.latimes.com/sports/highschool/story/2023-11-21/bryce-james-leaves-sherman-oaks-notre-dame-returns-to-sierra-canyon",
    },
  ];

  const { user } = useUser(); // Destructure the user from the context

  useEffect(() => {
    // This will log the user object every time the user state changes
  }, [user]); // Depend on the user state to re-run this effect

  // console.log("data", playerData);

  return (
    <>
      <NewsLetter newsData={newsDataDefault} />
      <Games gameData={gameInfo} teamData={teamData} />
      <TopPlayers playerData={playerData} />
      <div id="Padding" className="h-24"></div>
    </>
  );
}

export function NewsLetter({ newsData }: { newsData: newsProp[] }) {
  // Change this later, Cause this is giving me a stroke
  const news = Array(4)
    .fill(null)
    .map((_, index) => (
      <div className="justify-center items-center">
        <NewsArticles
          key={index}
          title={newsData[index].title}
          date={newsData[index].date}
          premium={newsData[index].premium}
          imageURL={newsData[index].imageURL}
          redirectURL={newsData[index].redirectURL}
        />
      </div>
    ));

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="title"> Newsletter </div>
      <div className="divider"></div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-x-16 gap-y-4 justify-center">
        {news}
      </div>
    </div>
  );
}

export function Games({
  gameData,
  teamData,
}: {
  gameData: any[];
  teamData: any[];
}) {
  const [date, setdate] = useState({
    startDate: null,
    endDate: null,
  });
  const handleDateChange = (newDate: any) => {
    setdate(newDate);
  };
  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="title ">Game</div>
      <div className="items-center justify-center w-[20%] mb-3">
        <Datepicker
          value={date}
          onChange={handleDateChange}
          showShortcuts={false}
          asSingle={true}
          useRange={false}
          placeholder={"Today"}
        />{" "}
      </div>

      <div className="divider"></div>
      <div className="mt-8 w-[90%]">
        <EmblaCarousel
          items={gameData}
          images={teamData}
          options={OPTIONS}
          cardType={GameCard}
          spacing={4}
        />
      </div>
    </div>
  );
}

export function TopPlayers({ playerData }: { playerData: any[] }) {
  const isLargeScreen = useMediaQuery({ query: "(max-width: 1200px)" });
  const [spacing, setSpacing] = useState(3);

  useEffect(() => {
    setSpacing(isLargeScreen ? 2 : 3);
  }, [isLargeScreen]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="title">Top Players</div>
      <div className="divider"></div>
      <div className="mt-8 w-[90%]">
        {/* Pass the playerDataDefault array to EmblaCarousel */}
        <PlayerCarousel
          key={isLargeScreen ? "large" : "small"}
          items={playerData}
          options={OPTIONS}
          cardType={PlayerCard}
          spacing={spacing}
        />
      </div>
    </div>
  );
}
