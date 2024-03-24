import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const coach = await prisma.sms_player_coach_xref.findFirst({
    where: {
      player_coach_xref_user_id1: Number(id),
    },
  });
  const team = await prisma.sms_team.findFirst({
    where: {
      team_id: coach.player_coach_xref_team_id,
    },
  });
  const school = await prisma.sms_organizations.findFirst({
    where: {
      Org_id: team.team_organisation_id,
    },
  });
  return NextResponse.json(school);
}
