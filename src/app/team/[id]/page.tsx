import React from "react";
import TeamUI from "./ui";

const fetchCoach = async () => {
  try {
    const url =
      process.env.DEV === "0"
        ? `http://localhost:3000/api/getCoach`
        : `https://sms-website-sigma.vercel.app/api/getCoach`;
    const res = await fetch(url, {
      next: { revalidate: 1000 * 60 * 60 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchRoster = async (id: string) => {
  try {
    const url =
      process.env.DEV === "0"
        ? `http://localhost:3000/api/getRosterTeams?id=${id}`
        : `https://sms-website-sigma.vercel.app/api/getRosterTeams/?id=${id}`;
    const res = await fetch(url, {
      next: { revalidate: 1 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchOrgDetails = async (id: string) => {
  try {
    const url =
      process.env.DEV === "0"
        ? `http://localhost:3000/api/getTeamInfo?id=${id}`
        : `https://sms-website-sigma.vercel.app/api/getTeamInfo/?id=${id}`;
    const res = await fetch(url, {
      next: { revalidate: 1 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchTeamDetails = async (id: string) => {
  try {
    const url =
      process.env.DEV === "0"
        ? `http://localhost:3000/api/getTeams?id=${id}`
        : `https://sms-website-sigma.vercel.app/api/getTeams/?id=${id}`;
    const res = await fetch(url, {
      next: { revalidate: 1000 * 60 * 60 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default async function TeamPage({ params }: { params: { id: string } }) {
  const coach = await fetchCoach();
  const roster = await fetchRoster(params.id);
  const orgDetails = await fetchOrgDetails(params.id);
  console.log(orgDetails);
  const teamDetails = await fetchTeamDetails(params.id);
  return (
    <TeamUI
      coach={coach}
      roster={roster}
      id={params.id}
      organizationDetail={orgDetails}
      teamInfo={teamDetails}
    />
  );
}
