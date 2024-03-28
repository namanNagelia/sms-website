import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const teamRoster = await prisma.sms_team_roster.findFirst({
    where: {
      team_roster_user_id: Number(id),
    },
  });
  const team = await prisma.sms_team.findFirst({
    where: {
      team_id: teamRoster.team_roster_team_id,
    },
  });
  //org change
  const school = await prisma.sms_organizations.findFirst({
    where: {
      Org_id: team.team_organisation_id,
    },
  });
  return NextResponse.json(school);
}
