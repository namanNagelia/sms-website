import React from "react";
import HomeUI from "./ui";

const fetchPlayer = async () => {
  try {
    const url =
      process.env.DEV === "0"
        ? "http://localhost:3000/api/getPlayers"
        : "https://sms-website-sigma.vercel.app/api/getPlayers";
    const res = await fetch(url, {
      next: { revalidate: 1000 * 60 * 60 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchAllGames = async () => {
  try {
    const url =
      process.env.DEV === "0"
        ? "http://localhost:3000/api/gameInfo"
        : "https://sms-website-sigma.vercel.app/api/gameInfo";
    const res = await fetch(url, {
      next: { revalidate: 1000 * 60 * 60 },
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
      next: { revalidate: 1000 * 60 * 60 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default async function Home() {
  const playerData = await fetchPlayer();
  const gameInfo = await fetchAllGames();
  const teamData = await teamInfo();
  return (
    <HomeUI playerData={playerData} gameInfo={gameInfo} teamData={teamData} />
  );
}
