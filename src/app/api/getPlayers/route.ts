import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const firstPlayer = await prisma.sms_user.findMany({
    where: {
      user_user_type_id: 1,
    },
  });

  return NextResponse.json({ firstPlayer });
}
