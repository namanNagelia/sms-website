import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import { skip } from "node:test";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const game_id = searchParams.get("id");
  const playerStats = await prisma.sms_player_stats.findMany({
    where: {
      player_stats_user_id: Number(game_id),
    },
  });
  let gameLogs = [];

  for (const log of playerStats) {
    const games = await prisma.sms_game_detail.findFirst({
      where: {
        game_id: log.player_stats_game_id,
      },
    });
    let adder = {
      game: games.game_name_cal,
      PTS: log.player_stats_total_points,
      AST: log.player_stats_assist_asst,
      REB:
        log.player_stats_off_rebound_oreb + log.player_stats_def_rebound_dreb,
      STL: log.player_stats_steal_stl,
      BLK: log.player_stats_block_blk,
      TO: log.player_stats_turnover_to,
      "+/-": log.player_stats_plusminus,
      FG: log.player_stats_fg,
      "3P": log.player_stats_3pt,
      FT: log.player_stats_ft,
    };
    gameLogs.push(adder);
  }

  return NextResponse.json({ gameLogs });
}

// const playerDetails = await prisma.sms_user.findMany({
//   where:{
//     user_id:
//   }
// })
