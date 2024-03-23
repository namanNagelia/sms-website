import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const games = await prisma.sms_game_info.findMany();
  return NextResponse.json({ games });
}
