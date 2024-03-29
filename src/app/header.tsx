import React from "react";
import HeaderUI from "./headerui";
const fetchPlayer = async () => {
  try {
    const url =
      process.env.DEV === "0"
        ? "http://localhost:3000/api/getPlayers"
        : "https://main.d1ad0hew81s5fh.amplifyapp.com/api/getPlayers";
    const res = await fetch(url, {
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
