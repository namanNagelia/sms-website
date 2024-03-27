import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const user = await prisma.sms_user.findFirst({
    where: {
      user_firebase_id: id,
    },
  });
  return new NextResponse(JSON.stringify({ user }), {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}
