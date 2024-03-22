import React from "react";
import GamePageUI from "./ui";

const fetchGameDetails = async (id: string) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/specificGameID?id=${id}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function GamePage({ params }: { params: { id: string } }) {
  const gameDetails = await fetchGameDetails(params.id);
  console.log(gameDetails);
  return <GamePageUI gameDetailsStats={gameDetails} />;
}
