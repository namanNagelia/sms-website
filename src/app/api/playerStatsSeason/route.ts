import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  // Fetch player game logs
  const playerGameLogs = await prisma.sms_player_stat_new.findMany({
    where: {
      player_information_id: Number(id),
    },
  });

  // Initialize counters for statistics
  let pts = 0;
  let reb = 0;
  let ast = 0;
  let stl = 0;
  let blk = 0;
  let turnovers = 0;
  let fgMakes = 0;
  let fgAttempts = 0;
  let threePtMakes = 0;
  let threePtAttempts = 0;
  let ftMakes = 0;
  let ftAttempts = 0;
  const uniqueOpponentTeams = new Set();

  // Process each game log for statistics
  playerGameLogs.forEach((log: any) => {
    uniqueOpponentTeams.add(log.game_info_id);

    switch (log.game_stat_stat_count) {
      case "OnePointFG":
        pts += 1;
        ftMakes += 1;
        ftAttempts += 1;
        break;
      case "OnePointFGMiss":
        ftAttempts += 1;
        break;
      case "TwoPointFG":
        pts += 2;
        fgMakes += 1;
        fgAttempts += 1;
        break;
      case "TwoPointFGMiss":
        fgAttempts += 1;
        break;
      case "ThreePointFG":
        pts += 3;
        fgMakes += 1;
        fgAttempts += 1;
        threePtMakes += 1;
        threePtAttempts += 1;
        break;
      case "ThreePointFGMiss":
        fgAttempts += 1;
        threePtAttempts += 1;
        break;
      case "DefReb":
      case "OffReb":
        reb += 1;
        break;
      case "Assist":
        ast += 1;
        break;
      case "Steal":
        stl += 1;
        break;
      case "Block":
        blk += 1;
        break;
      case "Turnover":
        turnovers += 1;
        break;
    }
  });
  const length = uniqueOpponentTeams.size;

  // Calculate percentages
  const fgPercent =
    fgAttempts > 0 ? parseFloat(((fgMakes / fgAttempts) * 100).toFixed(2)) : 0;
  const threePtPercent =
    threePtAttempts > 0
      ? parseFloat(((threePtMakes / threePtAttempts) * 100).toFixed(2))
      : 0;
  const ftPercent =
    ftAttempts > 0 ? parseFloat(((ftMakes / ftAttempts) * 100).toFixed(2)) : 0;
  const missedFG = fgAttempts - fgMakes;
  const missedFT = ftAttempts - ftMakes;
  const PER =
    (pts + reb + ast + stl + blk - missedFG - missedFT - turnovers) / length;

  // Compile season averages
  const seasonAverages = {
    PTS: (pts / length).toFixed(1),
    REB: (reb / length).toFixed(1),
    AST: (ast / length).toFixed(1),
    STL: (stl / length).toFixed(1),
    BLK: (blk / length).toFixed(1),
    TO: (turnovers / length).toFixed(1),
    "FG%": fgPercent,
    "3P%": threePtPercent,
    "FT%": ftPercent,
    PER: PER.toFixed(1),
  };

  // Return the season averages as JSON
  return NextResponse.json({ seasonAverages });
}
