import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const users = await prisma.sms_user.update({
    where: { user_firebase_id: data.user_firebase_id },
    data: {
      user_user_type_id: data.user_user_type_id,
      user_year_of_graduation: data.user_year_of_graduation,
      user_height: data.user_height,
      user_weight: data.user_weight,
      user_position: data.user_position,
      user_jersey_no: data.user_jersey_no,
      user_gpa: data.user_gpa,
    },
  });
  console.log(data);

  return NextResponse.json(data);
  // const users = await prisma.sms_user.create({
  //   data: {
  //     user_first_name: first_name,
  //   },
  // });
}
