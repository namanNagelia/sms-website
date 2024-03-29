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
};
// interface RosterProps {
//   picture: string;
//   id: number;
//   graduation: string;
//   name: string;
//   position: string;
// }
const defaultTeamStats = [
  {
    picture: "|",
    id: 1,
    graduation: "2025",
    name: "Prasad Gupta",
    position: "Guard",
  },
  {
    picture: "|",
    id: 2,
    graduation: "2025",
    name: "Prasad Gupta",
    position: "Guard",
  },
  {
    picture: "|",
    id: 3,
    graduation: "2025",
    name: "Prasad Gupta",
    position: "Guard",
  },
  {
    picture: "|",
    id: 4,
    graduation: "2025",
    name: "Prasad Gupta",
    position: "Guard",
  },
  {
    picture: "|",
    id: 5,
    graduation: "2025",
    name: "Prasad Gupta",
    position: "Guard",
  },
];

interface teamProps {
  coach: {
    coachesDetails: any;
  };
  roster: {
    roster: any;
  };
  organizationDetail: {
    school: any;
  };
  teamInfo: {
    school: any;
  };
  id: any;
}

export default function TeamUI(props: teamProps) {
  console.log(props)
  const coachData = props.coach.coachesDetails;
  const coach = coachData.find(
    (coach: any) => coach.player_coach_xref_team_id == props.id
  );
  const roster = props.roster.roster;
  const orgInfo = props.organizationDetail.school[0];
  const teamInfo = props.teamInfo.school;
  var ImageURL = coach.coach_photo;

  if (
    ImageURL === "|" ||
    ImageURL === "" ||
    ImageURL === null ||
    ImageURL === undefined
  ) {
    ImageURL = defaultImage;
  }

  return (
    <div>
      <TeamNameBanner
        Name={teamInfo.team_name}
        ImageURL={teamInfo.team_log_url}
        schoolName={orgInfo.org_name}
      />
      <div className="h-full w-full flex flex-col text-center items-center sm:mb-10 lg:mb-0">
        <div className="flex flex-col lg:flex-row lg:space-x-10 my-10 space-y-5 lg:space-y-0 items-center">
          <CoachCard
            name={coach.user_first_name + " " + coach.user_last_name}
            phoneNumber="Not Given"
            email="Not Given"
            imageURL={ImageURL}
          />
          <TeamStatsCard seasonStats={seasonStats} />
        </div>
        <div className="lg:flex items-center"></div>
        <div className="lg:flex  lg:space-x-10 my-10 w-5/6">
          {/* <RosterCard
            name="LeBron James"
            picture="|"
            id={1}
            graduation="2023"
            position=
            "Forward"
          /> */}
          <EmblaCarousel
            items={roster}
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
  schoolName: string;
}

const TeamNameBanner: React.FC<TeamNameBannerProps> = ({
  Name,
  ImageURL,
  schoolName,
}) => {
  if (ImageURL === "|" || ImageURL === "" || ImageURL === null) {
    ImageURL = defaultImage;
  }
  return (
    <div className="flex player-header sticky top-0 flex-row bg-primary items-end space-x-4 player-card z-50 mt-6">
      <Image
        src={ImageURL}
        alt={"Team"}
        width={80}
        height={80}
        className="rounded-full"
      />
      <div className="flex flex-col mb-5 items-start text-brandWhite">
        <div className="font-dinCondensed text-3xl">{Name}</div>
        <div className="font-dinCondensed text-lg">{schoolName}</div>
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
      <div className="flex flex-row space-x-4">
        <div className="flex items-end justify-start lg:w-[150px] xl:w-[200px]">
          <Image src={imageURL} alt={name} width="200" height="200" />
        </div>

        <div className="mt-auto text-left pl-2 mb-14">
          {/* Position */}
          <div className="lg:text-lg xl:text-xl text-white font-dinCondensed mb-2 flex flex-row lg:w-48 w-[8.5rem]">
            <p className="w-12 lg:w-14 text-brandGrey">Coach</p>
            <p className="mr-auto">|</p>
            <p>{name}</p>
          </div>
          {/* Number */}
          <div className="lg:bs xl:text-lg text-white font-dinCondensed mb-2 flex flex-row lg:w-48 w-[8.5rem]">
            <p className="w-12 lg:w-14 text-brandGrey">Phone</p>
            <p className="mr-auto">|</p>
            <p>{phoneNumber}</p>
          </div>
          {/* School */}
          <div className="lg:bs xl:text-lg text-white font-dinCondensed mb-2 flex flex-row lg:w-48 w-[8.5rem]">
            <p className="w-12 lg:w-14 text-brandGrey">Email</p>
            <p className="mr-auto">|</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
