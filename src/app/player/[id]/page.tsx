import React from "react";
import PlayerPageUI from "./ui";

const fetchPlayerProfile = async (id: string) => {
  try {
    const url =
      process.env.DEV === "0"
        ? `http://localhost:3000/api/specificPlayer?id=${id}`
        : `https://main.d1ad0hew81s5fh.amplifyapp.com/api/specificPlayer?id=${id}`;
    const res = await fetch(url, {
      next: { revalidate: 1 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchAverages = async (id: string) => {
  try {
    const url =
      process.env.DEV === "0"
        ? `http://localhost:3000/api/playerStatsSeason?id=${id}`
        : `https://main.d1ad0hew81s5fh.amplifyapp.com/api/playerStatsSeason?id=${id}`;
    const res = await fetch(url, {
      next: { revalidate: 1 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchShotChartData = async (id: string) => {
  try {
    const url =
      process.env.DEV === "0"
        ? `http://localhost:3000/api/seasonShotLocations?id=${id}`
        : `https://main.d1ad0hew81s5fh.amplifyapp.com/api/seasonShotLocations?id=${id}`;
    const res = await fetch(url, {
      next: { revalidate: 1 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchShotLocations = async (id: string) => {
  try {
    const url =
      process.env.DEV === "0"
        ? `http://localhost:3000/api/shotTypes?id=${id}`
        : `https://main.d1ad0hew81s5fh.amplifyapp.com/api/shotTypes?id=${id}`;
    const res = await fetch(url, {
      next: { revalidate: 1 },
    });
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
  const shotLocations = await fetchShotLocations(params.id);
  return (
    <PlayerPageUI
      profileStats={playerProfile}
      seasonAverages={seasonAverages}
      shotChartData={shotChartData}
      shotTypesData={shotLocations}
    />
  );
}
