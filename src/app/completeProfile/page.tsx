import React from "react";
import CompleteProfilePageUI from "./ui";

const fetchAllTeams = async () => {
  try {
    const url =
      process.env.DEV === "0"
        ? "http://localhost:3000/api/getAllTeams"
        : "https://sms-website-sigma.vercel.app/api/getAllTeams";
    const res = await fetch(url, {
      next: { revalidate: 1000 * 60 * 60 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchPlayers = async () => {
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

const fetchColleges = async () => {
  try {
    const url =
      process.env.DEV === "0"
        ? "http://localhost:3000/api/fetchColleges"
        : "https://sms-website-sigma.vercel.app/api/fetchColleges";
    const res = await fetch(url, {
      next: { revalidate: 1000 * 60 * 60 * 7 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default async function CompleteProfilePage() {
  const teams = await fetchAllTeams();
  const players = await fetchPlayers();
  const colleges = await fetchColleges();
  return (
    <CompleteProfilePageUI
      schoolOptions={teams}
      players={players}
      colleges={colleges}
    />
  );
}
