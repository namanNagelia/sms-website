import React from "react";
import Image from "next/image";
import Logo from "@/../public/SMSLogo.png";

export default function PlayerPage() {
  return (
    <div className="h-full w-full flex flex-col text-center">
      <PlayerNameBanner />
      <div className="h-full w-full"></div>
    </div>
  );
}

const PlayerNameBanner = () => {
  return (
    <div className="flex player-header absolute flex-row bg-primary items-end space-x-4 player-card">
      <Image src={Logo} alt={"Broski"} width={108} height={108} />
      <div className="flex flex-col mb-5 items-start text-brandWhite">
        <div className="font-dinCondensed text-3xl">Jamal Marshal</div>
        <div className="font-dinCondensed text-lg">Data Points</div>

      </div>
    </div>
  );
}
