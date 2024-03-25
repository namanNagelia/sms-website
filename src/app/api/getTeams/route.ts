import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const school = await prisma.sms_team.findFirst({
    where: {
      team_organisation_id: Number(id),
    },
  });

  return NextResponse.json({ school });
}
