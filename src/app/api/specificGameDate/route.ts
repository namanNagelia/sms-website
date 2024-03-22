import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const date = searchParams.get("date");
  const game = await prisma.game_INFO.findFirst({
    where: {
      Game_Date: Number(date),
    },
  });
  return NextResponse.json({ game });
}
