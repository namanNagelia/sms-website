import React from "react";
import PlayerPageUI from "./ui";

const fetchPlayerProfile = async (id: string) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/specificPlayer?id=${id}`,
      {
        next: { revalidate: 1 },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchAverages = async (id: string) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/playerStatsSeason?id=${id}`,
      {
        next: { revalidate: 1 },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchShotChartData = async (id: string) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/seasonShotLocations?id=${id}`,
      {
        next: { revalidate: 1 },
      }
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
  const seasonAverages = await fetchAverages(params.id);
  const shotChartData = await fetchShotChartData(params.id);
  console.log(playerProfile);
  return (
    <PlayerPageUI
      profileStats={playerProfile}
      seasonAverages={seasonAverages}
      shotChartData={shotChartData}
    />
  );
}
