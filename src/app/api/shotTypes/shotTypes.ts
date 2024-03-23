import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const playerGameLogs = await prisma.GAME_STATS_FOR_PLAYERS.findMany({
    where: {
      game_stat_player_id: Number(id),
    },
  });
  return NextResponse.json({ playerGameLogs });
}
