import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const players = await prisma.sms_player_coach_xref.findMany({
    where: {
      player_coach_xref_team_id: Number(id),
    },
  });
  let roster = [];
  for (const player of players) {
    const playerDetails = await prisma.sms_user.findFirst({
      where: {
        user_id: player.player_coach_xref_user_id1,
      },
    });
    if (playerDetails) {
      roster.push(playerDetails);
    }
  }

  return NextResponse.json({ roster });
}
