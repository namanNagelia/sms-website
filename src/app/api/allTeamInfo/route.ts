import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const teams = await prisma.sms_team.findMany();
  return NextResponse.json({ teams });
}
