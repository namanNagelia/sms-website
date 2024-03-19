"use client";
import Image from "next/image";
import { useState } from "react";
import NewsArticles from "@/components/homePage/newsArticles";
import GameCard from "@/components/homePage/gameCards";
import PlayerCard from "@/components/homePage/playerCard";
import EmblaCarousel from "@/components/homePage/carousel";
import { EmblaOptionsType } from "embla-carousel";
import "../../components/homePage/embla.css";

type newsProp = {
  title: string;
  date: string;
  premium: boolean;
  imageURL: string;
  redirectURL: string;
};
const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const playerDataDefault = [
  {
    name: "Zach Edey",
    position: "Center",
    number: 15,
    school: "Purdue",
    imageURL:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4600663.png&w=350&h=254",
    ranking: 1,
    change: 0,
  },
  {
    name: "Tyler Kolek",
    position: "Guard",
    number: 11,
    school: "Marquette",
    imageURL:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4433225.png&w=350&h=254",
    ranking: 2,
    change: 3,
  },
  {
    name: "Aaliyah Edwards",
    position: "Forward",
    number: 3,
    school: "UConn",
    imageURL:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/womens-college-basketball/players/full/4433408.png",
    ranking: 20,
    change: -2,
  },
  {
    name: "Ryan Nembhard",
    position: "Guard",
    number: 2,
    school: "Gonzaga",
    imageURL:
      "https://gocreighton.com/images/2022/6/9/Ryan_Nembhard_2023mug_cropped.jpg",
    ranking: 19,
    change: 0,
  },
  {
    name: "Hunter Dickinson",
    position: "Forward",
    number: 1,
    school: "Kansas",
    imageURL:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4432180.png&w=350&h=254",
    ranking: 15,
    change: 0,
  },
  {
    name: "DaRon Holmes II",
    position: "Forward",
    number: 35,
    school: "Dayton",
    imageURL:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4433607.png&w=350&h=254",
    ranking: 75,
    change: 0,
  },
];

export default function Home() {
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

  const playerDataDefault = [
    {
      name: "Zach Edey",
      position: "Center",
      number: 15,
      school: "Purdue",
      imageURL:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4600663.png&w=350&h=254",
      ranking: 1,
      change: 0,
    },
    {
      name: "Tyler Kolek",
      position: "Guard",
      number: 11,
      school: "Marquette",
      imageURL:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4433225.png&w=350&h=254",
      ranking: 2,
      change: 0,
    },
    {
      name: "Aaliyah Edwards",
      position: "Forward",
      number: 3,
      school: "UConn",
      imageURL:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/womens-college-basketball/players/full/4433408.png",
      ranking: 20,
      change: 0,
    },
    {
      name: "Ryan Nembhard",
      position: "Guard",
      number: 2,
      school: "Gonzaga",
      imageURL:
        "https://gocreighton.com/images/2022/6/9/Ryan_Nembhard_2023mug_cropped.jpg",
      ranking: 19,
      change: 0,
    },
    {
      name: "Hunter Dickinson",
      position: "Forward",
      number: 1,
      school: "Kansas",
      imageURL:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4432180.png&w=350&h=254",
      ranking: 15,
      change: 0,
    },
    {
      name: "DaRon Holmes II",
      position: "Forward",
      number: 35,
      school: "Dayton",
      imageURL:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4433607.png&w=350&h=254",
      ranking: 75,
      change: 0,
    },
  ];

  const gameDataDefault = [
    {
      leftTeamScore: 0,
      rightTeamScore: 0,
      leftTeamURL: "",
      rightTeamURL: "",
    },
    {
      leftTeamScore: 0,
      rightTeamScore: 0,
      leftTeamURL: "",
      rightTeamURL: "",
    },
    {
      leftTeamScore: 0,
      rightTeamScore: 0,
      leftTeamURL: "",
      rightTeamURL: "",
    },
    {
      leftTeamScore: 0,
      rightTeamScore: 0,
      leftTeamURL: "",
      rightTeamURL: "",
    },
    {
      leftTeamScore: 0,
      rightTeamScore: 0,
      leftTeamURL: "",
      rightTeamURL: "",
    },
    {
      leftTeamScore: 0,
      rightTeamScore: 0,
      leftTeamURL: "",
      rightTeamURL: "",
    }
  ]

  return (
    <div className="flex-row w-full h-full justify-center items-center text-center space-y-10">
      <div id="Padding" className="h-24"></div>
      <NewsLetter newsData={newsDataDefault} />
      <Games gameData={gameDataDefault} />
      <TopPlayers playerData={playerDataDefault} />
      <div id="Padding" className="h-24"></div>
    </div>
  );
}

export function NewsLetter({ newsData }: { newsData: newsProp[] }) {
  // Change this later, Cause this is giving me a stroke
  const news = Array(4)
    .fill(null)
    .map((_, index) => (
      <div className="justify-center items-center">
        <NewsArticles
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

      <div className="grid grid-cols-2 gap-x-16 gap-y-4 justify-center">
        {news}
      </div>
    </div>
  );
}

export function Games({ gameData }: { gameData: any[] }) {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="title relative">
        Game
        <input
          className="w-16 h-14 ml-10 scale-75 hover:scale-100 transition duration-200 ease-in-out"
          type="date" id="start"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
          style={{ background: "rgba(19, 31, 33, 0.62)", color: "#FFFFFF" }}
        />
      </div>

      <div className="divider"></div>

      <div className="mt-8 w-[90%]">
        <EmblaCarousel items={gameData} options={OPTIONS} cardType={GameCard} spacing={4} />
      </div>
    </div>
  );
}

export function TopPlayers({ playerData }: { playerData: any[] }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="title">Top Players</div>
      <div className="divider"></div>
      <div className="mt-8 w-[90%]">
        {/* Pass the playerDataDefault array to EmblaCarousel */}
        <EmblaCarousel items={playerData} options={OPTIONS} cardType={PlayerCard} spacing={2.5} />
      </div>
    </div>
  );
}
