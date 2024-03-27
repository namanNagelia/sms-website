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
  let totalPts = 0,
    totalReb = 0,
    totalAst = 0,
    totalStl = 0,
    totalBlk = 0,
    totalTo = 0;
  let totalFgMade = 0,
    totalFgAttempted = 0,
    total3pMade = 0,
    total3pAttempted = 0,
    totalFtMade = 0,
    totalFtAttempted = 0;
  let fgAttempts = 0;
  let ThreepAttempts = 0;
  let ftAttempts = 0;

  playerDetails.forEach((game: any) => {
    fgAttempts = 0;
    ThreepAttempts = 0;
    ftAttempts = 0;
    totalPts += game.player_stats_total_points;
    totalReb +=
      game.player_stats_def_rebound_dreb + game.player_stats_off_rebound_oreb;
    totalAst += game.player_stats_assist_asst;
    totalStl += game.player_stats_steal_stl;
    totalBlk += game.player_stats_block_blk;
    totalTo += game.player_stats_turnover_to;
    totalFgMade += game.player_stats_fg;
    fgAttempts += Math.round(
      (100 * game.player_stats_fg) / game.player_stats_fg_percentage
    );
    fgAttempts = isNaN(fgAttempts) ? 1 : fgAttempts;

    totalFgAttempted += fgAttempts;
    total3pMade += game.player_stats_3pt;
    ThreepAttempts = 0;
    ThreepAttempts = Math.round(
      (100 * game.player_stats_3pt) / game.player_stats_3p_percentage
    );
    ThreepAttempts = isNaN(ThreepAttempts) ? 0 : ThreepAttempts;

    total3pAttempted += ThreepAttempts;
    totalFtMade += game.player_stats_ft;
    ftAttempts = 0;
    ftAttempts = Math.round(
      (100 * game.player_stats_ft) / game.player_stats_ft_percentage
    );
    ftAttempts = isNaN(ftAttempts) ? 0 : ftAttempts;

    totalFtAttempted += ftAttempts;
    ftAttempts = 0;
    // Assuming fields for FG attempted/made, 3P attempted/made, FT attempted/made are provided
    // You would calculate the totals for FG%, 3P%, FT% calculations here
  });
  const seasonAverages = {
    PTS: (totalPts / totalGames).toFixed(1),
    REB: (totalReb / totalGames).toFixed(1),
    AST: (totalAst / totalGames).toFixed(1),
    STL: (totalStl / totalGames).toFixed(1),
    BLK: (totalBlk / totalGames).toFixed(1),
    TO: (totalTo / totalGames).toFixed(1),
    "FG%": ((totalFgMade / totalFgAttempted) * 100).toFixed(1),
    "3P%": ((total3pMade / total3pAttempted) * 100).toFixed(1),
    "FT%": ((totalFtMade / totalFtAttempted) * 100).toFixed(1),
    "2P%": (
      ((totalFgMade - total3pMade) / (totalFgAttempted - total3pAttempted)) *
      100
    ).toFixed(1),
  };

  return NextResponse.json({ seasonAverages });
}
