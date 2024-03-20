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
      <div className="flex flex-row">
        <BiometricCard />
      </div>

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
}

const BiometricCard = () => {
  return (
    <div className="default-card flex flex-col items-center py-8 space-y-3">
      <div className=" font-dinCondensed text-brandWhite text-5xl bold">
        Biometerics
      </div>
      <div className="h-1 bg-brandGrey w-3/4 rounded-md" />
      <div className="text-brandGrey font-dinCondensed text-2xl mb-4">Selesian, Los Angeles</div>

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
}
