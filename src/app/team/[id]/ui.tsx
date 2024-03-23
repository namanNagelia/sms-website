"use client";
import React, { useState } from "react";
import Image from "next/image";
import defaultImage from "@/../public/Male Unknown.svg";
import TeamStatsCard from "@/components/playerPage/teamStats";
import { RosterCard } from "@/components/playerPage/rosterCard";
import EmblaCarousel from "@/components/homePage/carousel";
import { EmblaOptionsType } from "embla-carousel";
const OPTIONS: EmblaOptionsType = { dragFree: true };

const seasonStats = {
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

export default function TeamUI() {
  return (
    <div>
      <TeamNameBanner Name="Lakers" ImageURL="|" record="0-0" />
      <div className="h-full w-full flex flex-col text-center items-center sm:mb-10 lg:mb-0">
        <div className="flex flex-col lg:flex-row lg:space-x-10 my-10 space-y-5 lg:space-y-0">
          <CoachCard
            name="Erick Spoelstra"
            phoneNumber="123-456-7890"
            email="Spo@heat.com"
            imageURL="|"
          />
          <TeamStatsCard seasonStats={seasonStats} />
        </div>
        <div className="lg:flex items-center"></div>
        <div className="lg:flex  lg:space-x-10 my-10">
          {/* <RosterCard
            name="LeBron James"
            picture="|"
            id={1}
            graduation="2023"
            position=
            "Forward"
          /> */}
          <EmblaCarousel
            items={seasonStats}
            options={OPTIONS}
            cardType={RosterCard}
            spacing={4}
          />
        </div>
      </div>
    </div>
  );
}

interface TeamNameBannerProps {
  Name: string;
  ImageURL: string;
  record: string;
}

const TeamNameBanner: React.FC<TeamNameBannerProps> = ({
  Name,
  ImageURL,
  record,
}) => {
  if (ImageURL === "|") {
    ImageURL = defaultImage;
  }
  return (
    <div className="flex player-header sticky top-0 flex-row bg-primary items-end space-x-4 player-card z-50 mt-6">
      <Image
        src={ImageURL}
        alt={"Broski"}
        width={80}
        height={80}
        className="rounded-full"
      />
      <div className="flex flex-col mb-5 items-start text-brandWhite">
        <div className="font-dinCondensed text-3xl">{Name}</div>
        <div className="font-dinCondensed text-lg">{record}</div>
      </div>
    </div>
  );
};

interface CoachCardProps {
  name: string;
  phoneNumber: string;
  email: string;
  imageURL: string;
}

const CoachCard = (props: CoachCardProps) => {
  var imageURL = props.imageURL;
  const name = props.name;
  const phoneNumber = props.phoneNumber;
  const email = props.email;
  if (imageURL === "|") {
    imageURL = defaultImage;
  }

  return (
    <div
      className="w-[560px] lg:w-[450px] xl:w-[500px] h-[230px] border-2 border-white bg-black flex overflow-hidden relative hover:z-30   "
      style={{ borderRadius: "60px" }}
    >
      {/* Using an img tag for simplicity and alignment */}
      <div className="flex flex-row justify-between">
        <div className="flex items-end justify-start lg:w-[150px] xl:w-[200px]">
          <Image src={imageURL} alt={name} width="200" height="200" />
        </div>

        <div className="mt-6 text-left pl-2">
          {/* Position */}
          <div className="lg:text-lg xl:text-xl text-white font-dinCondensed mb-2 flex flex-row lg:w-40 w-[8.5rem]">
            <p className="w-12 lg:w-14 text-brandGrey">Coach</p>
            <p className="mr-auto">|</p>
            <p>{name}</p>
          </div>
          {/* Number */}
          <div className="lg:bs xl:text-lg text-white font-dinCondensed mb-2 flex flex-row lg:w-40 w-[8.5rem]">
            <p className="w-12 lg:w-14 text-brandGrey">Phone</p>
            <p className="mr-auto">|</p>
            <p>{phoneNumber}</p>
          </div>
          {/* School */}
          <div className="lg:bs xl:text-lg text-white font-dinCondensed mb-2 flex flex-row lg:w-40 w-[8.5rem]">
            <p className="w-12 lg:w-14 text-brandGrey">Email</p>
            <p className="mr-auto">|</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
