import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const game = await prisma.sms_game_detail.findFirst({
    where: {
      game_id: Number(id),
    },
  });
  return NextResponse.json({ game });
}
