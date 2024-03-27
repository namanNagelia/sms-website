import React from "react";
import CompleteProfilePageUI from "./ui";

// const fetchAllTeams = async () => {
//   try {
//     const url =
//       process.env.DEV === "0"
//         ? "http://localhost:3000/api/getAllTeams"
//         : "https://sms-website-sigma.vercel.app/api/getAllTeams";
//     const res = await fetch(url, {
//       next: { revalidate: 1000 * 60 * 60 },
//     });
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
export default async function CompleteProfilePage() {
  // const teams = await fetchAllTeams();
  return <CompleteProfilePageUI />;
}
