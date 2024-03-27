import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import { skip } from "node:test";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const game_id = searchParams.get("id");
  const gameDetails = await prisma.sms_player_stats.findMany({
    where: {
      player_stats_game_id: Number(game_id),
    },
    select: {
      player_stats_total_points: true,
      player_stats_def_rebound_dreb: true,
      player_stats_off_rebound_oreb: true,
      player_stats_assist_asst: true,
      player_stats_team_id: true,
      player_stats_user_id: true,
    },
  });
  let returnable = [];

  for (const log of gameDetails) {
    if (log.player_stats_user_id === 0) {
      continue;
    }
    const playerDetails = await prisma.sms_user.findMany({
      where: {
        user_id: log.player_stats_user_id,
      },
      select: {
        user_first_name: true,
        user_last_name: true,
        user_position: true,
        user_pic_url: true,
      },
    });
    returnable.push({
      name: `${playerDetails[0].user_first_name} ${playerDetails[0].user_last_name}`,
      position: playerDetails[0].user_position,
      pts: log.player_stats_total_points,
      reb:
        log.player_stats_def_rebound_dreb + log.player_stats_off_rebound_oreb,
      ast: log.player_stats_assist_asst,
      team_id: log.player_stats_team_id,
      user_id: log.player_stats_user_id,
      pic_url: playerDetails[0].user_pic_url,
    });
  }
  return NextResponse.json({ returnable });
}

// const playerDetails = await prisma.sms_user.findMany({
//   where:{
//     user_id:
//   }
// })
