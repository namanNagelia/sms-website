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

export default async function Home() {
  const playerData = await fetchPlayer();
  console.log(playerData);
  console.log(typeof playerData);
  return <HomeUI playerData={playerData} />;
}
