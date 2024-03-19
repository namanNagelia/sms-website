"use client"
import Image from "next/image";
import { useState } from "react";
import NewsArticles from "@/components/homePage/newsArticles";

const newsDataDefault = [
  {
    title: "Golden Bears Add Two Signees in 2023 Class",
    date: "2022-11-09",
    premium: false,
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
];


export default function Home() {
  return (
    <div className="flex-row w-full h-full justify-center items-center text-center">
      <div id="Padding" className="h-20"></div>
      <NewsLetter />
      <Games />
      <TopPlayers />
    </div>
  );
}

export function NewsLetter() {
  const newsData = Array(4).fill(null).map((_, index) => (
    <div className="justify-center items-center">
      <NewsArticles
        title={newsDataDefault[0].title}
        date={newsDataDefault[0].date}
        premium={false}
        imageURL={newsDataDefault[0].imageURL}
        redirectURL={newsDataDefault[0].redirectURL}
      />
    </div>
  ));

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="title"> Newsletter </div>
      <div className="divider"></div>

      <div className="grid grid-cols-2 gap-x-16 gap-y-4 justify-center">
        {newsData}
      </div>

    </div>
  )
}

export function Games() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="title"> Game </div>
      <div className="divider"></div>


    </div>
  )
}

export function TopPlayers() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="title"> Top Players </div>
      <div className="divider"></div>


    </div>
  )
}
