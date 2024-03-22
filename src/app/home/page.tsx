import React from "react";
import HomeUI from "./ui";

const fetchPlayer = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/allPlayers");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchAllGames = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/gameInfo");
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
