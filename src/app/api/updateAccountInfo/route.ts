import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const users = await prisma.sms_user.update({
    where: { user_firebase_id: data.user_firebase_id },
    data: {
      user_user_type_id: data.user_user_type_id,
      user_phone_number: data.user_phone_number,
    },
  });

  //Add new row to team table, add the team ID, map to org ID, update the on player first and last name, and add jersey number, grad, height, weight position and gpa
  console.log(data);

  return new NextResponse("", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}
