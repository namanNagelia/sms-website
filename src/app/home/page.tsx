import React from "react";
import HomeUI from "./ui";

const fetchPlayer = async () => {
  try {
    const url =
      process.env.DEV === "0"
        ? "http://localhost:3000/api/allPlayers"
        : "https://main.d1ad0hew81s5fh.amplifyapp.com/api/allPlayers";
    const res = await fetch(url, {
      next: { revalidate: 1 },
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
        : "https://main.d1ad0hew81s5fh.amplifyapp.com/api/gameInfo";
    const res = await fetch(url, {
      next: { revalidate: 1 },
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
  console.log(playerData);
  console.log("Games");
  return <HomeUI playerData={playerData} gameInfo={gameInfo} />;
}
