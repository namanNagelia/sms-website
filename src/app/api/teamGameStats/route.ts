import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const game_id = searchParams.get("id");
  const gameDetails = await prisma.sms_game_stats.findMany({
    where: {
      game_stats_game_id: Number(game_id),
    },
    select: {
      game_stats_fg_percentage: true,
      game_stats_3p_percentage: true,
      game_stats_ft_percentage: true,
      game_stats_def_rebound_dreb: true,
      game_stats_off_rebound_oreb: true,
      game_stats_foul: true,
      game_stats_steal_stl: true,
      game_stats_turnover_to: true,
      game_stats_block_blk: true,
      game_stats_assist_asst: true,
    },
  });

  return NextResponse.json({ gameDetails });
}

// const playerDetails = await prisma.sms_user.findMany({
//   where:{
//     user_id:
//   }
// })
