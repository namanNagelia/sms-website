import React from "react";
import PlayerPageUI from "./ui";

const fetchPlayerProfile = async (id: string) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/specificPlayer?id=${id}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function PlayerPage({
  params,
}: {
  params: { id: string };
}) {
  const playerProfile = await fetchPlayerProfile(params.id);
  return <PlayerPageUI profileStats={playerProfile} />;
}
