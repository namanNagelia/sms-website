import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const playerGameLogs = await prisma.sms_player_stat_new.findMany({
    where: {
      player_information_id: Number(id),
    },
  });
  let InsidefgMakes = 0;
  let InsidefgAttempts = 0;
  let threePtMakes = 0;
  let threePtAttempts = 0;
  let ftMakes = 0;
  let ftAttempts = 0;
  const uniqueOpponentTeams = new Set();

  playerGameLogs.forEach((log: any) => {
    uniqueOpponentTeams.add(log.game_info_id);
    switch (log.game_stat_stat_count) {
      case "OnePointFG":
        ftMakes += 1;
        ftAttempts += 1;
        break;
      case "OnePointFGMiss":
        ftAttempts += 1;
        break;
      case "TwoPointFG":
        InsidefgMakes += 1;
        InsidefgAttempts += 1;
        break;
      case "TwoPointFGMiss":
        InsidefgAttempts += 1;
        break;
      case "ThreePointFG":
        threePtMakes += 1;
        threePtAttempts += 1;
        break;
      case "ThreePointFGMiss":
        threePtAttempts += 1;
        break;
    }
  });
  const length = uniqueOpponentTeams.size;
  const InsidefgPercent = InsidefgMakes / InsidefgAttempts;
  const threePtPercent = threePtMakes / threePtAttempts;
  const ftPercent = ftMakes / ftAttempts;
  const InsidefgTendency =
    InsidefgAttempts / (InsidefgAttempts + threePtAttempts + ftAttempts);
  const threePtTendency =
    threePtAttempts / (InsidefgAttempts + threePtAttempts + ftAttempts);

  const shotTypes = {
    InsideFGM: InsidefgMakes,
    AvgInsideFGM: (InsidefgMakes / length).toFixed(2),
    InsideFGA: InsidefgAttempts,
    AvgInsideFGA: (InsidefgAttempts / length).toFixed(2),
    InsideFGPercent: (InsidefgPercent * 100).toFixed(2),
    InsideFGTendency: (InsidefgTendency * 100).toFixed(2),
    ThreePtFGM: threePtMakes,
    AvgThreePtFGM: (threePtMakes / length).toFixed(2),
    ThreePtFGA: threePtAttempts,
    AvgThreePtFGA: (threePtAttempts / length).toFixed(2),
    ThreePtFGPercent: (threePtPercent * 100).toFixed(2),
    ThreePtFGTendency: (threePtTendency * 100).toFixed(2),
    FTM: ftMakes,
    FTA: ftAttempts,
    FTPercent: (ftPercent * 100).toFixed(2),
  };

  return NextResponse.json({ shotTypes });
}

//makes, attempts, tendency, %
