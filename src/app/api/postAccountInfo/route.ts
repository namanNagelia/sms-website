import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const users = await prisma.sms_user.create({
    data: {
      user_first_name: data.user_first_name,
      user_last_name: data.user_last_name,
      user_email: data.user_email,
      user_firebase_id: data.user_firebase_id,
    },
  });
  console.log(data);

  return new NextResponse("", {
    status: 200,
  });
}
