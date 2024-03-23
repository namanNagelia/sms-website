import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const firstPlayer = await prisma.sms_player_info.findMany();
  return NextResponse.json({ firstPlayer });
}
