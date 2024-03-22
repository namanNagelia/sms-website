import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const games = await prisma.game_INFO.findMany();
  return NextResponse.json({ games });
}
