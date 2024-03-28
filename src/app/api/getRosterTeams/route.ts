import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const players = await prisma.sms_team_roster.findMany({
    where: {
      team_roster_team_id: Number(id),
    },
  });
  let roster = [];
  for (const player of players) {
    console.log(player);
    const playerDetails = await prisma.sms_user.findFirst({
      where: {
        user_id: player.team_roster_sms_user_app_user_id,
        user_user_type_id: 1,
      },
    });
    console.log(playerDetails);
    if (playerDetails) {
      roster.push(playerDetails);
    }
  }

  return NextResponse.json({ roster });
}
