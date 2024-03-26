import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const coachDetails = await prisma.sms_user.findMany({
    where: {
      user_user_type_id: 3,
    },
  });

  const coachesDetails = [];

  for (const coach of coachDetails) {
    const id = coach.user_id;
    const team = await prisma.sms_player_coach_xref.findFirst({
      where: {
        player_coach_xref_user_id3: id,
      },
    });

    if (team) {
      coachesDetails.push({
        user_id: coach.user_id,
        coach_photo: coach.user_pic_url,
        user_first_name: coach.user_first_name,
        user_last_name: coach.user_last_name,
        user_phone_number: coach.user_phone_number,
        player_coach_xref_team_id: team.player_coach_xref_team_id,
      });
    }
  }

  return NextResponse.json({ coachesDetails });
}
