import React from "react";
import GamePageUI from "./ui";

// const fetchGameDetails = async (id: string) => {
//   try {
//     const url =
//       process.env.DEV === "0"
//         ? `http://localhost:3000/api/specificGameID?id=${id}`
//         : `https://main.d1ad0hew81s5fh.amplifyapp.com/api/specificGameID?id=${id}`;
//     const res = await fetch(url, {
//       next: { revalidate: 1 },
//     });
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export default async function GamePage({ params }: { params: { id: string } }) {
  // const gameDetails = await fetchGameDetails(params.id);
  // return <GamePageUI gameDetailsStats={gameDetails} />;
  return <div>Test</div>;
}
