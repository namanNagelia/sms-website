import React from "react";
import HeaderUI from "./headerui";
const fetchPlayer = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/allPlayers", {
      next: { revalidate: 1 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Header() {
  const playerData = await fetchPlayer();
  return <HeaderUI playerData={playerData} />;
}
