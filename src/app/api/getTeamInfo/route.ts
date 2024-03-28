import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  //change to org
  const school = await prisma.sms_org.findMany({
    where: {
      Org_id: Number(id),
    },
  });

  return NextResponse.json({ school });
}
