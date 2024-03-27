import React from "react";
import GamePageUI from "./ui";

const fetchGameDetails = async (id: string) => {
  try {
    const url =
      process.env.DEV === "0"
        ? `http://localhost:3000/api/specificGameID?id=${id}`
        : `https://sms-website-sigma.vercel.app/api/specificGameID/?id=${id}`;
    const res = await fetch(url, {
      next: { revalidate: 1 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const teamInfo = async () => {
  try {
    const url =
      process.env.DEV === "0"
        ? "http://localhost:3000/api/allTeamInfo"
        : "https://sms-website-sigma.vercel.app/api/allTeamInfo";
    const res = await fetch(url, {
      next: { revalidate: 1 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function GamePage({ params }: { params: { id: string } }) {
  const gameDetails = await fetchGameDetails(params.id);
  const teamInfoData = await teamInfo();
  return <GamePageUI gameDetailsStats={gameDetails} teamInfo={teamInfoData} />;
}
