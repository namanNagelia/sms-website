import React from "react";
import Image from "next/image";
import Logo from "@/../public/SMSLogo.png";
import SocialMedia from "@/components/playerPage/socialMedia";
import PlayerGrade from "@/components/playerPage/playerGrade";

export default function PlayerPage() {
  return (
    <div className="h-full w-full flex flex-col text-center items-center">
      <PlayerNameBanner />
      <SocialMedia
        instagram="https://www.instagram.com/"
        twitter="https://www.twitter.com/"
        instagramFollowers={1000}
        twitterFollowers={1000}
        instagramViews={1000}
        twitterViews={1000}
      />
      <PlayerGrade coachability={34} performance={91} intangibles={0} />
    </div>
  );
}

const PlayerNameBanner = () => {
  return (
    <div className="flex player-header absolute flex-row bg-primary items-end space-x-4 player-card">
      <Image src={Logo} alt={"Broski"} width={108} height={108} />
      <div className="flex flex-col mb-5 items-start text-brandWhite">
        <div className="font-dinCondensed text-3xl">Jamal DonTiqualous</div>
        <div className="font-dinCondensed text-lg">Data Points</div>
      </div>
    </div>
  );
};
