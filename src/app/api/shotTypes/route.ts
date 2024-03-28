import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const playerDetails = await prisma.sms_player_stats.findMany({
    where: {
      player_stats_user_id: Number(id),
    },
  });
  const length = playerDetails.length;
  let totalFieldGoalsMade = 0;
  let totalFieldGoalsAttempted = 0;
  let totalThreePointersMade = 0;
  let totalThreePointersAttempted = 0;
  let totalFreeThrowsMade = 0;
  let totalFreeThrowsAttempted = 0;
  let totalInsideMade = 0;
  let totalInsideAttempted = 0;

  playerDetails.forEach((log: any) => {
    let [fgMade, fgAttempted] = log.player_stats_fg.split("-").map(Number);
    if (fgMade > fgAttempted) {
      [fgMade, fgAttempted] = [fgAttempted, fgMade]; // Swap if made is greater than attempted
    }
    totalFieldGoalsMade += fgMade;
    totalFieldGoalsAttempted += fgAttempted;

    // Process Three Pointers
    let [threePMade, threePAttempted] = log.player_stats_3pt
      .split("-")
      .map(Number);
    if (threePMade > threePAttempted) {
      [threePMade, threePAttempted] = [threePAttempted, threePMade]; // Swap if made is greater than attempted
    }
    totalThreePointersMade += threePMade;
    totalThreePointersAttempted += threePAttempted;

    // Process Free Throws
    let [ftMade, ftAttempted] = log.player_stats_ft.split("-").map(Number);
    if (ftMade > ftAttempted) {
      [ftMade, ftAttempted] = [ftAttempted, ftMade]; // Swap if made is greater than attempted
    }
    totalFreeThrowsMade += ftMade;
    totalFreeThrowsAttempted += ftAttempted;
  });
  totalInsideAttempted = totalFieldGoalsAttempted - totalThreePointersAttempted;
  totalInsideMade = totalFieldGoalsMade - totalThreePointersMade;

  const InsidefgPercent = totalInsideMade / totalInsideAttempted;
  const threePtPercent = totalThreePointersMade / totalThreePointersAttempted;
  const ftPercent = totalFreeThrowsMade / totalFreeThrowsAttempted;
  const InsidefgTendency =
    totalInsideAttempted /
    (totalInsideAttempted +
      totalThreePointersAttempted +
      totalFreeThrowsAttempted);
  const threePtTendency =
    totalThreePointersAttempted /
    (totalInsideAttempted +
      totalThreePointersAttempted +
      totalFreeThrowsAttempted);

  const shotTypes = {
    InsideFGM: totalInsideMade,
    AvgInsideFGM: (totalInsideMade / length).toFixed(2),
    InsideFGA: totalInsideAttempted,
    AvgInsideFGA: (totalInsideAttempted / length).toFixed(2),
    InsideFGPercent: (InsidefgPercent * 100).toFixed(2),
    InsideFGTendency: (InsidefgTendency * 100).toFixed(2),
    ThreePtFGM: totalThreePointersMade,
    AvgThreePtFGM: (totalThreePointersMade / length).toFixed(2),
    ThreePtFGA: totalThreePointersAttempted,
    AvgThreePtFGA: (totalThreePointersAttempted / length).toFixed(2),
    ThreePtFGPercent: (threePtPercent * 100).toFixed(2),
    ThreePtFGTendency: (threePtTendency * 100).toFixed(2),
    FTM: totalFreeThrowsMade,
    FTA: totalFreeThrowsAttempted,
    FTPercent: (ftPercent * 100).toFixed(2),
  };

  return NextResponse.json({ shotTypes });
}

//makes, attempts, tendency, %
