import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const player_id = searchParams.get("id");
  const playerDetails = await prisma.sms_player_stats.findMany({
    where: {
      player_stats_user_id: Number(player_id),
    },
  });
  const totalGames = playerDetails.length;

  let totalPoints = 0;
  let totalRebounds = 0;
  let totalAssists = 0;
  let totalSteals = 0;
  let totalBlocks = 0;
  let totalTurnovers = 0;
  let totalFieldGoalsMade = 0;
  let totalFieldGoalsAttempted = 0;
  let totalThreePointersMade = 0;
  let totalThreePointersAttempted = 0;
  let totalFreeThrowsMade = 0;
  let totalFreeThrowsAttempted = 0;

  playerDetails.forEach((log: any) => {
    totalPoints += log.player_stats_total_points;
    totalRebounds +=
      log.player_stats_off_rebound_oreb + log.player_stats_def_rebound_dreb;
    totalAssists += log.player_stats_assist_asst;
    totalSteals += log.player_stats_steal_stl;
    totalBlocks += log.player_stats_block_blk;
    totalTurnovers += log.player_stats_turnover_to;
    totalAssists += log.player_stats_assist_asst;
    totalSteals += log.player_stats_steal_stl;
    totalBlocks += log.player_stats_block_blk;
    totalTurnovers += log.player_stats_turnover_to;
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

  const seasonAverages = {
    Games: totalGames,
    PTS: (totalPoints / totalGames || 0).toFixed(1),
    REB: (totalRebounds / totalGames || 0).toFixed(1),
    AST: (totalAssists / totalGames || 0).toFixed(1),
    STL: (totalSteals / totalGames || 0).toFixed(1),
    BLK: (totalBlocks / totalGames || 0).toFixed(1),
    TO: (totalTurnovers / totalGames || 0).toFixed(1),
    "FG%":
      totalFieldGoalsAttempted > 0
        ? ((totalFieldGoalsMade / totalFieldGoalsAttempted) * 100 || 0).toFixed(
            1
          )
        : "0.0",
    "3P%":
      totalThreePointersAttempted > 0
        ? (
            (totalThreePointersMade / totalThreePointersAttempted) * 100 || 0
          ).toFixed(1)
        : "0.0",
    "FT%":
      totalFreeThrowsAttempted > 0
        ? ((totalFreeThrowsMade / totalFreeThrowsAttempted) * 100 || 0).toFixed(
            1
          )
        : "0.0",
  };

  return NextResponse.json({ seasonAverages });
}
