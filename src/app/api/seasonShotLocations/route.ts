import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
interface ShotLog {
  x: number;
  y: number;
  shotType: string;
}
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const playerGameLogs = await prisma.sms_player_stat_new.findMany({
    where: {
      player_information_id: Number(id),
    },
  });
  let returnable: ShotLog[] = []; // Correct initialization of an array

  playerGameLogs.forEach((log: any) => {
    if (log.game_stat_court_Position_Y > 0) {
      let adder: ShotLog = {
        x: log.game_stat_court_position_X,
        y: log.game_stat_court_Position_Y,
        shotType: log.game_stat_stat_count,
      };
      returnable.push(adder);
    }
  });
  // Directly return JSON without needing to stringify manually
  return NextResponse.json(returnable);
}
